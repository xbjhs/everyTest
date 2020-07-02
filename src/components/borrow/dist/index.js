"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
require("./index.scss");
var brorrow = function () {
    // 数据来源-->定义一个方法去请求数据
    var fetchLendMarketValue = function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get('https://api.pizzadex.io/v1/lend/market/value')];
                case 1:
                    result = _a.sent();
                    console.log(result);
                    return [2 /*return*/, result];
                case 2:
                    error_1 = _a.sent();
                    throw error_1.data;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    // const 
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "borrow_head" },
            react_1["default"].createElement("div", { className: "switch" },
                react_1["default"].createElement("span", { className: "active" }, "\u5E02\u573A"),
                react_1["default"].createElement("span", null, "\u91D1\u5E93")),
            react_1["default"].createElement("div", { className: "describe" },
                react_1["default"].createElement("div", { className: 'title' }, "\u53BB\u4E2D\u5FC3\u5316\u501F\u8D37"),
                react_1["default"].createElement("div", { className: 'desc' }, "PizzaLend \u662F\u4E00\u79CD\u53BB\u4E2D\u5FC3\u5316\u7684\u975E\u6258\u7BA1\u8D27\u5E01\u5E02\u573A\u534F\u8BAE\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u5176\u4E2D\u5145\u5F53\u5B58\u6B3E\u4EBA\u6216\u8D37\u6B3E\u4EBA\u3002\u5B58\u6B3E\u4EBA\u5411\u5E02\u573A\u63D0\u4F9B\u6D41\u52A8\u6027\u4EE5\u8D5A\u53D6\u88AB\u52A8\u6536\u5165\uFF0C\u501F\u6B3E\u4EBA\u80FD\u591F\u4EE5\u8D85\u989D\u8D28\u62BC\u8FDB\u884C\u65E0\u9650\u671F\u8D37\u6B3E\u3002"),
                react_1["default"].createElement("div", { className: 'value' },
                    "\u5F53\u524D\u5E02\u573A\u603B\u4EF7\u503C  ",
                    react_1["default"].createElement("span", { className: 'usd' }, "$100,205,000"),
                    "\u2248 \uFFE50.00"))),
        react_1["default"].createElement("div", { className: 'contant' },
            react_1["default"].createElement("div", { className: "liquidation" },
                react_1["default"].createElement("div", { className: 'bd_text' },
                    react_1["default"].createElement("div", null, "\u6E05\u7B97\u62CD\u5356\u00A0\u00A0\u00A0\u00A0"),
                    react_1["default"].createElement("div", { className: 'pro_savg' },
                        "\u5386\u53F2\u5E73\u5747\u5229\u6DA6\u7387\uFF1A",
                        react_1["default"].createElement("span", null, "8.02%"))),
                react_1["default"].createElement("div", { className: 'more' }, "\u66F4\u591A\u8BA2\u5355 >")),
            react_1["default"].createElement("div", { className: 'sub' },
                react_1["default"].createElement("div", { className: "blowing" },
                    react_1["default"].createElement("div", { className: "bl_text" },
                        react_1["default"].createElement("div", null,
                            "\u7206\u4ED3\u65F6\u95F4",
                            react_1["default"].createElement("div", { className: 'specific' }, "2020/02/02 20:50:20")),
                        react_1["default"].createElement("div", null,
                            "\u53EF\u62CD\u4E0B\u6570\u91CF",
                            react_1["default"].createElement("div", { className: 'specific' }, "30000.27294")),
                        react_1["default"].createElement("div", null,
                            "\u4ED3\u4F4D\u5269\u4F59",
                            react_1["default"].createElement("div", { className: 'specific' }, "100.0214"))),
                    react_1["default"].createElement("div", { className: "bl_rob" },
                        react_1["default"].createElement("div", null, "\u5229\u6DA6"),
                        react_1["default"].createElement("div", null, "\u7ACB\u5373\u62A2\u62CD"))),
                react_1["default"].createElement("div", { className: "blowing" },
                    react_1["default"].createElement("div", { className: "bl_text" },
                        react_1["default"].createElement("div", null,
                            "\u7206\u4ED3\u65F6\u95F4",
                            react_1["default"].createElement("div", { className: 'specific' }, "2020/02/02 20:50:20")),
                        react_1["default"].createElement("div", null,
                            "\u53EF\u62CD\u4E0B\u6570\u91CF",
                            react_1["default"].createElement("div", { className: 'specific' }, "30000.27294")),
                        react_1["default"].createElement("div", null,
                            "\u4ED3\u4F4D\u5269\u4F59",
                            react_1["default"].createElement("div", { className: 'specific' }, "100.0214"))),
                    react_1["default"].createElement("div", { className: "bl_rob" },
                        react_1["default"].createElement("div", null, "\u5229\u6DA6"),
                        react_1["default"].createElement("div", null, "\u7ACB\u5373\u62A2\u62CD")))))));
};
exports["default"] = (brorrow);

//# sourceMappingURL=index.js.map
