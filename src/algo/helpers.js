//Fill an array of a given size with the value
export const fillArray = (value,size) => {
	let result = [];
	for (let i = 0; i < size; i++) {
		result[i] = value;
	}
	return result;
}

//Find the highest index of a given value in an array
export const findHighestIndexOf = (array, value) =>  {
	for (let i = array.length - 1; i > 0; i--) {
		if (array[i] === value) return i;
	}
	return -1;
}

//Find the lowest index of a given value in an array
export const findLowestIndexOf = (array, value) => {
	for (let i = 0; i < array.length; i++) {
		if(array[i] === value) return i;
	}
	return -1;
}

//Count the number of occurrence of a given value in a row from the end of the array
export const getEndingSequenceLength = (array, value) => {
	let count = 0;
	for (let i = array.length - 1; i >= 0; i--) {
		if (array[i] === value) count++;
		else return count;
	}
}

//Count the number of occurrence of a given value in a row from the start of the array
export const getStartingSequenceLength = (array, value) => {
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		if(array[i] === value) count++;
		else return count;
	}
}
