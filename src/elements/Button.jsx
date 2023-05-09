import styled, {css} from "styled-components";
import Color from "./Color.jsx";

const Button = styled.button`
background: transparent;
border-radius: 5px;
border: 1.5px solid ${Color.button};
color: ${Color.button};
padding: 0.25em 0.75em;

${props => props.$primary && css`
    background: ${Color.button};
    color: white;
    border-radius: 50px;
  `}
`;

export default Button;