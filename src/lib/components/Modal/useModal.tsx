import { useState } from "react"

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  let escToClose = true
  
  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function handleEscClose(e: any) {
    if (e.key === 'Escape') {
      closeModal()
    }
  }
  
  if (typeof window !== "undefined") {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    if (escToClose) {
      window.addEventListener('keydown', handleEscClose)
    } else {
      window.removeEventListener('keydown', handleEscClose)
    }
  }

  return {
    isOpen,
    openModal,
    closeModal,
    escToClose
  }
}

