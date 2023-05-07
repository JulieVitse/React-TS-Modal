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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal } from '../../lib/components/Modal/Modal';
import { useModal } from '../../lib/components/Modal/useModal';
export function SimpleUsage() {
    var _a = useModal(), isOpen = _a.isOpen, openModal = _a.openModal, closeModal = _a.closeModal;
    return (_jsxs(_Fragment, { children: [_jsx("button", __assign({ className: "btn", onClick: function () { return openModal(); } }, { children: "Open Modal" })), _jsx(Modal, __assign({ isOpen: isOpen, closeModal: closeModal }, { children: _jsx("p", { children: "Simple modal content" }) }))] }));
}
