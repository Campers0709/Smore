import {useState, useEffect} from 'react'
import axios from 'axios'

export default function FirstPost() {
	const [response, setResponse] = useState({})
	useEffect(() => {
		axios.get('/api/hello')
			.then(d => {console.log(d)})
	}, [])

	return <h1>First Post</h1>
}
