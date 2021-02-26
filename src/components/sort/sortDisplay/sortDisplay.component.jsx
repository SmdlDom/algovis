import React from 'react';
import {createStructuredSelector} from "reselect";
import {selectArray, selectArrayMaxVal} from "../../../redux/sortEnv/sortEnv.selectors";
import {connect} from "react-redux";
import {displayHeight, SortDisplayContainer} from "./sortDisplay.styles";
import Bar from "../bar/bar.component";

const SortDisplay = ({array, arrayMaxVal , centerHeight}) => {

	return <SortDisplayContainer centerHeight={centerHeight}>
		{array.map((val,idx) => (
			<Bar
				key={idx}
				displayHeight={displayHeight}
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
