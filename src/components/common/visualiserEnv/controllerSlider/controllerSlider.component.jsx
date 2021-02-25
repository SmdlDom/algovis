import React from 'react';

import { connect } from 'react-redux';

import {ControllerSliderContainer} from "./controllerSlider.styles";
import {setSpeed} from "../../../../redux/globalEnv/globalEnv.actions";

const mapValue = (value) => {
	return Math.pow(value/100, 2).toFixed(2);
}

const ControllerSlider = ({setSpeed}) => {
	//const [value, setValue] = React.useState(1);
	return (
		<ControllerSliderContainer
			onInput={e => setSpeed(mapValue(e.target.value))}
		/>
	)
}

const mapDispatchToProps = dispatch => ({
	setSpeed: value => dispatch(setSpeed(value))
})

export default connect(
	null,
	mapDispatchToProps
)(ControllerSlider);