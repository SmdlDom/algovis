import { createSelector} from "reselect";

const selectSortEnv = state => state.sortEnv;

export const selectSortType = createSelector(
	[selectSortEnv],
	sortEnv => sortEnv.sortType
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

export const selectArray = createSelector(
	[selectSortEnv],
	sortEnv => sortEnv.array
);

export const selectSortedIndex = createSelector(
	[selectSortEnv],
	sortEnv => sortEnv.sortedIndex
);

export const selectDirection = createSelector(
	[selectSortEnv],
	sortEnv => sortEnv.direction
);

//Here, swap is a pair of index, the first element is the currently selected
//index. If both element of the pair are the same index, there is no swap to execute.
export const selectSwap = createSelector(
	[selectSortEnv],
	sortEnv => sortEnv.swap
);

export const selectCurrent = createSelector(
	[selectSwap],
	swap => swap[0]
);

export const selectSortFinish = createSelector(
	[selectSortEnv],
	sortEnv => sortEnv.finish
);


