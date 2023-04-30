import styled from 'styled-components'

export const LoaderWrapper = styled.div`
	position: fixed;
	top: 0;
	z-index: 2;
	width: 100%;
	height: 100%;
	background-color: #00000089;
	display: flex;
	justify-content: center;
	align-items: center;

	&:first-child {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
