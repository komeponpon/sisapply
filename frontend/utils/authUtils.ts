import { Router, useRouter } from "next/router";
import apiClient from "./apiClient";

export interface User {
  loginId: string;
  role: 'admin' | 'user';
}

export const login = async (loginId: string, password: string) => {
  try {
    const response = await apiClient.post('/api/login',{ loginId, password });
    const { token } = response.data;
    //　ユーザ情報を保存
    localStorage.setItem('token', token);
    return token;
  } catch (error) {
    console.error('ログインエラー',error);
    throw new Error('ログインに失敗しました');
  }
};

export const logout = async (): Promise<void> => {
  try{
    //　ユーザー情報を削除
    localStorage.removeItem('token');
  } catch (error) {
    console.error('ログアウトエラー:', error);
  }
};