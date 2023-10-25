"use strict";
// function greeting(name?: string): void {
//   if (name) {
//     console.log(name);
//   } else console.log("이름이 없습니다");
// }
// greeting("홍길동");
// greeting();
// function len(x: string | number): number {
//   return x.toString().length;
// }
// console.log(len(5161));
// function married(m: number, home: boolean, 매력: string): string | void {
//   let score: number = 0;
//   score += m;
//   score += home ? 500 : 0;
//   score += 매력 === "상" ? 100 : 0;
//   if (score >= 600) return "결혼가능";
// }
// console.log(married(700, false, "중"));
// console.log(married(100, false, "상"));
var numbers_module = {
    multiplyNumbers: function () {
        var n = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            n[_i] = arguments[_i];
        }
        return n.reduce(function (a, b) { return a * b; });
    },
};
console.log(numbers_module.multiplyNumbers(1, 2, 3, 4));
//# sourceMappingURL=study.js.map