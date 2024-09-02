import { AuthSlice, UserInfo } from "./../../../types";
import { StateCreator } from "zustand";

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  userInfo: undefined,
  setUserInfo: (userInfo) => set({ userInfo }),
  updateUserInfo: (key, value) =>
    set((state) => ({
      userInfo: {
        ...state.userInfo,
        [key]: value,
      } as UserInfo,
    })),
  clearUserInfo: () => set({ userInfo: undefined }),
});
