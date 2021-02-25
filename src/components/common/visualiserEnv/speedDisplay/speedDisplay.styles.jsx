import styled from 'styled-components';
import colorSheet from "../../../../styles/colorSheet.styles";

export const SpeedDisplayContainer = styled.div`
	width: 120px;
	height: 70%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background: ${colorSheet.lighterGrey};
	border: 2px solid black;
	border-radius: 10px;
	
	p {
		margin: auto;
	}
`;