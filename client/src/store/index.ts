import { AuthSlice } from "types";
import { create } from "zustand";
import { createAuthSlice } from "./slice/auth-slice";

export const useStore = create<AuthSlice>((...a) => ({
  ...createAuthSlice(...a),
}));
