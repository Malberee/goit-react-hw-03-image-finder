import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { Overlay, ModalWindow, Image } from './Modal.styled'

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {
	componentDidMount() {
		window.addEventListener('keydown', this.onEscape)
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.onEscape)
	}

	onEscape = (e) => {
		if (e.code === 'Escape') {
			this.props.toggleModal()
		}
	}

	render() {
		const { toggleModal, image } = this.props
		return createPortal(
			<Overlay onClick={() => toggleModal()}>
				<ModalWindow onClick={(e) => e.stopPropagation()}>
					<Image src={image} alt="" />
				</ModalWindow>
			</Overlay>,
			modalRoot
		)
	}
}

Modal.propTypes = {
	image: PropTypes.string.isRequired,
	toggleModal: PropTypes.func.isRequired,
}

Modal.defaultProps = {}

export default Modal
