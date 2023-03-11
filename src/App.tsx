import './App.css'
//import { useEffect } from 'react'
//import { useState } from 'react'
import { Modal } from './lib/components/Modal/Modal'
import { useModal } from './lib/components/Modal/useModal'

function App() {
  const { isOpen, openModal, closeModal, modalToOpen } = useModal()

  return (
    <div className="App">
      <header className="App-header">
        <p>React Modal Demo</p>
        <button className="btn" onClick={() => openModal(0)}>
          Open Modal
        </button>
        <button className="btn" onClick={() => openModal(1)}>
          Open Modal 2
        </button>

        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          escToClose={true}
          clickOverlayClose={true}
          textContent="Text content of the first modal"
          htmlContent='<p>Injected HTML with the <strong>htmlContent</strong> prop</p><img src="https://picsum.photos/200" />'
          modalTitle="Modal 1 Title"
          key={0}
          selectedModal={modalToOpen === 0}
        />

        <Modal
          isOpen={isOpen}
          closeModal={closeModal}
          escToClose={true}
          clickOverlayClose={true}
          textContent="Text content of the second modal"
          htmlContent={null}
          modalTitle="Modal 2 Title"
          key={1}
          selectedModal={modalToOpen === 1}
        />
      </header>
    </div>
  )
}

export default App
