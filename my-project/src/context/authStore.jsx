import { create } from "zustand";

const authStore = (set) => ({
    email: "",
    interests: [],
    setEmail: (value) => set({ email: value }),
    setInterests: (value) => set({ interests: value }),
    reset: () => {
        set({
            email: "",
            interests: [],
        });
    },
});

const useAuthStore = create(authStore)

export default useAuthStore;