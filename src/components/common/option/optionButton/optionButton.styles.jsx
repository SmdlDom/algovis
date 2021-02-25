import styled, { css } from 'styled-components';
import colorSheet from "../../../../styles/colorSheet.styles";

const getButtonStyles = props => {
	if (props.leftEnd && props.leftStart) {
		return shiftBoth;
	} else if (props.leftEnd) {
		return shiftLeft;
	} else if (props.leftStart) {
		return shiftRight;
	}
}

const shiftLeft = css`
	margin-right: 50px;
`;

const shiftRight = css`
	margin-right: 30px;
`;

const shiftBoth = css`
	margin-right: 50px;
	margin-left: 30px;
`;

const isSelected = props => {
	if (props.selected === true) {
		return selected;
	}
}

const selected = css`
	height: 85%;
	padding: 0 15px;
`;

export const OptionButtonContainer = styled.button`
	height: 70%;
	padding: 0 10px;
	cursor: pointer;
  background: ${colorSheet.primaryBlend};
  border: 2px solid black;
	border-radius: 20px;
	
  &:hover {
    background: ${colorSheet.primaryBlend};
    background: linear-gradient(to bottom right, ${colorSheet.secondary}, ${colorSheet.primary});
  }
	
	${getButtonStyles}
	${isSelected}
`;