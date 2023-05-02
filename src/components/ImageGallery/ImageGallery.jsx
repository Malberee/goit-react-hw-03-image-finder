import React, { Component } from 'react'
import { LineWave } from 'react-loader-spinner'
import PropTypes from 'prop-types'
import getImages from '../../scripts/getImages'
import { ImageGalleryWrapper, LoadMoreWrap } from './ImageGallery.styled'
import ImageGalleryItem from '../ImageGalleryItem'
import Loader from '../Loader'
import Button from '../Button'
import Modal from '../Modal'

const ImageGallery = ({ images, toggleModal }) => (
	<ImageGalleryWrapper>
		{images.map(({ id, webformatURL, largeImageURL }) => (
			<ImageGalleryItem
				key={id}
				image={webformatURL}
				largeImage={largeImageURL}
				toggleModal={toggleModal}
			/>
		))}
	</ImageGalleryWrapper>
)

ImageGallery.propTypes = {
	images: PropTypes.array.isRequired,
	toggleModal: PropTypes.func.isRequired,
}

ImageGallery.defaultProps = {}

export default ImageGallery
