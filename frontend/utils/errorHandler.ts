import {toast} from 'react-toastify';
import { AxiosError } from 'axios';

interface ErrorResponce {
  error: string;
}

export const handleError = (err: AxiosError) => {
  if (err.response) {
    const {status, data} = err.response;
    if (status === 401) {
      //　認証エラー
      toast.error('認証エラー：権限がありません');
    } else {
      const errorData = data as ErrorResponce;
      toast.error(errorData.error || 'エラーが発生しました');
    }
  } else if (err.request) {
    //　レスポンス不備
    toast.error('サーバからの応答を受信できませんでした');
  } else {
    //　その他のエラー
    toast.error('エラーが発生しました。後でもう一度試してください');
  }
}