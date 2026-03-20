import type { GiphyResponseData } from '../data/giphy.response'

const API_KEY = 'UH11s1HcTVj5eFF4EZ0euuo014MTZ2Yt';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)

myRequest
    .then(response => response.json())
    .then(({data}: GiphyResponseData) => {
        const imageUrl = data.images.original.url

        const imgElement = document.createElement('img')
        imgElement.src = imageUrl
        document.body.append(imgElement)
    }
    )
    .catch(err => console.log(err))