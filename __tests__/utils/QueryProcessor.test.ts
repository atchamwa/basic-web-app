import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return name', () => {
        const query = "what is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "atchamwa"
          ));
    })

    test('should return andrewid', () => {
        const query = "What is your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "atchamwa"
          ));
    })

    test('primes', () => {
        const query = "Which of the following numbers are primes: 19, 22, 30, 94, 57?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "19"
          ));
    })

    test('scrabble score', () => {
        const query = "What is the scrabble score of banana?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "8"
          ));
    })
});