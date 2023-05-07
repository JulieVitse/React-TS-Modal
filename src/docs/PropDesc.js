var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export function PropDesc(_a) {
    var name = _a.name, value = _a.value, description = _a.description;
    return (_jsxs("div", __assign({ className: "prop-wrapper" }, { children: [_jsxs("p", __assign({ className: "ind-3" }, { children: [name, "={ "] })), _jsxs("p", __assign({ className: "ind-4" }, { children: [value, " "] })), _jsxs("p", __assign({ className: "comment ind-4" }, { children: [description, _jsx("span", { children: "}" })] }))] })));
}
