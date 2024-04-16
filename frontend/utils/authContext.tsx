import exp from "constants";
import React, { createContext, useContext, useState } from "react";

interface User {
  email: string;
}

interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext <AuthContextValue | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode}> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    const user = {email};
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context){
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};