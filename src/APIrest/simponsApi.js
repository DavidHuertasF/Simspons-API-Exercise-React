const simpsonsApi = async () => {
    let characters = []
    await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=12")
            .then(response => response.json())
            .then(data => (characters = data));
            console.log(characters)
    return characters;
}


export default simpsonsApi;