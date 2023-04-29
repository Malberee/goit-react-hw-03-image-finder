import React from 'react'
import PropTypes from 'prop-types'
import { ImageGalleryItemWrapper } from './ImageGalleryItem.styled'

const ImageGalleryItem = ({image}) => (
	<li key={id}>
		<img src={image} alt="" />
	</li>
)

ImageGalleryItem.propTypes = {
    image: PropTypes.string.isRequired
}

ImageGalleryItem.defaultProps = {}

export default ImageGalleryItem
