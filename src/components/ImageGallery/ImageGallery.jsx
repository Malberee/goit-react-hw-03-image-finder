import React from 'react'
import PropTypes from 'prop-types'
import { ImageGalleryWrapper } from './ImageGallery.styled'
import ImageGalleryItem from '../ImageGallery'

const ImageGallery = ({ images }) => (
	<ImageGalleryWrapper>
		{images.map(({ id, webformatURL, largeImageURL }) => {
			return <ImageGalleryItem key={id} image={webformatURL} />
		})}
	</ImageGalleryWrapper>
)

ImageGallery.propTypes = {
    images: PropTypes.object.isRequired
}

ImageGallery.defaultProps = {}

export default ImageGallery
