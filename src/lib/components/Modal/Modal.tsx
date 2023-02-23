import styles from '../lib/components/Modal/Modal.module.css'
import btnClose from 'src/assets/btn_close.png'

interface modalProps {
  closeModal: () => void
}

export function Modal({ closeModal }: modalProps) {
  return (
    <div className={styles.modal}>
      <div
        onClick={closeModal}
        style={{ backgroundImage: `url(${btnClose})` }}
        className={styles.modal__btn}
      ></div>
      <p className={styles.modal__content}>Modal Content</p>
    </div>
  )
}
