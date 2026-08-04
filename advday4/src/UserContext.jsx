import { createContext, useContext } from "react";

// 1. Create Context with static default value
const UserContext = createContext({ name: "Alex", role: "Admin" });

// 2. Custom hook to consume it easily
export const useUser = () => useContext(UserContext);