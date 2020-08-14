/**
 * Parse the hoafight serialized hoafight object from the local storage.
 * If there's no hoafight object present it returns null and fake users profiles
 * will be created instead.
 */
export function parsedStorage() {
	if (localStorage.getItem('hoafight')) {
		const hf = localStorage.getItem('hoafight');
		const parsed = JSON.parse(hf);
		return parsed;
	} else {
		return null;
	}
}