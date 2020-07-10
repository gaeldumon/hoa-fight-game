export function parsedStorage() {
	if (localStorage.getItem('hoafight')) {
		const hf = localStorage.getItem('hoafight');
		const parsed = JSON.parse(hf);
		return parsed;
	} else {
		return null;
	}
}