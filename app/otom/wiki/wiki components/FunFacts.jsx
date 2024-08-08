export default function FunFacts({ count }) {
  // Define the array of quotes inside the component
  const facts = [
    "... a segunda temporada de otom ia ser um joke show?",
    "... o dublador do portal foi o responsável pela desclassificação do batato na primeira temporada?",
    "... os primeiros assets de otom foram pegos no google imagens com algumas alterações no paint?",
    "... o primeiro personagem recomendado foi pelo primo de Diamondy?",
    "... o episódio 6 de otom foi inspirado nos vídeos antigos do Mr. Beast?",
    // Add more quotes as needed
  ];

  // Function to shuffle and select random quotes
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
