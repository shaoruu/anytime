import { parseDate } from 'chrono-node'
import { getChromeUrl } from '../utils'

chrome.browserAction.onClicked.addListener(function () {
	// Send a message to the active tab
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		const activeTab = tabs[0]

		chrome.tabs.sendMessage(activeTab.id, {
			message: 'clicked_browser_action'
		})
	})
})

chrome.contextMenus.create({
	title: 'AnyTime — Convert Time',
	contexts: ['selection'],
	onclick: function (info, tab) {
		const { selectionText } = info

		const time = parseDate(selectionText)

		if (time) {
			chrome.storage.sync.set({ time: time.toString() }, () => {
				chrome.notifications.create(
					'anytime-parse-success-notification',
					{
						type: 'basic',
						iconUrl: getChromeUrl('logo.png'),
						title: 'Time Selection Added',
						message: 'Open extension to proceed to conversion!'
					},
					() => {}
				)
			})
		} else {
			chrome.notifications.create(
				'anytime-parse-success-notification',
				{
					type: 'basic',
					iconUrl: getChromeUrl('logo.png'),
					title: 'Error Selection...',
					message: 'Selected text could not be understood!'
				},
				() => {}
			)
		}
	}
})
