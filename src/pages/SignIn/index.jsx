import { useState } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function SignIn() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email | !password) {
      setError('You must fill in all fields.');
      return;
    }

    const res = signIn(email, password);
    if (res) {
      setError(res);
      return;
    }

    navigate('/home');
  };

  return (
    <C.Container>
      <C.Label>System Login</C.Label>
      <C.Content>
        <Input
          type='email'
          placeholder='Type your e-mail'
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError('')]}
        />
        <Input
          type='password'
          placeholder='Type your password'
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError('')]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text='Login' onClick={handleLogin} />
        <C.LabelSignUp>
          Doesn't have an account?
          <C.Strong>
            <Link to='/signup'>&nbsp;Register</Link>
          </C.Strong>
        </C.LabelSignUp>
      </C.Content>
    </C.Container>
  );
}
