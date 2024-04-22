import * as React from 'react';
import { useRouter } from 'next/router';
import { login } from '../utils/authUtils'; // これはあなたのauthUtilsからのlogin関数を引き続き使用します
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';

export default function LoginFormWithJoy() {
  const router = useRouter();
  const [loginId, setLoginId] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      await login(loginId, password); // あなたのログインロジック
      router.push('/dashboard'); // 成功した場合はダッシュボードへ移動
    } catch (err) {
      console.error(err); // エラー処理
    }
  };

  return (
    <CssVarsProvider>
      <CssBaseline />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: 300 }}>
          <Stack spacing={2}>
            <Typography level="h4" component="h1">
              ログイン
            </Typography>
            <FormControl>
              <FormLabel htmlFor="loginId">ログインID</FormLabel>
              <Input
                id="loginId"
                type="text"
                value={loginId}
                onChange={(e) => setLoginId(e.target.value)}
                autoComplete="username"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">パスワード</FormLabel>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </FormControl>
            <Button type="submit" variant="solid" fullWidth>
              ログイン
            </Button>
          </Stack>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
