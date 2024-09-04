import { act, renderHook } from "@testing-library/react-hooks";
import { useLifePointsState } from "./lifePointsStore";

describe("lifePointsStore", () => {
  it("should start with 0 lifePoints", () => {
    const { result } = renderHook(() => useLifePointsState());
    expect(result.current.lifePoints).toBe(0);
  });

  it("should set initial lifePoints", () => {
    const { result } = renderHook(() => useLifePointsState());
    act(() => {
      result.current.setInitial(10);
    });
    expect(result.current.lifePoints).toBe(10);
  });

  it("should descrease life points", () => {
    const { result } = renderHook(() => useLifePointsState());
    act(() => {
      result.current.decrease(10);
    });
    expect(result.current.lifePoints).toBe(0);
  });
});
