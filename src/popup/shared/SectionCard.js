import styled from 'styled-components'

const SectionCard = styled.div`
	display: flex;
	width: 364px;
	margin: 19px;
	margin-top: 0;
	padding: 16px 18px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	background: #ffffff;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	transition: box-shadow 0.3s ease;

	&:hover {
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
	}
`

export { SectionCard }
