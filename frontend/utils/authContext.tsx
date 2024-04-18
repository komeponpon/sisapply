import React, { createContext, useContext, useState } from "react";
import { login as loginUser } from "../utils/authUtils";

export interface User {
  loginId: string;
  companyName?: string; // companyName をオプショナルで追加
}

interface AuthContextValue {
  user: User | null;
  login: (loginId: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (loginId: string, password: string) => {
    try {
      const { token, companyName } = await loginUser(loginId, password); // authUtils からレスポンスを取得
      localStorage.setItem('token', token);
      setUser({ loginId, companyName }); // user 状態を更新
    } catch (error) {
      throw new Error('ログインに失敗しました');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
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
