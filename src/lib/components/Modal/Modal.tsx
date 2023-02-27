import './modal.scss'
import btnClose from 'lib/assets/btn-close.png'
interface modalProps {
  closeModal: () => void,
  isOpen: boolean,
}

export function Modal({ isOpen, closeModal }: modalProps) {
  return (
    <>
      {!isOpen ? null : (
        <div className="modal">
          <div
            onClick={closeModal}
            style={{ backgroundImage: `url(${btnClose})` }}
            className="modal__btn"
          ></div>
          <p className="modal__content">Modal Content</p>
        </div>
      )}
    </>
  )
}
