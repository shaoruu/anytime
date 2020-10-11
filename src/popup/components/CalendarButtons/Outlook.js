import Button from '@material-ui/core/Button'
import SvgIcon from '@material-ui/core/SvgIcon'
import React from 'react'

export default () => (
	<Button
		style={{
			textTransform: 'none',
			width: 160,
			textAlign: 'left',
			color: '#333'
		}}
		startIcon={
			<SvgIcon
				width="14"
				height="15"
				viewBox="0 0 14 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6.65 14.5H0V7.85H6.65V14.5ZM14 14.5H7.35V7.85H14V14.5ZM6.65 7.15H0V0.5H6.65V7.15ZM14 7.15H7.35V0.5H14V7.15Z"
					fill="#333333"
				/>
			</SvgIcon>
		}
	>
		Outlook Calendar
	</Button>
)
