import { createSelector} from "reselect";

const selectSortEnv = state => state.sortEnv;

export const selectSortType = createSelector(
	[selectSortEnv],
	sortEnv => sortEnv.sortType
);

export const selectArray = createSelector(
	[selectSortEnv],
	sortEnv => sortEnv.array
);

export const selectArraySize = createSelector(
	[selectSortEnv],
	sortEnv => sortEnv.arraySize
);

export const selectArrayMinVal = createSelector(
	[selectSortEnv],
	sortEnv => sortEnv.arrayMinVal
)

export const selectArrayMaxVal = createSelector(
	[selectSortEnv],
	sortEnv => sortEnv.arrayMaxVal
);
