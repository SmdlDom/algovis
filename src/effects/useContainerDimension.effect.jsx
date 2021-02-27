import { useState, useEffect } from 'react';

//TODO figure out why the value are lagging behind
const getDimensions = myRef => {
	const width = myRef.current.offsetWidth;
	const height = myRef.current.offsetHeight;
	return {
		width,
		height
	}
}

export const useContainerDimensions = (myRef) => {

	const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

	useEffect(() => {
		const handleResize = () => {
			setDimensions(getDimensions(myRef))
		}

		if (myRef.current) {
			setDimensions(getDimensions(myRef))
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [myRef])

	return dimensions;
};
