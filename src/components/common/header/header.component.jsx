import React from 'react';
import {HeaderContainer, LogoContainer, OptionLink, HeaderOptionsContainer} from "./header.styles";

const Header = () => (
	<HeaderContainer>
		<LogoContainer to='/'>
			Insert nice logo here
		</LogoContainer>
		<HeaderOptionsContainer>
			<OptionLink to='/sort'>
				SORT
			</OptionLink>
		</HeaderOptionsContainer>
	</HeaderContainer>
);

export default Header;