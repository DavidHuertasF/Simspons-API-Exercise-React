// const simpsonsApi = [
//   {
//     quote:
//       "Shoplifting is a victimless crime, like punching someone in the dark.",
//     character: "Nelson Muntz",
//     image:
//       "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
//     characterDirection: "Left",
//   },
//   {
//     quote:
//       "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
//     character: "Lisa Simpson",
//     image:
//       "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
//     characterDirection: "Right",
//   },
//   {
//     quote:
//       "I used to be with it. But then they changed what it was. Now what I'm with isn't it, and what's it seems scary and wierd. It'll happen to you.",
//     character: "Abe Simpson",
//     image:
//       "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593",
//     characterDirection: "Right",
//   },
//   {
//     quote: "Doughnuts? I told you I don't like ethnic food",
//     character: "Mr. Burns",
//     image:
//       "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMrBurns.png?1497567512188",
//     characterDirection: "Right",
//   },
//   {
//     quote: "Me fail English? That's unpossible.",
//     character: "Ralph Wiggum",
//     image:
//       "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
//     characterDirection: "Left",
//   },
//   {
//     quote:
//       "I can't even say the word 'titmouse' without gigggling like a schoolgirl.",
//     character: "Homer Simpson",
//     image:
//       "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
//     characterDirection: "Right",
//   },
//   {
//     quote:
//       "Ah, be creative. Instead of making sandwhiches with bread, use Pop-Tarts. Instead of chewing gum, chew bacon.",
//     character: "Dr. Nick",
//     image:
//       "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084",
//     characterDirection: "Right",
//   },
//   {
//     quote: "Ahh! Sweet liquor eases the pain.",
//     character: "Troy McClure",
//     image:
//       "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112",
//     characterDirection: "Right",
//   },
//   {
//     quote: "Eat my shorts",
//     character: "Bart Simpson",
//     image:
//       "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
//     characterDirection: "Right",
//   },
//   {
//     quote: "In theory, Communism works! In theory.",
//     character: "Homer Simpson",
//     image:
//       "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
//     characterDirection: "Right",
//   },
// ];

const simpsonsApi = async () => {
    const url = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=12'
    const resp = await fetch(url);
    const data = await resp.json();

    const characters = data.map((character) => ({
        frase: character.quote,
        nombre: character.character,
        img: character.image
    }));
    console.log(characters);
    return characters;
}



export default simpsonsApi;