import React,{ useState, useEffect, useRef } from 'react';
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
import {setAlgoType} from "../../../redux/globalEnv/globalEnv.actions";
import {AlgoTypes} from "../../../redux/globalEnv/globalEnv.types";


const amountOfOptions = 2;

const SortVisualiser = ({ setAlgoType, setSortType, shuffle}) => {
	const componentRef = useRef();
	const { height } = useContainerDimensions(componentRef);
	let centerHeight = height - optionsHeight - optionsBorderThickness;

	//set the algoType to the store on mount
	useEffect(() => {
		setAlgoType(AlgoTypes.SORT);
	}, [setAlgoType])

	//Init the selected array
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
					name={SortTypes.COCKTAIL_SHAKER_SORT}
					onClick={handleSortTypeSelection}
					selected = {selected[1]}
				>
					COCKTAIL SHAKER SORT
				</OptionButton>
				<OptionButton
					id={2}
					name={SortTypes.QUICK_SORT}
					onClick={handleSortTypeSelection}
					selected = {selected[2]}
				>
					QUICK SORT
				</OptionButton>
			</OptionsContainer>
			<SortDisplay centerHeight={centerHeight}/>
		</SortVisualiserContainer>
};



const mapDispatchToProps = dispatch => ({
	setAlgoType: value => dispatch(setAlgoType(value)),
	setSortType: value => dispatch(setSortType(value)),
	shuffle: () => dispatch(shuffle())
});

export default connect(
	null,
	mapDispatchToProps
)(SortVisualiser);
