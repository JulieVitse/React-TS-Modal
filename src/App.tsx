import './App.css'
import { Modal } from './lib/components/Modal/Modal'
import { useModal } from './lib/components/Modal/useModal'
import { TestComponent } from './TestComponent/TestComponent'

function App() {
  const { isOpen, openModal, closeModal, modalToOpen } = useModal()

  return (
    <div className="App">
      <header className="App-header">
        <p>React Modal Demo</p>
        <div className="btn__container">
          <button className="btn" onClick={() => openModal(0)}>
            Open Modal
          </button>
          <button className="btn" onClick={() => openModal(1)}>
            Open Modal 2
          </button>
        </div>
      </header>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        escToClose={true}
        clickOverlayClose={true}
        showClose={true}
        textContent="Text content of the first modal"
        htmlContent='<p>Injected HTML with the <strong>htmlContent</strong> prop</p><img src="https://picsum.photos/200" />'
        modalTitle="Modal 1 Title"
        //key={0}
        selectedModal={modalToOpen === 0}
      />

      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        escToClose={true}
        clickOverlayClose={true}
        modalTitle="Modal 2 Title"
        //key={1}
        selectedModal={modalToOpen === 1}
        ChildComponent={TestComponent}
      />
    </div>
  )
}

export default App
