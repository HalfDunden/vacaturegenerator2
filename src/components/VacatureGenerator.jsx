import { useState } from "react";

export default function VacatureGenerator() {
  const questions = [
    { key: "organisatie", label: "Wat wil je dat kandidaten weten over jullie organisatie? (Wat doen jullie? Voor wie? Wat maakt jullie uniek?)" },
    { key: "probleem", label: "Wat is het echte probleem dat deze rol moet oplossen?" },
    { key: "resultaten", label: "Welke concrete resultaten verwacht je binnen 6–12 maanden?" },
    { key: "vaardigheden", label: "Welke vaardigheden en ervaring zijn essentieel? Wat is nice to have?" },
    { key: "team", label: "In welk team komt deze persoon terecht? Wie is de leidinggevende?" },
    { key: "softskills", label: "Welke soft skills zijn cruciaal in deze context?" },
    { key: "waarden", label: "Welke waarden of mindset passen bij jullie team of bedrijf?" },
    { key: "aanbod", label: "Wat kunnen jullie realistisch bieden qua loon, voordelen, opleiding, uren?" },
    { key: "locatie", label: "Waar vindt het werk plaats? Zijn er afspraken over thuiswerk of bereikbaarheid?" },
    { key: "dagelijkswerk", label: "Hoe ziet een typische werkdag of -week eruit in deze rol?" },
    { key: "sollicitatieproces", label: "Hoe verloopt het sollicitatieproces (stappen, contactpersoon, timing)?" },
    { key: "dealbreakers", label: "Wat zijn absolute no-go’s of dealbreakers voor deze rol?" },
    { key: "deeltijds", label: "Is deze job deeltijds? Zo ja: hoeveel uren en wanneer? Zijn de uren bespreekbaar? Hoe wordt dan omgegaan met de taakinhoud en hoe kunnen kandidaten aangeven in welk percentage ze geïnteresseerd zijn?" }
  ];

  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (key, value) => {
    setAnswers({ ...answers, [key]: value });
  };

  const generateVacature = () => {
    const prompt = `Schrijf een vacaturetekst op basis van deze input:

0. Organisatie: ${answers.organisatie}
1. Probleem: ${answers.probleem}
2. Resultaten: ${answers.resultaten}
3. Vaardigheden: ${answers.vaardigheden}
4. Team: ${answers.team}
5. Soft skills: ${answers.softskills}
6. Waarden: ${answers.waarden}
7. Aanbod: ${answers.aanbod}
8. Locatie: ${answers.locatie}
9. Dagelijks werk: ${answers.dagelijkswerk}
10. Sollicitatieproces: ${answers.sollicitatieproces}
11. Dealbreakers: ${answers.dealbreakers}
12. Deeltijds: ${answers.deeltijds}

De structuur moet zijn: Over het bedrijf, Over de functie, Profiel, Aanbod, Interesse. Schrijf helder en concreet, zonder clichés.`;

    setResult(`Vacaturetekst gegenereerd op basis van input:\n\n${prompt}`);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-6">
      <h1 className="text-xl font-bold">Vacaturegenerator</h1>
      {questions.map((q) => (
        <div key={q.key}>
          <label className="block font-medium mb-1">{q.label}</label>
          <textarea
            rows={3}
            value={answers[q.key] || ""}
            onChange={(e) => handleChange(q.key, e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>
      ))}
      <button
        onClick={generateVacature}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Genereer vacaturetekst
      </button>
      {result && (
        <div className="mt-6 border rounded p-4 bg-gray-50">
          <h2 className="font-semibold mb-2">Gegenereerde tekst</h2>
          <pre className="whitespace-pre-wrap text-sm">{result}</pre>
        </div>
      )}
    </div>
  );
}
