import apiClient from "./apiClient";

export interface User {
  loginId: string;
  role: 'admin' | 'user';
}

// authUtils.ts の login 関数
export const login = async (loginId: string, password: string) => {
  try {
    const response = await apiClient.post('/api/login',{ loginId, password });
    console.log(response);
    const { token, companyName } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('companyName', companyName); // companyName も保存
    return { token, companyName }; // companyName を含むオブジェクトを返す
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