import React from 'react'
import { ModalConsumer } from './createContext'

export default class ModalDestination extends React.PureComponent {
  render () {
    return (
      <ModalConsumer>
        {({ component: Component, props, hideModal }) =>
          Component ? <Component {...props} onRequestClose={hideModal} /> : null
        }
      </ModalConsumer>
    )
  }
}
