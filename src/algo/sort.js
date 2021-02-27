//Generate a random array of a given size with element in the interval [min, max]

import {findHighestIndexOf} from "./helpers";

export const genRandomArray = (size, min, max) => {
	//init a sorted array
	let array = []
	for (let i = 0; i < size; i++) {
		array[i] = Math.floor((Math.random() * (max - min) ) + min);
	}

	return array
};


function SortStepReturn(array, sortedIndex, swap, finish) {
	this.array = array;
	this.sortedIndex = sortedIndex;
	this.swap = swap;
	this.finish = finish;
}

export const bubbleSortStep = (array, sortedIndex, sortedAmount, curr) => {
	console.log({array, sortedIndex, sortedAmount, curr});
	if (array.length - sortedAmount - 1 === curr) {
		let lastSwap = findHighestIndexOf(sortedIndex, 0);

		let finish;
		if (lastSwap !== -1) {
			finish = false;
			sortedIndex[curr--] = 1;
			while (curr >= lastSwap) {
				sortedIndex[curr--] = 1;
			}
			while (curr >= 0) {
				sortedIndex[curr--] = -1;
			}
		} else {
			finish = true;
		}
		return new SortStepReturn(array, sortedIndex, [0,0], finish );
	}

	if (array[curr] > array[curr + 1]) {
		let tmp = array[curr];
		array[curr] = array[curr + 1];
		array[curr + 1] = tmp
		sortedIndex[curr] = -1;
		sortedIndex[curr + 1] = 0;
		return new SortStepReturn(array, sortedIndex, [curr + 1,curr], false);
	}


	return new SortStepReturn(array, sortedIndex, [++curr,curr], false);
}
