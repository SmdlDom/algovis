import styled from 'styled-components';
import colorSheet from "../../../styles/colorSheet.styles";
import {getVisualiserCenterHeight} from "../../common/visualiserEnv/visualiserEnv.styles";


export const displayHeight = props => {
	return Math.trunc(9 * getVisualiserCenterHeight(props) / 10);
};

const marginTop = props => {
	return Math.trunc(getVisualiserCenterHeight(props)/20);
}

export const SortDisplayContainer = styled.div`
	height: ${displayHeight}px;
	width: 96%;
	margin-left: 2%;
	margin-top: ${marginTop}px;
	background-color: ${colorSheet.lighterGrey};
	border: 4px solid black;
`
