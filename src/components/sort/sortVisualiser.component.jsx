import React from 'react';
import {OptionsContainer} from "../common/option/optionsContainer/optionsContainer.styles.";
import OptionButton from "../common/option/optionButton/optionButton.component";



const SortVisualiser = () => (
	<OptionsContainer>
		<OptionButton leftStart leftEnd>SHUFFLE</OptionButton>
		<OptionButton>BUBBLE SORT</OptionButton>
	</OptionsContainer>
);

export default SortVisualiser;