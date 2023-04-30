import styled from 'styled-components'

export const Header = styled.div`
	position: fixed;
	z-index: 2;
	width: 100vw;
	padding: 15px;
	background-color: #1a1a1a;
	display: flex;
	justify-content: center;
`

export const Form = styled.form`
	position: relative;
	height: 100%;
`

export const Input = styled.input`
	width: 400px;
	padding: 5px;
	padding-left: 34px;
`

export const SearchBtn = styled.button`
	position: absolute;
	padding: 0;
	background-color: transparent;
	border: transparent;
	height: 100%;
	width: 29px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;

	&:first-child {
		transition: color 100ms linear;
	}

	&:hover&:first-child {
		color: #cccccc;
	}
`
