export const getRandomValue = (value, variant) => {
	const change = (Math.random() - 1) * variant * 2
	return value + change
}
