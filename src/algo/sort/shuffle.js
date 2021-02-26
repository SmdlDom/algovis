
export const genRandomArray = (size, min, max) => {
	//init a sorted array
	let array = []
	for (let i = 0; i < size; i++) {
		array[i] = Math.floor((Math.random() * (max - min) ) + min);
	}

	return array
}

