import React, { createContext } from 'react'

const { Provider, Consumer } = createContext({
  component: null,
  props: {},
  showModal: () => { },
  hideModal: () => { }
})

export class ModalProvider extends React.PureComponent {
  showModal = (component, props = {}) => {
    this.setState({
      component,
      props
    })
  };
  hideModal = () => this.setState({ component: null, props: {} })
  state = {
    component: null,
    props: {},
    showModal: this.showModal,
    hideModal: this.hideModal
  }
  render () {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
}

export const ModalConsumer = Consumer
