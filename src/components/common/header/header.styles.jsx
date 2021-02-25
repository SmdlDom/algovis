import styled from 'styled-components';
import {Link} from "react-router-dom";
import colorSheet from "../../../styles/colorSheet.styles";

const optionLinkHeight = `50px`;
export const headerHeight = 80;

export const HeaderContainer = styled.header`
	width: 100%;
	height: ${headerHeight}px;
	display: flex;
	justify-content: space-around;
	background-image: linear-gradient(to bottom right, ${colorSheet.primary}, ${colorSheet.secondary} );
`;

export const LogoContainer = styled(Link)`
	width: 15%;
	height: 100%;
	color: white;
`;

export const HeaderOptionsContainer = styled.div`
	width: 70%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const OptionLink = styled(Link)`
	width: 150px;
	height: ${optionLinkHeight};
  margin: 0 10px;
  text-align: center;
  line-height: ${optionLinkHeight};
	border: 3px solid ${colorSheet.border};
	border-radius: 20px;
	font-weight: bold;
  background: ${colorSheet.primaryBlend};
		
	&:hover {
    background: ${colorSheet.primaryBlend};
    background: linear-gradient(to bottom right, ${colorSheet.secondary}, ${colorSheet.primary});
  }
`;