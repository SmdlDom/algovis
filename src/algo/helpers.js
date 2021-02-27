
export const fillArray = (value,size) => {
	let result = [];
	for (let i = 0; i < size; i++) {
		result[i] = value;
	}
	return result;
}

export const findHighestIndexOf = (array, value) =>  {
	for (let i = array.length - 1; i > 0; i--) {
		if (array[i] === value) return i;
	}
	return -1;
}
