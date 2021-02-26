
export const genRandomArray = (size) => {
	//init a sorted array
	let array = []
	for (let i = 0; i < size; i++) {
		array[i] = i;
	}

	return shuffle(array);
}

const shuffle = (arr) => {
	let tmp, current, top = arr.length;
	if (top) {
		while(--top) {
			current = Math.floor(Math.random() * (top + 1));
			tmp = arr[current];
			arr[current] = arr[top];
			arr[top] = tmp;
		}
	}
	return arr;
}