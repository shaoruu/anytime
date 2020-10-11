export const setChromeValue = (object, callback = () => {}) => {
	chrome.storage.sync.set(object, callback)
}
