import React from 'react'
import PropTypes from 'prop-types'
import { GalleryItem, Image } from './ImageGalleryItem.styled'

const ImageGalleryItem = ({image, largeImage, toggleModal}) => (
	<GalleryItem onClick={() => toggleModal(largeImage)}>
		<Image src={image} alt="" />
	</GalleryItem>
)

ImageGalleryItem.propTypes = {
	image: PropTypes.string.isRequired,
	largeImage: PropTypes.string.isRequired,
	toggleModal: PropTypes.func.isRequired
}

ImageGalleryItem.defaultProps = {}

export default ImageGalleryItem
