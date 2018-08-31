import React from 'react'
import ReactDOM from 'react-dom'

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
  <div>
    <WrapDestination />
    <h1>
        THis is level 1
      <div>
        <h2>this is level 2</h2>
        <Modal>
          fuckingC
        </Modal>
      </div>
    </h1>
  </div>
)

export default ReactDOM.render(<App />, document.getElementById('render'))
