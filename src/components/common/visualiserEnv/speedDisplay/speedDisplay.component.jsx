import React from 'react';
import {SpeedDisplayContainer} from "./speedDisplay.styles";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectSpeed} from "../../../../redux/globalEnv/globalEnv.selectors";

const SpeedDisplay = ({ speed }) => {

	return (
		<SpeedDisplayContainer>
			<p>SPEED : {speed}</p>
		</SpeedDisplayContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	speed: selectSpeed
})

export default connect(mapStateToProps)(SpeedDisplay);