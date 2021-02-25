import styled, {css} from 'styled-components';
import colorSheet from "../../../../styles/colorSheet.styles";

const getButtonStyles = props => {
	if (props.left) {
		return leftStyles;
	} else if (props.right) {
		return rightStyles;
	}
}

const leftStyles = css`
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
`;

const rightStyles =css`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ControllerButtonContainer = styled.button`
	height: 70%;
	padding: 0 10px;
	cursor: pointer;
  background: ${colorSheet.lighterGrey};
  border: 2px solid black;
	
	${getButtonStyles}
`;
