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
import { TestComponent } from '../../TestComponent/TestComponent';
import { Modal } from '../../lib/components/Modal/Modal';
import { useModal } from '../../lib/components/Modal/useModal';
export function MultipleModals() {
    // if you need more than one modal, you need to use different names for the hooks
    var _a = useModal(), isOpenConfirm = _a.isOpen, openModalConfirm = _a.openModal, closeModalConfirm = _a.closeModal;
    var _b = useModal(), isOpenForm = _b.isOpen, openModalForm = _b.openModal, closeModalForm = _b.closeModal;
    return (_jsxs(_Fragment, { children: [_jsxs("div", __assign({ className: "btn__container" }, { children: [_jsx("button", __assign({ className: "btn", onClick: function () { return openModalConfirm(); } }, { children: "Open Confirm" })), _jsx("button", __assign({ className: "btn", onClick: function () { return openModalForm(); } }, { children: "Open Form" }))] })), _jsx(Modal, { isOpen: isOpenConfirm, closeModal: closeModalConfirm, textContent: 'I am a confirm modal' }), _jsx(Modal, { isOpen: isOpenForm, closeModal: closeModalForm, ChildComponent: _jsx(TestComponent, { name: 'Form component' }) })] }));
}
