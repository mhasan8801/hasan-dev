import styled, {css} from "styled-components";
import Color from "./Color";

const TextColor = styled.text`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 120%;
color: ${Color.primary};

${props => props.$light && css`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 120%;
color: ${Color.primary};
`}

${props => props.$bold && css`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 56px;
line-height: 120%;
color: ${Color.primary};
`}
`

export default TextColor;