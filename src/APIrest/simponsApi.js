// const simpsonsApi = async () => {
//     let characters = []
//     await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=12")
//             .then(response => response.json())
//             .then(data => (characters = data));
//             console.log(characters)
//     return characters;
// }

const simpsonsApi = [
  {
    category: "ninos",
    quote:
      "Shoplifting is a victimless crime, like punching someone in the dark.",
    character: "Nelson Muntz",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
    characterDirection: "Left",
  },
  {
    category: "ninos",
    quote:
      "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
    character: "Lisa Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
    characterDirection: "Right",
  },
  {
    category: "adulto",
    quote:
      "I used to be with it. But then they changed what it was. Now what I'm with isn't it, and what's it seems scary and wierd. It'll happen to you.",
    character: "Abe Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593",
    characterDirection: "Right",
  },
  {
    category: "adulto",
    quote: "Doughnuts? I told you I don't like ethnic food",
    character: "Mr. Burns",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMrBurns.png?1497567512188",
    characterDirection: "Right",
  },
  {
    category: "nino",
    quote: "Me fail English? That's unpossible.",
    character: "Ralph Wiggum",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
    characterDirection: "Left",
  },
  {
    category: "ninos",
    quote:
      "I can't even say the word 'titmouse' without gigggling like a schoolgirl.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    characterDirection: "Right",
  },
  {
    category: "ninos",
    quote:
      "Ah, be creative. Instead of making sandwhiches with bread, use Pop-Tarts. Instead of chewing gum, chew bacon.",
    character: "Dr. Nick",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084",
    characterDirection: "Right",
  },
  {
    category: "adulto",
    quote: "Ahh! Sweet liquor eases the pain.",
    character: "Troy McClure",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FTroyMcClure.png?1497567511112",
    characterDirection: "Right",
  },
  {
    category: "adulto",
    quote: "Eat my shorts",
    character: "Bart Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
    characterDirection: "Right",
  },
  {
    category: "adulto",
    quote: "In theory, Communism works! In theory.",
    character: "Homer Simpson",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    characterDirection: "Right",
  },
];


export const getCharacterById = (id) =>{
  return simpsonsApi[id];
}



export default simpsonsApi;
