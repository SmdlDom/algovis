import React from 'react';
import {ControllerButtonContainer} from "./controllerButton.styles";

const ControllerButton = ({children, ...props}) => (
	<ControllerButtonContainer {...props}>{children}</ControllerButtonContainer>
);

export default ControllerButton;