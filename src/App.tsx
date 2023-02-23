import { useState } from 'react'
import './App.css'
import { Modal } from './lib/components/Modal/Modal'

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React Modal Demo</p>
        <button className="btn" onClick={handleOpenModal}>
          Open Modal
        </button>
        {showModal && <Modal closeModal={handleCloseModal} />}
      </header>
    </div>
  )
}

export default App
