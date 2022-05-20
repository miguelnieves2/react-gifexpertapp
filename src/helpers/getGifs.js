export const getGifs = async (categoria) =>{
    const api_key = '9QeRJXTM60jVjc8CwQ41SdOuTvqARDbv';
    const url = `https://api.giphy.com/v1/gifs/search?q=${categoria}&limit=5&api_key=${api_key}`;

    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;

}