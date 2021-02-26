import styled from 'styled-components';
import colorSheet from "../../../styles/colorSheet.styles";

export const displayHeight = props => {
	return Math.trunc(9 * props.height/10);
};

const marginTop = props => {
	return Math.trunc(props.height/20);
}

export const SortDisplayContainer = styled.div`
	height: ${displayHeight}px;
	width: 96%;
	margin-left: 2%;
	margin-top: ${marginTop}px;
	background-color: ${colorSheet.lighterGrey};
	border: 4px solid black;
`
