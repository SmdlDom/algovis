import React, {useRef} from 'react';
import {createStructuredSelector} from "reselect";
import {
	selectArray,
	selectArrayMaxVal,
	selectCurrent, selectSortFinish,
	selectSortedIndex,
	selectSwap
} from "../../../redux/sortEnv/sortEnv.selectors";
import {connect} from "react-redux";
import { SortDisplayContainer} from "./sortDisplay.styles";
import Bar from "../bar/bar.component";
import {useContainerDimensions} from "../../../effects/useContainerDimension.effect";

const SortDisplay = ({array, arrayMaxVal, selected, sorted, swap, finish, centerHeight}) => {
	const componentRef = useRef();
	let { width, height } = useContainerDimensions(componentRef);
	let barWidth = width/array.length;

	return <SortDisplayContainer ref={componentRef} centerHeight={centerHeight}>
		{array.map((val,idx) => (
			<Bar
				key={idx}
				displayHeight={height}
				width={barWidth}
				height={val*100/arrayMaxVal}
				XPos={idx*barWidth}
				selected={idx === selected && !finish}
				sorted={sorted[idx] === 1 || finish}
				wasSwapOnPass={sorted[idx] === 0}
			/>
		))}
	</SortDisplayContainer>
};

const mapStateToProps = createStructuredSelector({
	array: selectArray,
	arrayMaxVal: selectArrayMaxVal,
	selected: selectCurrent,
	sorted: selectSortedIndex,
	swap: selectSwap,
	finish: selectSortFinish
});

export default connect(
	mapStateToProps,
	null
)(SortDisplay);
