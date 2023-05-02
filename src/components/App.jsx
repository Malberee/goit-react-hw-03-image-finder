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
		isShowModal: false,
		loadPages: 1,
	}

	componentDidUpdate = async (_, prevState) => {
		const { loadPages, query } = this.state
		if (loadPages !== prevState.loadPages || query !== prevState.query) {
			try {
				this.toggleLoading()
				console.log(this.state.isLoading)
				await getImages(query, loadPages).then(({ data: { hits } }) => {
					this.setState((prevState) => {
						return {
							images: loadPages > 1 ? [...prevState.images, ...hits] : hits,
						}
					})
				})
			} catch (err) {
				console.log(err)
			} finally {
				this.toggleLoading()
				console.log(this.state.images)
				console.log(this.state.isLoading)
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

	toggleModal = (image) => {
		this.setState((prevState) => {
			return {
				currentImage: prevState.currentImage === '' ? image : '',
				isShowModal: !prevState.isShowModal,
			}
		})
	}

	onSearchSubmit = (query) => {
		if (query !== this.state.query) {
			this.setState({
				query: query,
				lastQuery: query,
				images: [],
				loadPages: 1,
				isLoading: false,
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
		const { images, isLoading, isShowModal, currentImage } = this.state
		return (
			<>
				<SearchBar onSubmit={this.onSearchSubmit} />
				{images.length && (
					<ImageGallery images={images} toggleModal={this.toggleModal} />
				)}
				{isLoading && <Loader />}
				{images.length && !isLoading && <Button onLoadMore={this.onLoadMore} />}
				{isShowModal && (
					<Modal image={currentImage} toggleModal={this.toggleModal} />
				)}
			</>
		)
	}
}

export default App
