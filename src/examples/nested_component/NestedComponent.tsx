import { Modal } from '../../lib/components/Modal/Modal'
import { useModal } from '../../lib/components/Modal/useModal'
import { TestComponent } from '../../TestComponent/TestComponent'

export function NestedComponent() {
  // if you only need one modal you can use this hook
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <div className="example-wrapper">
        <p>Component inside modal</p>
        <div className="btn__container">
          <button className="btn" onClick={() => openModal()}>
            Open Modal
          </button>
        </div>

      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        escToClose={true}
        clickOverlayClose={true}
        modalTitle="Modal 2 Title"
        ChildComponent={<TestComponent name={'Form component'} />}
        animationClass="fade"
        animationDuration=".5s"
        modalVisible="visible"
      />
    </div>
  )
}

