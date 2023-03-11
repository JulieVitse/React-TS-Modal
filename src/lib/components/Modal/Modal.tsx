import './modal.scss'
//import btnClose from 'lib/assets/btn-close.png'
//import { createPortal } from 'react-dom'
interface modalProps {
  closeModal: () => void
  isOpen: boolean
  escToClose: boolean,
  clickOverlayClose: boolean,
  textContent: string | null,
  htmlContent: any,
  modalTitle: string | null
  selectedModal: any
}

export function Modal({ isOpen, closeModal, escToClose, clickOverlayClose, textContent, htmlContent, modalTitle, selectedModal }: modalProps) {

  function handleEscClose(e: any) {
    if (e.key === 'Escape') {
      closeModal()
    }
  }
  
  return isOpen && selectedModal ? (
    <>
      <div
        className="modal__overlay"
        onClick={clickOverlayClose ? closeModal : undefined}
      ></div>
      <div className="modal">
        <button className="modal__btn" onClick={closeModal}>
          &#9587;
        </button>
        <div className="modal__content">
          <h2 className="modal__content__title">{modalTitle}</h2>
          <p className="modal__content__text">{textContent}</p>
          <div
            className="modal__content__html"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>

      {escToClose
        ? window.addEventListener('keydown', handleEscClose)
        : window.removeEventListener('keydown', handleEscClose)}
    </>
  ) : null
}
