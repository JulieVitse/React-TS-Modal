import './modal.scss'
// Required props
interface IModalRequiredProps {
  closeModal: () => void
  isOpen: boolean
}
// Optional props
interface IModalOptionalProps {
  escToClose?: boolean,
  clickOverlayClose?: boolean,
  textContent?: string,
  htmlContent?: any,
  modalTitle?: string
  selectedModal?: any,
  showClose?: boolean,
  ChildComponent?: React.FC | null
}
// Modal props
interface IModalProps extends IModalRequiredProps, IModalOptionalProps {}
// Define default props
const defaultProps: IModalOptionalProps = {
  escToClose: true,
  clickOverlayClose: true,
  showClose: true,
  textContent: '',
  htmlContent: null,
  modalTitle: '',
  selectedModal: null,
  ChildComponent: null
}
export function Modal({ isOpen, closeModal, escToClose, clickOverlayClose, showClose, textContent, htmlContent, modalTitle, selectedModal, ChildComponent }: IModalProps) {

  function handleEscClose(e: any) {
    if (e.key === 'Escape') {
      closeModal()
    }
  }
  
  return isOpen && selectedModal ? (
    <>
      <div className="wrapper">
        <div
          className="modal__overlay"
          onClick={clickOverlayClose ? closeModal : undefined}
        ></div>
        <div className="modal">
          {/* <button className="modal__btn" onClick={closeModal}>
            &#9587;
          </button> */}

          <div className="modal__content">
            
            {modalTitle && (
              <h2 className="modal__content__title">{modalTitle}</h2>
            )}
            {ChildComponent && (
              <ChildComponent />
            )}
            {textContent && (
              <p className="modal__content__text">{textContent}</p>
            )}
            {htmlContent && (
              <div
                className="modal__content__html"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            )}
          </div>
          {showClose && (
            <button className="modal__btnClose" onClick={closeModal}>
              Close
            </button>
          )}
        </div>
      </div>
      {escToClose
        ? window.addEventListener('keydown', handleEscClose)
        : window.removeEventListener('keydown', handleEscClose)}
    </>
  ) : null
}

Modal.defaultProps = defaultProps
