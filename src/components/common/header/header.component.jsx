import React from 'react';
import { connect } from 'react-redux'
import {HeaderContainer, LogoContainer, OptionLink, HeaderOptionsContainer} from "./header.styles";
import {setAlgoType} from "../../../redux/globalEnv/globalEnv.actions";
import {AlgoType} from "../../../redux/globalEnv/globalEnv.types";


const Header = ({ setAlgoType }) => {

	const handleSelection = event => {
		setAlgoType(event.target.id);
	}

	return <HeaderContainer>
		<LogoContainer id={AlgoType.None} onClick={handleSelection} to='/'>
			Insert nice logo here
		</LogoContainer>
		<HeaderOptionsContainer>
			<OptionLink id={AlgoType.SORT} onClick={handleSelection} to='/sort'>
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