import React, {useRef} from 'react';
import {createStructuredSelector} from "reselect";
import {selectArray, selectArrayMaxVal} from "../../../redux/sortEnv/sortEnv.selectors";
import {connect} from "react-redux";
import { SortDisplayContainer} from "./sortDisplay.styles";
import Bar from "../bar/bar.component";
import {useContainerDimensions} from "../../../effects/useContainerDimension.effect";

const SortDisplay = ({array, arrayMaxVal, centerHeight}) => {
	const componentRef = useRef();
	const { height } = useContainerDimensions(componentRef);

	return <SortDisplayContainer centerHeight={centerHeight}>
		{array.map((val,idx) => (
			<Bar
				key={idx}
				displayHeight={height}
				width={100/array.length}
				height={val*100/arrayMaxVal}
				XPos={idx*100/array.length}
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
