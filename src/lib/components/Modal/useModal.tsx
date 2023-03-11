import { useState } from "react"

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalToOpen, setModalToOpen] = useState(null)

  console.log("modalToOpen", modalToOpen)

  function openModal(e: any = null) {
    setModalToOpen(e)
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return {
    isOpen,
    openModal,
    closeModal,
    modalToOpen,
  }
}

