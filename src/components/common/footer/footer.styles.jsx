import styled from 'styled-components';
import colorSheet from "../../../styles/colorSheet.styles";

export const footerHeight = 30;

export const FooterContainer = styled.footer`
	width: 100%;
	height: ${footerHeight}px;
	background-color: ${colorSheet.darkGrey};
`;
