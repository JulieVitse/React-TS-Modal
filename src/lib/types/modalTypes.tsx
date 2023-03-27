import { ReactNode } from 'react'

// Required props
export interface IModalRequiredProps {
  closeModal: () => void
  isOpen: boolean
}
// Optional props
interface IModalOptionalProps {
  escToClose?: boolean
  clickOverlayClose?: boolean
  showClose?: boolean
  closeText?: string
  textContent?: string
  htmlContent?: any
  modalTitle?: string
  ChildComponent?: ReactNode
  animationClass?: string
  isAnimated?: boolean
  modalVisible?: string
  onAfterClose?: () => void
  animationDuration?: string
  showSpinner?: boolean
  customSpinner?: string
  spinnerDuration?: number
}
// All modal props
export interface IModalProps extends IModalRequiredProps, IModalOptionalProps {}
// Default props
export const defaultProps: IModalOptionalProps = {
  escToClose: true,
  clickOverlayClose: true,
  showClose: true,
  closeText: 'Close',
  textContent: '',
  htmlContent: null,
  modalTitle: '',
  ChildComponent: null,
  animationClass: undefined,
  isAnimated: true,
  modalVisible: 'visible',
  onAfterClose: () => {},
  animationDuration: '.3s',
  showSpinner: false,
  customSpinner: undefined,
  spinnerDuration: 1000,
}
