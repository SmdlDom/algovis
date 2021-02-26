import styled from 'styled-components';
import {headerHeight} from "../header/header.styles";
import {footerHeight} from "../footer/footer.styles";
import colorSheet from "../../../styles/colorSheet.styles";

const sideSizePercentage = 5;
const controllerHeight = 40;
const borderThickness = 4;
const borderRadius = 20;
const gap = 5;

/* Get the height of this component dynamically*/
const getHeightFromProps = props => {
	return getHeight(props.windowHeight);
}

const getHeight = windowHeight => {
	return windowHeight - headerHeight - footerHeight ;
}

const getChildrenWidthPercentage = () => {
	return (100 - 2*sideSizePercentage);
}

const getVisualiserHeightFromProps = props => {
	return getVisualiserHeight(props.windowHeight);
}

export const getVisualiserHeight = windowHeight => {
	return getHeight(windowHeight) - controllerHeight - 2*borderThickness - 2*gap;
}

export const VisualiserEnvContainer = styled.div`
	height: ${getHeightFromProps}px;
	width: 100%;
	background-color: ${colorSheet.grey};
	border-top: ${borderThickness}px solid ${colorSheet.border};
	border-bottom: ${borderThickness}px solid ${colorSheet.border};
`;

export const VisualiserContainer = styled.div`
	height: ${getVisualiserHeightFromProps}px;
	width: ${getChildrenWidthPercentage}%;
  margin-top: ${gap}px;
	margin-left: ${sideSizePercentage}%;
	background-color: ${colorSheet.lightGrey};
  border: ${borderThickness}px solid ${colorSheet.border};
  border-bottom-width: 0;
	border-top-left-radius: ${borderRadius}px;
	border-top-right-radius: ${borderRadius}px;

`;

export const ControllersContainer = styled.div`
	height: ${controllerHeight}px;
	width: ${getChildrenWidthPercentage}%;
  margin-left: ${sideSizePercentage}%;
	background-color: ${colorSheet.darkGrey};
	border: ${borderThickness}px solid ${colorSheet.border};
	border-bottom-left-radius: ${borderRadius}px;
	border-bottom-right-radius: ${borderRadius}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

