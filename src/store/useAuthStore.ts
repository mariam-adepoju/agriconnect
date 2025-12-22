import { create } from "zustand";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { ref, child, get } from "firebase/database";
import { auth, rtdb } from "@/firebase";
import { useCartStore } from "./useCartStore";

interface AuthState {
  currentUser: User | null;
  userProfile: UserProfile | null;
  isLoading: boolean;
  initializeAuth: () => void;
  logout: () => Promise<void>;
}

let isAuthListenerInitialized = false;

export const useAuthStore = create<AuthState>((set) => ({
  currentUser: null,
  userProfile: null,
  isLoading: true,

  initializeAuth: () => {
    if (isAuthListenerInitialized) return;
    isAuthListenerInitialized = true;

    onAuthStateChanged(auth, async (user) => {
      set({ currentUser: user, isLoading: false });

      if (user) {
        // Load user profile
        try {
          const snapshot = await get(child(ref(rtdb), `users/${user.uid}`));
          set({
            userProfile: snapshot.exists()
              ? (snapshot.val() as UserProfile)
              : null,
          });
        } catch (error) {
          console.error("[AuthStore] Failed to fetch profile:", error);
          set({ userProfile: null });
        }

        // Load & merge cart
        try {
          await useCartStore.getState().loadFirebaseCart();
          console.log("[AuthStore] Cart synced on login.");
        } catch (error) {
          console.error("[AuthStore] Cart sync failed:", error);
        }
      } else {
        set({ userProfile: null });
      }
    });
  },

  logout: async () => {
    set({ currentUser: null, userProfile: null });
    try {
      await useCartStore.getState().clearCart(); // fully await
      await signOut(auth);
      console.log("[AuthStore] User logged out successfully");
    } catch (error) {
      console.error("[AuthStore] Logout failed:", error);
    }
  },
}));
