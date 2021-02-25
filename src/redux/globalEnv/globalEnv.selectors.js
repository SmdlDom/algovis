import { createSelector } from 'reselect';

const selectGlobalEnv = state => state.globalEnv;

export const selectSpeed = createSelector(
	[selectGlobalEnv],
	globalEnv => globalEnv.speed
);

export const selectAlgoType = createSelector(
	[selectGlobalEnv],
	globalEnv => globalEnv.algoType
)