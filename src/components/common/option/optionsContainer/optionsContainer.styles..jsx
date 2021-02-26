import styled from "styled-components";
import colorSheet from "../../../../styles/colorSheet.styles";
import {visualiserHeight} from "../../visualiserEnv/visualiserEnv.styles";

export const optionsHeight = 60;
export const optionsBorderThickness = 4;

export const OptionsContainer = styled.div`
	height: ${optionsHeight}px;
	width: 100%;
	background: ${colorSheet.darkGrey};
	border-bottom: ${optionsBorderThickness}px solid black;
	border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
