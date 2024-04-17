import React, { createContext, useContext, useState } from "react";

// User インターフェースの更新
export interface User {
  loginId: string; // id から loginId へ変更
}

interface AuthContextValue {
  user: User | null;
  login: (loginId: string, password: string) => Promise<void>; // 引数の変更
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode}> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (loginId: string, password: string) => { // 引数の変更
    const user = { loginId }; // キーの変更
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
