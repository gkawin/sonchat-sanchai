import React from 'react'
import createContext from '../createContext'
import Modal from 'react-modal'

export default class AppModal extends React.Component {
  render () {
    return (
      <createContext.Consumer>
        {(state) => {
          console.log(state)
          return (
            <Modal isOpen>
              <div>this is modal content</div>
              <button>fuck</button>
            </Modal>
          )
        } }
      </createContext.Consumer>
    )
  }
}
