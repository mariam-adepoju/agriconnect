import { create } from "zustand";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { ref, child, get } from "firebase/database";
import { auth, rtdb } from "@/firebase";

// Define the shape of your user profile data from RTDB
interface UserProfile {
  role: "consumer" | "farmer";
  firstName: string;
  lastName: string;
  location: string;
  address: string;
  email: string;
  farmName?: string;
}

interface AuthState {
  currentUser: User | null;
  userProfile: UserProfile | null;
  isLoading: boolean;

  // Actions
  initializeAuth: () => void;
  logout: () => void;
}

// Ensure the listener is only attached once
let isAuthListenerInitialized = false;

export const useAuthStore = create<AuthState>((set) => ({
  currentUser: null,
  userProfile: null,
  isLoading: true,

  // 1. Initialize Auth State Listener
  initializeAuth: () => {
    if (isAuthListenerInitialized) {
      console.log("[AuthStore] Listener already initialized.");
      return;
    }
    isAuthListenerInitialized = true;

    console.log("[AuthStore] Initializing Firebase Auth Listener...");

    onAuthStateChanged(auth, async (user) => {
      // Step 1: Update current user and mark initial load as complete
      set({ currentUser: user, isLoading: false });

      if (user) {
        // Step 2: Fetch User Profile from RTDB if logged in
        try {
          const dbRef = ref(rtdb);
          const snapshot = await get(child(dbRef, `users/${user.uid}`));

          if (snapshot.exists()) {
            set({ userProfile: snapshot.val() as UserProfile });
            // console.log(`[AuthStore] Profile loaded for ${user.uid}`);
          } else {
            console.warn(
              `[AuthStore] Profile missing for UID: ${user.uid}. Clearing profile state.`
            );
            set({ userProfile: null });
          }
        } catch (error) {
          console.error("[AuthStore] Failed to fetch user profile:", error);
          set({ userProfile: null });
        }
      } else {
        console.log("[AuthStore] No active user. Clearing state.");
        set({ userProfile: null });
      }
    });
  },

  // 3. Logout Action
  logout: async () => {
    set({ currentUser: null, userProfile: null });
    try {
      await signOut(auth);
      console.log("[AuthStore] User signed out successfully.");
    } catch (error) {
      console.error("[AuthStore] Logout failed:", error);
    }
  },
}));
