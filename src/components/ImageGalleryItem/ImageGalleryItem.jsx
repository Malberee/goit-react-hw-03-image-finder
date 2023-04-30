import React from 'react'
import PropTypes from 'prop-types'
import { GalleryItem, Image } from './ImageGalleryItem.styled'

const ImageGalleryItem = ({image, largeImage, showModal}) => (
	<GalleryItem onClick={() => showModal(largeImage)}>
		<Image src={image} alt="" />
	</GalleryItem>
)

ImageGalleryItem.propTypes = {
	image: PropTypes.string.isRequired,
	largeImage: PropTypes.string.isRequired,
	showModal: PropTypes.func.isRequired
}

ImageGalleryItem.defaultProps = {}

export default ImageGalleryItem
