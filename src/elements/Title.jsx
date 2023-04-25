import styled, {css} from "styled-components";
import Color from "./Color";


const Title = styled.header`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 56px;
line-height: 120%;
color: ${Color.title};

${props => props.$h2 && css`
font-size: 48px;
`}

${props => props.$h3 && css`
font-size: 24px;
`}
`

export default Title;