import React from 'react'
import { Modal } from '../../lib/components/Modal/Modal'
import { useModal } from '../../lib/components/Modal/useModal'

export function SimpleUsage() {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <div className="example-wrapper">
      <p>Simple modal usage</p>
      <button className="btn" onClick={() => openModal()}>
        Open Modal
      </button>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        
      >
        <p>Simple modal content</p>
        </Modal>
    </div>
  )
}
