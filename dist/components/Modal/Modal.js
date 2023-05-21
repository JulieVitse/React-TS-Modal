import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
//import './modal.scss'
import { defaultProps } from '../../types/modalTypes';
import { useEffect, useState } from 'react';
/**
 *
 * @param isOpen boolean - indicates if the modal is open or not // required
 * @param closeModal function - closes the modal // required
 * @param escToClose boolean - indicates if the modal can be closed with the escape key
 * @param clickOverlayClose boolean - indicates if the modal can be closed by clicking on the overlay
 * @param showClose boolean - indicates if the close button is displayed
 * @param closeText string - text displayed on the close button
 * @param textContent string - text displayed in the modal
 * @param htmlContent string - html content displayed in the modal
 * @param modalTitle string - title displayed in the modal
 * @param ChildComponent React.FC - component displayed in the modal
 * @param animationClass string - class name of the animation to be applied
 * @param animationDuration string - duration of the animation
 * @param modalVisible string - class name of the modal when it is visible
 * @param onAfterClose function - function to be executed after the modal is closed
 * @param afterCloseEventDelay number - delay in ms before the onAfterClose function is executed
 * @param showSpinner boolean - indicates if the spinner is displayed
 * @param customSpinner string - custom spinner to be displayed
 * @param spinnerDuration number - duration in ms of the spinner
 * @param modalClass string - class name of the modal
 * @param overlayClass string - class name of the overlay
 * @param children ReactNode - children to be displayed in the modal
 * @returns JSX.Element - modal component
 */
function Modal({ isOpen, modalVisible, closeModal, escToClose, clickOverlayClose, showClose, closeText, textContent, htmlContent, modalTitle, ChildComponent, animationClass, animationDuration, onAfterClose, afterCloseEventDelay, showSpinner, customSpinner, spinnerDuration, modalClass, overlayClass, children }) {
    const [loading, setLoading] = useState(showSpinner);
    useEffect(() => {
        const handleLoading = () => {
            if (showSpinner) {
                console.log('is loading');
                setTimeout(() => {
                    setLoading(false);
                    console.log('is not loading');
                }, spinnerDuration);
            }
        };
        if (isOpen) {
            handleLoading();
        }
        else {
            setTimeout(() => {
                setLoading(true);
            }, 500);
        }
    }, [isOpen, showSpinner, spinnerDuration]);
    /* const handleEscClose = (e: any) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    } */
    const handleCloseEvent = () => {
        closeModal();
        onAfterClose && setTimeout(() => onAfterClose(), afterCloseEventDelay);
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", Object.assign({ className: `wrapper ${isOpen ? modalVisible : ''} ${animationClass && animationClass}`, style: {
                    transitionDuration: animationDuration ? animationDuration : '',
                } }, { children: [_jsx("div", { className: `modal__overlay ${overlayClass ? overlayClass : ''}`, onClick: clickOverlayClose ? handleCloseEvent : undefined }), _jsxs("div", Object.assign({ className: `modal ${modalClass ? modalClass : ''}` }, { children: [showSpinner && loading && (_jsx("div", Object.assign({ className: "modal__spinner" }, { children: _jsxs("div", Object.assign({ className: "lds-roller" }, { children: [_jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {})] })) }))), showSpinner && loading && customSpinner && (_jsx("div", { className: "modal__spinner", dangerouslySetInnerHTML: { __html: customSpinner } })), _jsxs("div", Object.assign({ className: "modal__content" }, { children: [children && children, modalTitle && (_jsx("h2", Object.assign({ className: "modal__content__title" }, { children: modalTitle }))), ChildComponent ? ChildComponent : null, textContent && (_jsx("p", Object.assign({ className: "modal__content__text" }, { children: textContent }))), htmlContent && (_jsx("div", { className: "modal__content__html", dangerouslySetInnerHTML: { __html: htmlContent } }))] })), showClose && (_jsx("button", Object.assign({ className: "modal__btn", onClick: handleCloseEvent }, { children: closeText })))] }))] })), escToClose ? escToClose : null] }));
}
Modal.defaultProps = defaultProps;
export default Modal;
