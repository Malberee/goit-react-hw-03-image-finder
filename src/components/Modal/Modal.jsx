import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Overlay, ModalWindow, Image } from './Modal.styled'

class Modal extends Component {
	componentDidMount() {
		window.addEventListener('keydown', e => {
			if (e.keyCode === 27) {
				this.props.onClose()
			}
		})
	}

	render() {
		return (
			<Overlay onClick={this.props.onClose}>
				<ModalWindow onClick={(e) => e.stopPropagation()}>
					<Image src={this.props.image} alt="" />
				</ModalWindow>
			</Overlay>
		)
	}
}

Modal.propTypes = {}

Modal.defaultProps = {}

export default Modal
