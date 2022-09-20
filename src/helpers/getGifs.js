// Llamada al API
export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TpweAvnAG7FxrUuvZQg6K94g9i8mAgmy&q=${category}&limit=10`;

    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}