import {findHighestIndexOf, findLowestIndexOf, getEndingSequenceLength, getStartingSequenceLength} from "./helpers";

//Generate a random array of a given size with element in the interval [min, max]
export const genRandomArray = (size, min, max) => {
	//init a sorted array
	let array = []
	for (let i = 0; i < size; i++) {
		array[i] = Math.floor((Math.random() * (max - min) ) + min);
	}

	return array
};

//The object return by sort algorithm step
function SortStepReturn(array, sortedIndex, swap, finish, direction = true,
												partition = null, pivot = -1) {
	this.array = array;
	this.sortedIndex = sortedIndex;
	this.direction = direction;
	this.swap = swap;
	this.finish = finish;
	this.partition = partition;
	this.pivot = pivot;
}

//Implementation of bubble sort
export const bubbleSortStep = (array, sortedIndex, curr, flip = false) => {
	let sortedAmount = getEndingSequenceLength(sortedIndex, 1);

	//end of pass
	if (array.length - sortedAmount - 1 === curr) {
		//Every element until the last swap are now sorted
		let lastSwap = findHighestIndexOf(sortedIndex, 0);
		let finish = false;
		if (lastSwap !== -1) {
			sortedIndex[curr--] = 1;
			while (curr >= lastSwap) {
				sortedIndex[curr--] = 1;
			}
			//reset sortedIndex array for next pass
			let tmp = curr;
			while (tmp >= getStartingSequenceLength(sortedIndex, 1)) {
				sortedIndex[tmp--] = -1;
			}
		} else { //If all element are sorted, we are done
			finish = true;
		}

		if(flip) { //Start new pass backward (for cocktailShakerSort)
			return new SortStepReturn(array, sortedIndex,  [curr,curr], finish, false);
		} else { //Start new pass from the beginning of the array

			return new SortStepReturn(array, sortedIndex, [0, 0], finish);
		}
	}

	//We do a swap
	if (array[curr] > array[curr + 1]) {
		let tmp = array[curr];
		array[curr] = array[curr + 1];
		array[curr + 1] = tmp
		sortedIndex[curr + 1] = 0;
		return new SortStepReturn(array, sortedIndex, [curr + 1,curr], false);
	}

	//Otherwise we just continue
	return new SortStepReturn(array, sortedIndex, [++curr,curr], false);
}

//implementation of cocktail shaker sort
export const cocktailShakerSortStep = (array, sortedIndex, curr, direction) => {
	let sortedAmountStart = getStartingSequenceLength(sortedIndex, 1);

	//pass to the right
	if (direction) {
		//We just do a bubbleSortStep, but when we end a pass we flip direction
		return bubbleSortStep(array, sortedIndex, curr, true);
	} else { //pass to the left
		//end of pass
		if ( sortedAmountStart === curr) {
			//Every element until the last swap are now sorted
			let lastSwap = findLowestIndexOf(sortedIndex, 0);
			let finish = false;
			if (lastSwap !== -1) {
				 sortedIndex[curr++] = 1;
				 while (curr <= lastSwap) {
					 sortedIndex[curr++] = 1;
				 }
				 //reset sortedIndex array for next pass
				let tmp = curr;
				 while ( tmp < array.length - getEndingSequenceLength(sortedIndex, 1)) {
				 	sortedIndex[tmp++] = -1;
				 }
			} else { //If all element are sorted, we are done
				finish = true;
			}

			return new SortStepReturn(array, sortedIndex, [curr,curr], finish, true);
		}

		//we do a swap
		if (array[curr - 1] > array[curr]) {
			let tmp = array[curr];
			array[curr] = array[curr - 1];
			array[curr - 1] = tmp;
			sortedIndex[curr - 1] = 0;
			return new SortStepReturn(array, sortedIndex, [curr - 1, curr], false, false);
		}

		//Otherwise we just continue
		return new SortStepReturn(array, sortedIndex, [--curr, curr], false, false);
	}
}

//implementation of quick sort
export const quickSortStep = (array, sortedIndex, curr, partition, pivot) => {
	//init a pass
	if (curr === partition[0][0]) {
		pivot = partition[0][0];
	}

	if(partition[0][0] === partition[0][1]) {
		sortedIndex[partition[0][0]] = 1;
		partition = partition.slice(1);

		if(partition.length === 0) {
			return new SortStepReturn(array, sortedIndex, [0,0], true,
				true, partition, 0);
		} else {
			return new SortStepReturn(array, sortedIndex, [partition[0][0], partition[0][0]], false,
				true, partition, partition[0][0]);
		}
	}

	//end a pass
	if (curr === partition[0][1]) {
		let tmp1 = array[pivot];
		let tmp2;
		for (let i = pivot + 1;i <= curr; i++ ) {
			tmp2 = array[i];
			array[i] = tmp1;
			tmp1 = tmp2;
		}
		array[pivot] = tmp1;
		sortedIndex[pivot] = 1;

		let newPartition;
		if( pivot === partition[0][0]) { //edge case the pivot is place at the beginning of the partition
			newPartition = [[pivot + 1, partition[0][1]]].concat(partition.slice(1));
		} else if (pivot === partition[0][1]) { //edge case the pivot is place at the end of the partition
			newPartition = [[partition[0][0], pivot - 1]].concat(partition.slice(1));
		} else {
		  newPartition = [[partition[0][0], pivot - 1], [pivot + 1, partition[0][1]]].concat(partition.slice(1));
		}

		return new SortStepReturn(array, sortedIndex, [newPartition[0][0],newPartition[0][0]], false,
			true, newPartition, newPartition[0][0]);
	}

	let pivotValue = array[partition[0][1]];

	//We do a swap
	if (array[curr] < pivotValue) {
		let tmp = array[curr];
		array[curr] = array[pivot];
		array[pivot] = tmp;
		return new SortStepReturn(array, sortedIndex, [++curr, ++pivot],
			false, true, partition, pivot);
	}

	//Otherwise we just continue
	return  new SortStepReturn(array, sortedIndex, [++curr, curr], false, true, partition, pivot);
}
