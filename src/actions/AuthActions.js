export const Login = (Token) => (
  {
    type: 'LOGIN',
    Token,
  }
);

export const LogOut = () => (
  {
    type: 'LOG_OUT',
    Token: null,
  }
);