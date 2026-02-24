function isPrime(value: number): boolean {
  if (value <= 1) {
    return false;
  }

  if (value === 2) {
    return true;
  }

  if (value % 2 === 0) {
    return false;
  }

  for (let divisor = 3; divisor * divisor <= value; divisor += 2) {
    if (value % divisor === 0) {
      return false;
    }
  }

  return true;
}

function getPrimesFromQuery(query: string): number[] {
  const values = query.match(/-?\d+/g);

  if (!values) {
    return [];
  }

  return values
    .map((value) => Number.parseInt(value, 10))
    .filter((value) => Number.isInteger(value) && isPrime(value));
}

function getScrabbleScoreFromQuery(query: string): number | null {
  const wordMatch = query.match(/scrabble score of\s+([a-z]+)/i);

  if (!wordMatch) {
    return null;
  }

  const letterValues: Record<string, number> = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10,
  };

  return wordMatch[1]
    .toLowerCase()
    .split("")
    .reduce((score, letter) => score + (letterValues[letter] ?? 0), 0);
}

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "atchamwa";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "atchamwa";
  }

  if (query.toLowerCase().includes("prime")) {
    const primeValues = getPrimesFromQuery(query);
    return primeValues.join(", ");
  }

  if (query.toLowerCase().includes("scrabble score")) {
    const scrabbleScore = getScrabbleScoreFromQuery(query);
    return scrabbleScore === null ? "" : scrabbleScore.toString();
  }

  return "";
}
