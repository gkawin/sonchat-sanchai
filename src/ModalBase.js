import React from 'react'
import Modal from 'react-modal'
import { ModalConsumer } from './createContext'

const ModalBase = ({ children }) => (
  <ModalConsumer>
    {(props) => (
      <Modal isOpen >
        {console.log(props)}
        {children}
        {/* <button onClick={() => showModal(Modal1)}>Open Modal</button>
        <button onClick={() => showModal(Modal2, { foo: 'bar' })}>
          Open Second Modal
        </button> */}
      </Modal>
    )}
  </ModalConsumer>
)

export default ModalBase
