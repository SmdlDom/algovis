import React from 'react';
import {OptionButtonContainer} from "./optionButton.styles";


const OptionButton = ({children, ...props}) => (
	<OptionButtonContainer {...props}>{children}</OptionButtonContainer>
);

export default OptionButton;