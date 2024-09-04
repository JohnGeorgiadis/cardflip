import { act, renderHook } from "@testing-library/react-hooks";
import { useCardsState } from "./cardsStore";

describe("CardsStore", () => {
  it("should start with null cards", () => {
    const { result } = renderHook(() => useCardsState());
    expect(result.current.initial).toBe(null);
  });

  it("should set initial cards", () => {
    const data = [
      {
        source: { uri: "https://example.com" },
        lifePoints: 10,
        healthBackValue: 10,
        id: 1,
      },
    ];
    const { result } = renderHook(() => useCardsState());
    act(() => {
      result.current.setInitial(data);
    });
    expect(result.current.initial).toEqual(data);
  });

  it("should getLifePointsById for a card", () => {
    const data = [
      {
        source: { uri: "https://example.com" },
        lifePoints: 10,
        healthBackValue: 10,
        id: 1,
      },
    ];
    const { result } = renderHook(() => useCardsState());
    let lifePoints = 0;
    act(() => {
      lifePoints = result.current.getLifePointsById(data[0].id);
    });

    expect(lifePoints).toEqual(data[0].lifePoints);
  });

  it("should getHealthBackValueById for a card", () => {
    const data = [
      {
        source: { uri: "https://example.com" },
        lifePoints: 10,
        healthBackValue: 10,
        id: 1,
      },
    ];
    const { result } = renderHook(() => useCardsState());
    let healthBackValue = 0;
    act(() => {
      healthBackValue = result.current.getHealthBackValueById(data[0].id);
    });

    expect(healthBackValue).toEqual(data[0].healthBackValue);
  });
});
