import { Modal } from '../../lib/components/Modal/Modal'
import { useModal } from '../../lib/components/Modal/useModal'

export function AllPropsModal() {
  // if you only need one modal you can use this hook
  const { isOpen, openModal, closeModal } = useModal()

  function onAfterCloseFunction() {
    alert('Modal has been closed')
  }

  return (
    <>
      <div className="btn__container">
        <button className="btn" onClick={() => openModal()}>
          Open Modal
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        modalVisible="visible"
        escToClose={false}
        clickOverlayClose={false}
        showClose={true}
        closeText="Exit"
        modalTitle="Example title"
        textContent="Example text content"
        htmlContent="<img src='https://picsum.photos/200/300' />"
        animationClass="fade"
        animationDuration=".5s"
        onAfterClose={onAfterCloseFunction}
        afterCloseEventDelay={500}
        showSpinner={true}
        spinnerDuration={2000}
        overlayClass="customOverlay"
        modalClass="customModal"
      />
    </>
  )
}

