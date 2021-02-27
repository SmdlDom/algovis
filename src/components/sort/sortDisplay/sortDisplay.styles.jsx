import styled from 'styled-components';

const displayHeight = props => {
	return Math.trunc(9 * props.centerHeight/10);
};

const marginTop = props => {
	return Math.trunc(props.centerHeight/20);
}

export const SortDisplayContainer = styled.div`
	height: ${displayHeight}px;
	width: 96%;
	margin-left: 2%;
	margin-top: ${marginTop}px;
	//display: flex;
	position: relative;
`
