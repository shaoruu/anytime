export const getChromeValues = async (keys) => {
	return new Promise((resolve, reject) => {
		chrome.storage.sync.get(keys, (value) => {
			if (value) resolve(value)
			else reject()
		})
	})
}
