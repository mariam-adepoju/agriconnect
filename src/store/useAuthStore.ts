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
}

interface AuthState {
  currentUser: User | null;
  userProfile: UserProfile | null;
  isLoading: boolean;

  // Actions
  initializeAuth: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  currentUser: null,
  userProfile: null,
  isLoading: true,

  // 1. Initialize Auth State Listener
  initializeAuth: () => {
    onAuthStateChanged(auth, async (user) => {
      set({ currentUser: user, isLoading: false });

      if (user) {
        // 2. Fetch User Profile from RTDB if logged in
        const dbRef = ref(rtdb);
        const snapshot = await get(child(dbRef, `users/${user.uid}`));

        if (snapshot.exists()) {
          set({ userProfile: snapshot.val() as UserProfile });
        } else {
          // Fallback if profile is missing (should not happen after sign-up)
          set({ userProfile: null });
        }
      } else {
        // Clear profile data on logout
        set({ userProfile: null });
      }
    });
  },

  // 3. Logout Action
  logout: async () => {
    await signOut(auth);
  },
}));

// Run the initialization logic once to start listening for changes
// Note: This needs to be called somewhere global, like your App component useEffect.
