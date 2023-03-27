
import './App.css'
import { Modal } from './lib/components/Modal/Modal'
import { useModal } from './lib/components/Modal/useModal'
import { TestComponent } from './TestComponent/TestComponent'

function App() {
  // if you only need one modal you can use this hook
  //const { isOpen, openModal, closeModal } = useModal()
  // if you need more than one modal, you need to use different names for the hooks
  const { isOpen: isOpen1 , openModal: openModal1 , closeModal: closeModal1 } = useModal()
  const {
    isOpen: isOpen2,
    openModal: openModal2,
    closeModal: closeModal2,
  } = useModal()

  function onAfterCloseFunction() {
    console.log('Modal closed')
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React Modal Demo</p>
        <div className="btn__container">
          <button className="btn" onClick={() => openModal1()}>
            Open Modal
          </button>
          <button className="btn" onClick={() => openModal2()}>
            Open Modal 2
          </button>
        </div>
      </header>
      <Modal
        isOpen={isOpen1}
        closeModal={closeModal1}
        escToClose={true}
        clickOverlayClose={true}
        showClose={true}
        textContent="Text content of the first modal"
        htmlContent='<p>Injected HTML with the <strong>htmlContent</strong> prop</p><img src="https://picsum.photos/200" />'
        modalTitle="Modal 1 Title"
        //isAnimated={true}
        animationClass="fade"
        animationDuration=".5s"
        modalVisible="visible"
        spinnerDuration={1000}
        showSpinner={true}
        onAfterClose={onAfterCloseFunction}
        //customSpinner= {undefined}
        //customSpinner={`<div>custom spinner</div>`}
      />

      <Modal
        isOpen={isOpen2}
        closeModal={closeModal2}
        escToClose={true}
        clickOverlayClose={true}
        modalTitle="Modal 2 Title"
        ChildComponent={<TestComponent name={'Child Component'} />}
        //isAnimated={true}
        animationClass="fade"
        animationDuration=""
        modalVisible="visible"
      />
    </div>
  )
}

export default App
