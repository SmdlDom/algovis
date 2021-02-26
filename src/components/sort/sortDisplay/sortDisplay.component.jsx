import React, { useEffect } from 'react';
import {createStructuredSelector} from "reselect";
import {selectArray} from "../../../redux/sortEnv/sortEnv.selectors";
import {connect} from "react-redux";
import {SortDisplayContainer} from "./sortDisplay.styles";
import {getVisualiserCenterHeight} from "../../common/visualiserEnv/visualiserEnv.styles";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

const SortDisplay = ({array}) => {
	const { height: windowHeight } = useWindowDimensions();

	return <SortDisplayContainer windowHeight={windowHeight}>

	</SortDisplayContainer>
};

const mapStateToProps = createStructuredSelector({
	array: selectArray
});

export default connect(
	mapStateToProps,
	null
)(SortDisplay);
