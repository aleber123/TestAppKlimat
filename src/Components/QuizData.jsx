const questions = [
    {
      question: "Hur mycket ätbar mat slänger ditt hushåll i genomsnitt?",
      type: "multiple",
      options: [
        { text: "Slänger inte mycket mat alls", points: 1 },
        { text: "En del matsvinn blir det", points: 2 },
        { text: "Det åker ganska mycket mat i sopporna tyvärr", points: 3 },
        { text: "Hoppa över fråga", points: 0 }
      ]
    },
    {
      question: "Brukar du köpa närodlat mat?",
      type: "multiple",
      options: [
        { text: "Ja, nästan allt", points: 1 },
        { text: "Ibland, så gott det går", points: 2 },
        { text: "Nej, oftast inte", points: 3 },
        { text: "Hoppa över fråga", points: 0 }
      ]
    },
    {
      question: "Hur stor andel av det du köper är ekologiskt?",
      type: "multiple",
      options: [
        { text: "Det mesta", points: 1 },
        { text: "En del", points: 2 },
        { text: "Inte så mycket", points: 3 },
        { text: "Hoppa över fråga", points: 0 }
      ]
    },
    {
      question: "Handlar du matvaror efter säsong?",
      type: "multiple",
      options: [
        { text: "Ja, nästan alltid", points: 1 },
        { text: "Ibland, så gott det går", points: 2 },
        { text: "Nej, oftast inte", points: 3 },
        { text: "Hoppa över fråga", points: 0 }
      ]
    },
    {
      question: "Hur mycket vegetariskt äter du?",
      type: "multiple",
      options: [
        { text: "Är vegetarian eller vegan", points: 1 },
        { text: "Ibland", points: 2 },
        { text: "Aldrig eller nästan aldrig", points: 3 },
        { text: "Hoppa över fråga", points: 0 }
      ]
    },
    {
      question: "Hur ofta äter du nöt eller lam?",
      type: "multiple",
      options: [
        { text: "Äter inte nöt eller lam", points: 1 },
        { text: "0 - 2 gånger i veckan", points: 2 },
        { text: "Mer än 2 gånger i veckan", points: 3 },
        { text: "Hoppa över fråga", points: 0 }
      ]
    },
    {
      question: "Hur mycket mejeriprodukter äter du?",
      type: "multiple",
      options: [
        { text: "Ingenting alls", points: 1 },
        { text: "Ganska mycket", points: 2 },
        { text: "Väldigt mycket", points: 3 },
        { text: "Hoppa över fråga", points: 0 }
      ]
    },
    {
      question: "Handlar du matvaror med palmolja?",
      type: "multiple",
      options: [
        { text: "Nej", points: 1 },
        { text: "Ibland", points: 2 },
        { text: "Ja / det är inget jag har reflekterat över", points: 3 },
        { text: "Hoppa över fråga", points: 0 }
      ]
    },
    {
      question: "Vart slänger du ditt matsvinn?",
      type: "multiple",
      options: [
        { text: "Alltid i komposten", points: 1 },
        { text: "Ibland i komposten, ibland orkar jag inte", points: 2 },
        { text: "Jag komposterar inte, slänger maten i vanliga hushållssopporna", points: 3 },
        { text: "Hoppa över fråga", points: 0 }
      ]
    },
    {
      question: "Tänker du på miljömärkningar när du handlar?",
      type: "multiple",
      options: [
        { text: "Jag försöker så ofta det går välja varor med miljömärkningar", points: 1 },
        { text: "Ibland väljer jag miljömärkningar framför varor utan märkning", points: 2 },
        { text: "Nej det är inget jag baserar mitt köp på", points: 3 },
        { text: "Hoppa över fråga", points: 0 }
      ]
    },
    {
      question: "Odlar du frukt och grönt hemma?",
      type: "multiple",
      options: [
        { text: "Ja, är helt eller delvis självförsörjande", points: 1 },
        { text: "Ja, en mindre odling", points: 2 },
        { text: "Nej det gör jag inte", points: 3 },
        { text: "Hoppa över fråga", points: 0 }
      ]
    }
  ];
  
  export default questions;
  