import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/useAuth';
import * as C from './styles';

export default function Home() {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>Home</C.Title>
      <Button Text='Log Out' onClick={() => [signOut(), navigate('/')]} />
    </C.Container>
  );
}
