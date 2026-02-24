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

  return "";
}
