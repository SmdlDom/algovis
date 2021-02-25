import styled, { css } from 'styled-components';
import colorSheet from "../../../../styles/colorSheet.styles";

const trackH = "0.6em";
const thumbD = "1.5em";

const track = css`
  height: ${trackH};
  background: ${colorSheet.primary};
	border: 2px solid black;
  border-radius: 8px;
`;

const fill = css`
  height: ${trackH};
  background: linear-gradient(to right, ${colorSheet.primary}, ${colorSheet.secondary});
  border: 2px solid black;
  border-radius: 8px;
`;

const thumb = css`
  box-sizing: border-box;
  border: 2px solid black;
  width: ${thumbD};
  height: ${thumbD};
  border-radius: 50%;
  background: ${colorSheet.secondary};
`;

export const ControllerSliderContainer =  styled.input.attrs({
	type: 'range',
	min: '0',
	max: '400',
	defaultValue: '100'
})`
	width: 30%;
  background: transparent;
	margin: 0 20px;
	
  &::-moz-range-track {
    ${track};
  }

  &::-moz-range-progress {
    ${fill};
  }

  &::-moz-range-thumb {
    ${thumb};
  }

  &::-moz-focus-outer {
    border: 0;
  }

`