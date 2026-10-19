// Exercițiul 1.b: Funcții de prelucrare

// Returnează o listă cu numele orașelor folosind .map()
export const getOrase = (list) => list.map((d) => d.oras);

// Returnează destinațiile nevizitate (vizitat: false) folosind .filter()
export const getNevizitate = (list) => list.filter((d) => !d.vizitat);

// Calculează suma zilelor folosind .reduce() cu valoare inițială 0
export const totalZile = (list) =>
  list.reduce((total, d) => total + d.zile, 0);

// Formatează un rând pentru o destinație folosind destructuring, template literal și operator ternar
export const formatDestinatie = ({ oras, tara, zile, vizitat }) =>
  `[${vizitat ? 'x' : ' '}] ${oras}, ${tara} (${zile} zile)`;

// Returnează un obiect cu numărul de destinații pe fiecare țară
export const numarPeTara = (list) =>
  list.reduce(
    (acc, { tara }) => ({ ...acc, [tara]: (acc[tara] ?? 0) + 1 }),
    {}
  );

// Ordonează descrescător după zile o copie a listei ([...list])
export const sortDupaZile = (list) =>
  [...list].sort((a, b) => b.zile - a.zile);


// Exercițiul 2: Modificarea listei fără mutații (impurități)

// Inversează valoarea vizitat pentru destinația cu id-ul dat
export const marcheazaVizitat = (list, id) =>
  list.map((d) => (d.id === id ? { ...d, vizitat: !d.vizitat } : d));

// Adaugă o destinație la sfârșit folosind spread operator
export const adaugaDestinatie = (list, d) => [...list, d];

// Șterge destinația cu id-ul specificat folosind .filter()
export const stergeDestinatie = (list, id) =>
  list.filter((d) => d.id !== id);