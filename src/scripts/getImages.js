import axios from 'axios'
import { func } from 'prop-types'

const API_KEY = '34735495-c5ef181074f4f4736bdb9177b'

const getImages = (query, page) => {
	const params = new URLSearchParams({
		q: query,
		page: page,
		key: API_KEY,
		image_type: 'photo',
		orientation: 'horizontal',
		per_page: 12,
	})

	return axios
		.get(
			`https://pixabay.com/api/?${params}`
		)
        // .then((res) => {
        //     console.log(res.data.hits)
        //     return res.data.hits
        // })
}

export default getImages
