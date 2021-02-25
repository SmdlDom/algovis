import React from 'react';
import { connect } from 'react-redux'
import {HeaderContainer, LogoContainer, OptionLink, HeaderOptionsContainer} from "./header.styles";
import {setAlgoType} from "../../../redux/globalEnv/globalEnv.actions";
import {AlgoTypes} from "../../../redux/globalEnv/globalEnv.types";


const Header = ({ setAlgoType }) => {

	const handleAlgoTypeSelection = event => {
		setAlgoType(event.target.id);
	}

	return <HeaderContainer>
		<LogoContainer id={AlgoTypes.None} onClick={handleAlgoTypeSelection} to='/'>
			Insert nice logo here
		</LogoContainer>
		<HeaderOptionsContainer>
			<OptionLink id={AlgoTypes.SORT} onClick={handleAlgoTypeSelection} to='/sort'>
				SORT
			</OptionLink>
		</HeaderOptionsContainer>
	</HeaderContainer>
};

const mapDispatchToProps = dispatch => ({
	setAlgoType: value => dispatch(setAlgoType(value))
});

export default connect(
	null,
	mapDispatchToProps
)(Header);