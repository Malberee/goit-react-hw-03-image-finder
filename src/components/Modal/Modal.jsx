import React from 'react'
import PropTypes from 'prop-types'
import { Overlay, ModalWindow, Image} from './Modal.styled'

const Modal = () => (
	<Overlay>
		<ModalWindow>
			<Image src="" alt="" />
		</ModalWindow>
	</Overlay>
)

Modal.propTypes = {}

Modal.defaultProps = {}

export default Modal
