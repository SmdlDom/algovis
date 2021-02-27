import React, {useRef} from 'react';
import {createStructuredSelector} from "reselect";
import {selectArray, selectArrayMaxVal} from "../../../redux/sortEnv/sortEnv.selectors";
import {connect} from "react-redux";
import { SortDisplayContainer} from "./sortDisplay.styles";
import Bar from "../bar/bar.component";
import {useContainerDimensions} from "../../../effects/useContainerDimension.effect";

const SortDisplay = ({array, arrayMaxVal, centerHeight}) => {
	const componentRef = useRef();
	let { width, height } = useContainerDimensions(componentRef);
	let barWidth = Math.floor(width/array.length);

	return <SortDisplayContainer ref={componentRef} centerHeight={centerHeight}>
		{array.map((val,idx) => (
			<Bar
				key={idx}
				displayHeight={height}
				width={barWidth}
				height={val*100/arrayMaxVal}
				XPos={idx*barWidth}
			/>
		))}
	</SortDisplayContainer>
};

const mapStateToProps = createStructuredSelector({
	array: selectArray,
	arrayMaxVal: selectArrayMaxVal
});

export default connect(
	mapStateToProps,
	null
)(SortDisplay);
