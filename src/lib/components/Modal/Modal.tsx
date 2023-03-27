import './modal.scss'
import { IModalProps, defaultProps } from '../../types/modalTypes'
import { useEffect, useState } from 'react'

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
 * @returns
 */
export function Modal({
  isOpen,
  modalVisible,
  closeModal,
  escToClose,
  clickOverlayClose,
  showClose,
  closeText,
  textContent,
  htmlContent,
  modalTitle,
  ChildComponent,
  animationClass,
  animationDuration,
  onAfterClose,
  showSpinner,
  customSpinner,
  spinnerDuration,
}: IModalProps) {
  
  const [loading, setLoading] = useState(showSpinner)

  useEffect(() => {
    const handleLoading = () => {
      if (showSpinner) {
        console.log('is loading')
        setTimeout(() => {
          setLoading(false)
          console.log('is not loading')
        }, spinnerDuration)
      }
    }
    if (isOpen) {
      handleLoading()
    } else {
      setTimeout(() => {
        setLoading(true)
      }, 500)
    }
  }, [isOpen, showSpinner, spinnerDuration])

  const handleEscClose = (e: any) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }
  const handleCloseEvent = () => {
    closeModal()
    onAfterClose && onAfterClose()
  }

  return (
    <>
      <div
        className={`wrapper ${isOpen ? modalVisible : ''} ${ animationClass && animationClass}`}
        style={{ transitionDuration: animationDuration ? animationDuration : '' }}
      >
        <div
          className="modal__overlay"
          onClick={clickOverlayClose ? handleCloseEvent : undefined}
        ></div>

        <div className={`modal`}>
          {showSpinner && loading && (
            <div className="modal__spinner">
              <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
          {showSpinner && loading && customSpinner && (
           <div
              className="modal__spinner"
              dangerouslySetInnerHTML={{ __html: customSpinner }}
            /> 
          )}

          <div className="modal__content">
            {modalTitle && (
              <h2 className="modal__content__title">{modalTitle}</h2>
            )}
            {ChildComponent ? ChildComponent : null}
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
            <button className="modal__btn" onClick={handleCloseEvent}>
              {closeText}
            </button>
          )}
        </div>
      </div>
      {escToClose
        ? window.addEventListener('keydown', handleEscClose)
        : window.removeEventListener('keydown', handleEscClose)}
    </>
  )
}

Modal.defaultProps = defaultProps
