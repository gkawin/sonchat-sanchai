import React from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'

import { createStore, combineReducers } from 'redux'

const createActions = (subType = {}) => {
  let type = {}
  Object.keys(subType).forEach((name) => {
    const schema = subType[name]
    type[name] = (payload) => Object.assign({ type: name, payload: schema })
  })
  return type
}

const Actions = createActions({
  openedModal: { isOpen: true },
  closedModal: { isOpen: false }
})

const reducers = combineReducers({
  modal: (state = { }, payload) => {
    switch (payload.type) {
      case 'openedModal': {
        return Object.assign({}, state.modal, payload.payload)
      }
    }
    return state
  }
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__()
)

class WrapDestination extends React.PureComponent {
  constructor (props) {
    super(props)
    this.node = document.createElement('div')
    this.node.id = 'wrap-destination'
    document.body.appendChild(this.node)
  }

  render () {
    return null
  }
}

class Modal extends React.PureComponent {
  render () {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById('wrap-destination')
    )
  }
}

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <WrapDestination />
      <h1>
        THis is level 1
        <ClickMe />
      </h1>
    </React.Fragment>
  </Provider>
)

const ClickMe = connect((state, ownProps) => {
  return ({ isOpen: state.modal.isOpen })
})(({ isOpen }) => {
  return (<div>
    <h2>this is level 2</h2>
    <Modal>
      <button onClick={() => store.dispatch(Actions.closedModal())}>Close</button>
      <button onClick={() => store.dispatch(Actions.openedModal())}>Open</button>
      <div>{
        isOpen ? 'foo' : 'bar'
      }</div>
    </Modal>
  </div>)
})

export default ReactDOM.render(<App />, document.getElementById('render'))
