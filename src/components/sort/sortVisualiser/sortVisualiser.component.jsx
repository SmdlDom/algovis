import React,{ useState, useRef } from 'react';
import {
	optionsBorderThickness,
	OptionsContainer,
	optionsHeight
} from "../../common/option/optionsContainer/optionsContainer.styles.";
import OptionButton from "../../common/option/optionButton/optionButton.component";
import {setSortType, shuffle} from "../../../redux/sortEnv/sortEnv.actions";
import {connect} from "react-redux";
import {SortTypes} from "../../../redux/sortEnv/sortEnv.types";
import {fillArray} from "../../../algo/helpers";
import {SortVisualiserContainer} from "./sortVisualiser.styles";
import SortDisplay from "../sortDisplay/sortDisplay.component";
import {useContainerDimensions} from "../../../effects/useContainerDimension.effect";


const amountOfOptions = 2;

const SortVisualiser = ({ setSortType, shuffle }) => {
	const componentRef = useRef();
	const { height } = useContainerDimensions(componentRef);
	let centerHeight = height - optionsHeight - optionsBorderThickness;

	let initSelected = fillArray(false, amountOfOptions);
	initSelected[0] = true;
	const [selected, setSelected] = useState(initSelected);

	const handleSortTypeSelection = event => {
		setSortType(event.target.name);
		initSelected = fillArray(false, amountOfOptions);
		initSelected[event.target.id] = true;
		setSelected(initSelected);
	}

	return <SortVisualiserContainer ref={componentRef}>
			<OptionsContainer>
				<OptionButton
					leftStart
					leftEnd
					onClick={shuffle}
				>
					SHUFFLE
				</OptionButton>
				<OptionButton
					id={0}
					name={SortTypes.BUBBLE_SORT}
					onClick={handleSortTypeSelection}
					selected = {selected[0]}
				>
					BUBBLE SORT
				</OptionButton>
				<OptionButton
					id={1}
					name={SortTypes.QUICK_SORT}
					onClick={handleSortTypeSelection}
					selected = {selected[1]}
				>
					QUICK SORT
				</OptionButton>
			</OptionsContainer>
			<SortDisplay centerHeight={centerHeight}/>
		</SortVisualiserContainer>
};



const mapDispatchToProps = dispatch => ({
	setSortType: value => dispatch(setSortType(value)),
	shuffle: () => dispatch(shuffle())
});

export default connect(
	null,
	mapDispatchToProps
)(SortVisualiser);
