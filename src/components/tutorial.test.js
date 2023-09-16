import { describe, expect, it } from "vitest";
import { tutorial } from "./Tutorial";

// テストする対象は tutorial、関数を実行
describe("tutorial", () => {
  it("1 + 2 = 3", () => {
    // テストで期待する結果は「 1 + 2 = 3 」になるかどうか
    const result = tutorial(1, 2); // 変数resultを定義して引数を渡す
    // テスト結果は、resultが 3 になること
    expect(result).toBe(3);
  });
});

/**
 * describe = テストする対象
 * describe(name, fn)
 */

/**
 * it(test[** it と test は同じもの **])(name, fn)
 */

/**
 * expect()
 * テスト結果を評価する
 */

// describe("add", () => {
//   it("1 + 2 = 3", () => {
//     const result = add(1, 2)

//     expect(result).toBe(3)
//   })
// })
