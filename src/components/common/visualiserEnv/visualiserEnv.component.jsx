import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
	ControllersContainer,
	VisualiserContainer,
	VisualiserEnvContainer,
} from "./visualiserEnv.styles";
import useWindowDimensionsEffect from "../../../effects/useWindowDimensions.effect";
import ControllerButton from "./controllerButton/controllerButton.component";
import ControllerSlider from "./controllerSlider/controllerSlider.component";
import SpeedDisplay from "./speedDisplay/speedDisplay.component";
import SortVisualiser from "../../sort/sortVisualiser/sortVisualiser.component";
import {doNextStep} from "../../../redux/globalEnv/globalEnv.actions";
import {connect} from "react-redux";

const VisualiserEnv = ({ doNextStep }) => {
	const { height: windowHeight, width: windowWidth } = useWindowDimensionsEffect();
	
	return (
		<VisualiserEnvContainer windowHeight={windowHeight} windowWidth={windowWidth}>
			<VisualiserContainer windowHeight={windowHeight}>
				<Switch>
					<Route
						exact
						path='/sort'
						render={() => (
							<SortVisualiser />
						)}
					/>
				</Switch>
			</VisualiserContainer>
			<ControllersContainer>
				<ControllerButton left>&#10094;&#10094;</ControllerButton>
				<ControllerButton>&#10094;</ControllerButton>
				<ControllerButton>&#9209;</ControllerButton>
				<ControllerButton>&#9654;</ControllerButton>
				<ControllerButton onClick={doNextStep}>&#10095;</ControllerButton>
				<ControllerButton right>&#10095;&#10095;</ControllerButton>
				<ControllerSlider />
				<SpeedDisplay />
			</ControllersContainer>
		</VisualiserEnvContainer>
	);
}

const mapDispatchToProps = dispatch => ({
	doNextStep: () => dispatch(doNextStep())
});

export default connect(
	null,
	mapDispatchToProps
)(VisualiserEnv);
