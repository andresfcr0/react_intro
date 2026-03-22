import type { GiphyResponseData } from '../data/giphy.response'

const API_KEY = 'UH11s1HcTVj5eFF4EZ0euuo014MTZ2Yt';

const createImageInsideDOM = (imageUrl: string) => {
    const imgElement = document.createElement('img')
    imgElement.src = imageUrl
    document.body.append(imgElement)
}


const getRandomGifUrl = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)

    const { data }: GiphyResponseData = await response.json()

    return data.images.original.url
}


getRandomGifUrl().then(createImageInsideDOM)