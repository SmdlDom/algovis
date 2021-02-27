import styled, { css }from 'styled-components';
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

const isSelected = props => {
	if (props.selected === true) {
		return css`background-color: ${colorSheet.secondary}`
	}
}

const isSorted = props => {
	if (props.sorted === true) {
		return css`background-color: ${colorSheet.primary}`
	}
}
export const BarContainer = styled.div`
	height: ${getHeight}%;
	width: ${getWidth}px;
	background-color: ${colorSheet.primaryBlend};
	border: 2px solid black;
	position: absolute;
	bottom: 0;
	left: ${getXPos}px;
  transition: 0.2s all ease;
	${isSelected}
	${isSorted}
`;
