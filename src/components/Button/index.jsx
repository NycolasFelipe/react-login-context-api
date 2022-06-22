import * as C from './styles';

export const Button = ({ Text, onClick, Type = 'button' }) => {
  return (
    <C.Button type={Type} onClick={onClick}>
      {Text}
    </C.Button>
  );
};
