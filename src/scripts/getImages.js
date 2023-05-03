import axios from 'axios'
import { func } from 'prop-types'

const API_KEY = '34735495-c5ef181074f4f4736bdb9177b'

const getImages = async (query, page) => {
	const params = {
		q: query,
		page: page,
		key: API_KEY,
		image_type: 'photo',
		orientation: 'horizontal',
		per_page: 12,
	}

	const { data } = await axios.get('https://pixabay.com/api/', { params })

	return data
}

export default getImages
