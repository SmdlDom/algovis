import { createSelector} from "reselect";

const selectSortEnv = state => state.sortEnv;

export const selectSortType = createSelector(
	[selectSortEnv],
	sortEnv => sortEnv.sortType
)