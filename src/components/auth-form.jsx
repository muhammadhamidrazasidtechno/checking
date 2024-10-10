import React from 'react';
import { Container, TextField, Button, Typography, Box, Link } from '@mui/material';

const AuthForm = ({ email, setEmail, password, setPassword, isRegister, setIsRegister, handleAuth }) => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          {isRegister ? 'Register' : 'Login'}
        </Typography>
        <form onSubmit={handleAuth}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {isRegister ? 'Register' : 'Login'}
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            {isRegister ? 'Already have an account?' : "Don't have an account?"}
            <Link href="#" onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? ' Login' : ' Register'}
            </Link>
          </Typography>
        </form>
      </Box>
    </Container>
  );
};

export default AuthForm;
