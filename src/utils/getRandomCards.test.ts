import { getRandomCards } from "./getRandomCards";

describe("getRandomCards", () => {
  it("should return an array of cards", () => {
    const cards = getRandomCards();
    expect(Array.isArray(cards)).toBe(true);
  });

  it("should return an array of cards with the correct properties", () => {
    const cards = getRandomCards();
    cards.forEach((card) => {
      expect(card).toHaveProperty("source");
      expect(card).toHaveProperty("lifePoints");
      expect(card).toHaveProperty("healthBackValue");
      expect(card).toHaveProperty("id");
    });
  });

  it("should return an array of cards with unique ids", () => {
    const cards = getRandomCards();
    const ids = cards.map((card) => card.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(cards.length);
  });
});
