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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './Nav.scss';
import { NavLink } from 'react-router-dom';
export function Nav() {
    return (_jsx(_Fragment, { children: _jsx("nav", { children: _jsxs("ul", __assign({ className: 'navList' }, { children: [_jsx(NavLink, __assign({ to: "/" }, { children: "Overview" })), _jsx(NavLink, __assign({ to: "/examples/" }, { children: "Examples" }))] })) }) }));
}
