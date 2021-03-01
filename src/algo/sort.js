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


function SortStepReturn(array, sortedIndex,direction, swap, finish) {
	this.array = array;
	this.sortedIndex = sortedIndex;
	this.direction =
	this.swap = swap;
	this.finish = finish;
}

export const bubbleSortStep = (array, sortedIndex, sortedAmount, curr) => {
	console.log({array, sortedIndex, sortedAmount, curr});
	//end of pass
	if (array.length - sortedAmount - 1 === curr) {
		//Every element until the last swap are now sorted
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
		} else { //If all element are sorted, we are done
			finish = true;
		}

		//Start new pass from the beginning of the array
		return new SortStepReturn(array, sortedIndex,true, [0,0], finish );
	}

	//We do a swap
	if (array[curr] > array[curr + 1]) {
		let tmp = array[curr];
		array[curr] = array[curr + 1];
		array[curr + 1] = tmp
		sortedIndex[curr] = -1;
		sortedIndex[curr + 1] = 0;
		return new SortStepReturn(array, sortedIndex, true, [curr + 1,curr], false);
	}

	//Otherwise we just continue
	return new SortStepReturn(array, sortedIndex, true, [++curr,curr], false);
}
