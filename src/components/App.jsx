import { Component, useState } from 'react'
import getImages from '../scripts/getImages'
import SearchBar from './SearchBar'
import ImageGallery from './ImageGallery'
import ModalWindow from './Modal'

class App extends Component {
	state = {
		isLoading: false,
		lastQuery: '',
		images: [],
		loadedPages: 1,
	}

	toggleLoading = () => {
		this.setState((prevState) => {
			return {
				isLoading: !prevState.isLoading,
			}
		})
	}

	onSearchSubmit = async (query) => {
		try {
			this.toggleLoading()
			console.log(this.state.isLoading)
			await getImages(query, this.state.loadedPages).then((res) => {
				this.setState((prevState) => {
					return {
						lastQuery: query,
						images: res.data.hits,
						loadedPages: prevState.loadedPages + 1,
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

	onLoadMore = async () => {
		try {
			this.toggleLoading()
			console.log(this.state.isLoading)
			await getImages(this.state.lastQuery, this.state.loadedPages).then(
				(res) => {
					this.setState((prevState) => {
						return {
							images: [...prevState.images, ...res.data.hits],
							loadedPages: prevState.loadedPages + 1,
						}
					})
				}
			)
		} catch (err) {
			console.log(err)
		} finally {
			this.toggleLoading()
			console.log(this.state.images)
			console.log(this.state.isLoading)
		}
	}

	render() {
		return (
			<>
				<SearchBar onSubmit={this.onSearchSubmit} />
				{this.state.images.length > 0 && (
					<ImageGallery
						isLoading={this.state.isLoading}
						images={this.state.images}
						onLoadMore={this.onLoadMore}
					/>
				)}
				{this.state.showModal && <Modal image={this.state.currentImage} />}
			</>
		)
	}
}

export default App
