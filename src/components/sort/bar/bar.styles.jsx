import styled from 'styled-components';
import colorSheet from "../../../styles/colorSheet.styles";

const getHeight = props => {
	return props.height
}

const getWidth = props => {
	return props.width;
}

const getXPos = props => {
	return props.XPos;
}

export const BarContainer = styled.div`
	height: ${getHeight}%;
	width: ${getWidth}%;
	background-color: ${colorSheet.primaryBlend};
	border-top: 2px solid black;
	border-right: 2px solid black;
	//position: absolute;
	//bottom: 0;
	//left: ${getXPos};
`;
