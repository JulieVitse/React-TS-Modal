import './App.css'
import { Modal } from './lib/components/Modal/Modal'
import { useModal } from './lib/components/Modal/useModal'

function App() {
  const { isOpen, openModal, closeModal } = useModal()
  return (
    <div className="App">
      <header className="App-header">
        <p>React Modal Demo</p>
        <button className="btn" onClick={openModal}>
          Open Modal
        </button>
        <Modal isOpen={isOpen} closeModal={closeModal} />
      </header>
    </div>
  )
}

export default App
