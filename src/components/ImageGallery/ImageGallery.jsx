import React, { Component } from 'react'
import { LineWave } from 'react-loader-spinner'
import PropTypes from 'prop-types'
import getImages from '../../scripts/getImages'
import { ImageGalleryWrapper, LoadMoreWrap } from './ImageGallery.styled'
import ImageGalleryItem from '../ImageGalleryItem'
import Loader from '../Loader'
import Button from '../Button'
import Modal from '../Modal'

class ImageGallery extends Component {
	state = {
		images: [],
		currentImage: '',
		isShowModal: false,
	}

	showModal = (image) => {
		console.log('show')
		this.setState({
			isShowModal: true,
			currentImage: image,
			loadedPages: 1,
		})
	}

	closeModal = () => {
		console.log('close')
		this.setState({
			isShowModal: false,
			currentImage: '',
		})
	}

	render() {
		return (
			<>
				<ImageGalleryWrapper>
					{this.props.images.map(({ id, webformatURL, largeImageURL }) => (
						<ImageGalleryItem
							key={id}
							image={webformatURL}
							largeImage={largeImageURL}
							showModal={this.showModal}
						/>
					))}
					{this.state.isShowModal && (
						<Modal image={this.state.currentImage} onClose={this.closeModal} />
					)}
				</ImageGalleryWrapper>

				{this.props.isLoading && <Loader />}
				<Button onLoadMore={() => this.props.onLoadMore()} />
			</>
		)
	}
}

ImageGallery.propTypes = {}

ImageGallery.defaultProps = {}

export default ImageGallery
