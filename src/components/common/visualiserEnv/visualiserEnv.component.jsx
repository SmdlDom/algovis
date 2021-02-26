import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {ControllersContainer, VisualiserContainer, VisualiserEnvContainer} from "./visualiserEnv.styles";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import ControllerButton from "./controllerButton/controllerButton.component";
import ControllerSlider from "./controllerSlider/controllerSlider.component";
import SpeedDisplay from "./speedDisplay/speedDisplay.component";
import SortVisualiser from "../../sort/sortVisualiser/sortVisualiser.component";


const VisualiserEnv = () => {
	const { height: windowHeight } = useWindowDimensions();

	return (
		<VisualiserEnvContainer windowHeight={windowHeight}>
			<VisualiserContainer windowHeight={windowHeight}>
				<Switch>
					<Route exact path='/sort' component={SortVisualiser}/>
				</Switch>
			</VisualiserContainer>
			<ControllersContainer>
				<ControllerButton left>&#10094;&#10094;</ControllerButton>
				<ControllerButton>&#10094;</ControllerButton>
				<ControllerButton>&#9209;</ControllerButton>
				<ControllerButton>&#9654;</ControllerButton>
				<ControllerButton>&#10095;</ControllerButton>
				<ControllerButton right>&#10095;&#10095;</ControllerButton>
				<ControllerSlider />
				<SpeedDisplay />
			</ControllersContainer>
		</VisualiserEnvContainer>
	);
}

export default VisualiserEnv;