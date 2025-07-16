"use client";

import { createContext, useContext } from "react";

type User = {
  name: string;
  email: string;
};

const AuthContext = createContext<{ user: User | null }>({ user: null });

export const useAuth = () => useContext(AuthContext);

// Temporal: en el layout proveeremos un usuario
export const AuthProvider = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) => {
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
