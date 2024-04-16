import apiClient from "./apiClient";

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
}

export const login = async (email: string, password: string): Promise<string> => {
  try {
    const response = await apiClient.post('/auth/login',{ email, password });
    const { token, user } = response.data;
    //　ユーザ情報を保存
    localStorage.setItem('user',JSON.stringify(user));
    return token;
  } catch (error) {
    throw new Error('メールアドレスまたはパスワードが無効です')
  }
};

export const logout = async (): Promise<void> => {
  try{
    await apiClient.post('/auth/logout');
    //　ユーザー情報を削除
    localStorage.removeItem('user');
  } catch (error) {
    console.error('ログアウトエラー:', error);
  }
};