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
export function AllPropsModal() {
    // if you only need one modal you can use this hook
    var _a = useModal(), isOpen = _a.isOpen, openModal = _a.openModal, closeModal = _a.closeModal;
    function onAfterCloseFunction() {
        alert('Modal has been closed');
    }
    return (_jsxs(_Fragment, { children: [_jsx("div", __assign({ className: "btn__container" }, { children: _jsx("button", __assign({ className: "btn", onClick: function () { return openModal(); } }, { children: "Open Modal" })) })), _jsx(Modal, { isOpen: isOpen, closeModal: closeModal, modalVisible: "visible", escToClose: false, clickOverlayClose: false, showClose: true, closeText: "Exit", modalTitle: "Example title", textContent: "Example text content", htmlContent: "<img src='https://picsum.photos/200/300' />", animationClass: "fade", animationDuration: ".5s", onAfterClose: onAfterCloseFunction, afterCloseEventDelay: 500, showSpinner: true, spinnerDuration: 2000, overlayClass: "customOverlay", modalClass: "customModal" })] }));
}
