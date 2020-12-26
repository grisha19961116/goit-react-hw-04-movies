import s from './Button.module.css';

const Button = ({ onClick }) => {
  return <button onClick={() => onClick()}>Load more</button>;
};

export default Button;
