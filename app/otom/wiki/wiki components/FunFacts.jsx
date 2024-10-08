export default function FunFacts({ count }) {

  const facts = [
    "... a segunda temporada de otom ia ser um joke show?",
    "... o dublador do portal foi o responsável pela desclassificação do batato na primeira temporada?",
    "... os primeiros assets de otom foram pegos no google imagens com algumas alterações no paint?",
    "... o primeiro personagem recomendado foi pelo primo de Diamondy?",
    "... o episódio 6 de otom foi inspirado nos vídeos antigos do Mr. Beast?",
    "... a casa do gramofone foi inspirada em uma cena da quarta temporada de Breaking Bad?",
    "... o personagem Grandão originalmente era para ser uma bigorna?",
    "... OTOM foi o primeiro object show animado brasileiro?",
    "... Diamondy não foi o primeiro a dublar em OTOM?",
    "... a primeira temporada originalmente teria 8 episódios?",
    "... a música da intro da terceira temporada original é um YTP da música Pyro Flow de Kevin McLeod?",
    "... o personagem Cap foi inspirado no boné do comediante Squeezy Jibbs?"

  ];

  const getRandomFacts = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const selectedFacts = getRandomFacts(facts, count);

  return (
    <div>
      <h2>Fun Facts: você sabia que...</h2>
      <ul>
        {selectedFacts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}
