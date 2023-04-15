import styled, {css} from "styled-components";
import Color from "./Color";

const Paragraph = styled.text`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 150%;
color: ${Color.paragraph};

${props => props.$textColor && css`
color: ${Color.primary};
`}

${props => props.$p2 && css`
font-size: 16px;
`}

${props => props.$p3 && css`
font-size: 14px;
`}
`

export default Paragraph;