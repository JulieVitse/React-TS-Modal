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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './TestComponent.scss';
export function TestComponent(_a) {
    var name = _a.name;
    return (_jsxs("form", { children: [_jsx("h1", { children: name }), _jsx("label", __assign({ htmlFor: "name" }, { children: "Name" })), _jsx("input", { type: "text", id: "name", className: "input__name" }), _jsx("label", __assign({ htmlFor: "email" }, { children: "Email" })), _jsx("input", { type: "email", id: "email", className: "input__email" }), _jsx("label", __assign({ htmlFor: "password" }, { children: "Password" })), _jsx("input", { type: "password", id: "password", className: "input__password" }), _jsx("button", __assign({ type: "submit", className: "formBtn" }, { children: "Submit" }))] }));
}
