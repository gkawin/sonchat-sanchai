import React, { createContext } from 'react'
import ReactDOM from 'react-dom'

const ModalContext = createContext({
  component: null,
  props: {},
  showModal: () => { },
  hideModal: () => { }
})

class ModalProvider extends React.PureComponent {
  render () {
    return (
      <ModalContext.Provider value={{ foo: 'bar' }}>
        {this.props.children}
      </ModalContext.Provider>
    )
  }
}

const App = () => (
  <div>
    this is anchor the destination
    <ModalProvider />
  </div>
)

export default ReactDOM.render(<App />, document.getElementById('render'))
