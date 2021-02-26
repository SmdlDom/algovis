import React from 'react';
import {createStructuredSelector} from "reselect";
import {selectArray} from "../../../redux/sortEnv/sortEnv.selectors";
import {connect} from "react-redux";
import {SortDisplayContainer} from "./sortDisplay.styles";

const SortDisplay = ({array, height}) => {

	return <SortDisplayContainer height={height}>

	</SortDisplayContainer>
};

const mapStateToProps = createStructuredSelector({
	array: selectArray
});

export default connect(
	mapStateToProps,
	null
)(SortDisplay);
