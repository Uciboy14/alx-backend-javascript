export default function concatArrays(array1, array2, string) {
	const newArrays = [...array1, ...array2, ...string];
	return newArrays;
}
