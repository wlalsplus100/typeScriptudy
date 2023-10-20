"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Abs_Navigation = /** @class */ (function () {
    function Abs_Navigation(selector) {
        // 생성자
        this._selector = selector; // selector 초기화
        this.id = Math.floor(Math.random() * 1000); // id 초기화
    }
    Object.defineProperty(Abs_Navigation.prototype, "selector", {
        get: function () {
            // selector의 getter
            return this._selector;
        },
        set: function (value) {
            // selector의 setter
            this._selector = value;
            // selector는 외부에서 접근할 수 없으므로 selector에 의존하는 el도 같이 setter
            this.el = document.querySelector(value);
        },
        enumerable: false,
        configurable: true
    });
    return Abs_Navigation;
}());
var Navigation = /** @class */ (function (_super) {
    __extends(Navigation, _super);
    function Navigation(selector) {
        var _this = 
        // 생성자 함수
        _super.call(this, selector) || this;
        _this.el = null; // 추상화 요소를 선언함. (null값으로 초기화)
        _this.el = document.querySelector(selector); // el 정의
        return _this;
    }
    Navigation.prototype.active = function (index) {
        // 부모 클래스에서 추상화 된 메서드 정의
        console.log("\uD65C\uC131 \uC778\uB371\uC2A4: ".concat(index));
    };
    return Navigation;
}(Abs_Navigation));
//# sourceMappingURL=index.js.map