import { Btn } from "./Button.styled";

const Button = ({ onButtonClick }) => (
  <Btn type="button" onClick={onButtonClick}>
    Load more
  </Btn>
);

export default Button;
