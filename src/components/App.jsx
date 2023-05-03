import { Component, useState } from 'react'
import getImages from '../scripts/getImages'
import SearchBar from './SearchBar'
import ImageGallery from './ImageGallery'
import Loader from './Loader'
import Button from './Button'
import Modal from './Modal'

class App extends Component {
	state = {
		query: '',
		isLoading: false,
		images: [],
		currentImage: '',
		loadPages: 1,
		totalImages: 0,
	}

	componentDidUpdate = async (_, prevState) => {
		const { loadPages, query } = this.state
		if (loadPages !== prevState.loadPages || query !== prevState.query) {
			try {
				this.toggleLoading()
				const { hits, totalHits } = await getImages(query, loadPages)
				this.setState((prevState) => {
					return {
						images: [...prevState.images, ...hits],
						totalImages: totalHits,
					}
				})
			} catch (err) {
				console.log(err)
			} finally {
				this.toggleLoading()
			}
		}
	}

	toggleLoading = () => {
		this.setState((prevState) => {
			return {
				isLoading: !prevState.isLoading,
			}
		})
	}

	toggleModal = (image = '') => {
		this.setState({
			currentImage: image,
		})
	}

	onSearchSubmit = (query) => {
		if (query !== this.state.query) {
			this.setState({
				query: query,
				images: [],
				loadPages: 1,
				totalImages: 0,
			})
		}
	}

	onLoadMore = () => {
		this.setState((prevState) => {
			return {
				loadPages: prevState.loadPages + 1,
			}
		})
	}

	render() {
		const { images, isLoading, currentImage, totalImages } = this.state
		const showButton = images.length !== totalImages && !isLoading
		return (
			<>
				<SearchBar onSubmit={this.onSearchSubmit} />
				{images.length && (
					<ImageGallery images={images} toggleModal={this.toggleModal} />
				)}
				{isLoading && <Loader />}
				{showButton && <Button onLoadMore={this.onLoadMore} />}
				{currentImage && (
					<Modal image={currentImage} toggleModal={this.toggleModal} />
				)}
			</>
		)
	}
}

export default App
