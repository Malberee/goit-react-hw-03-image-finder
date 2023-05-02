import styled from 'styled-components'

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	z-index: 3;
	width: 100%;
	height: 100%;
	background-color: #00000089;
`

export const ModalWindow = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	translate: -50% -50%;
`

export const Image = styled.img`
	width: 100%;
`
