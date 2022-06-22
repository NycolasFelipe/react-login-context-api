import { useState } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function SignUp() {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailConf, setEmailConf] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (!email | !emailConf | !password) {
      setError('You must fill in all fields.');
      return;
    } else if (email !== emailConf) {
      setError('E-mails are not the same.');
      return;
    }

    const res = signUp(email, password);
    if (res) {
      setError(res);
      return;
    }

    alert('User registered successfully');
    navigate('/');
  };

  return (
    <C.Container>
      <C.Label>Login System</C.Label>
      <C.Content>
        <Input
          type='email'
          placeholder='Type your e-mail'
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError('')]}
        />
        <Input
          type='email'
          placeholder='Type your e-mail again'
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError('')]}
        />
        <Input
          type='password'
          placeholder='Type your password'
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError('')]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text='Register' onClick={handleSignUp} />
        <C.LabelSignIn>
          Already have an account?
          <C.Strong>
            <Link to='/'>&nbsp;Login</Link>
          </C.Strong>
        </C.LabelSignIn>
      </C.Content>
    </C.Container>
  );
}
