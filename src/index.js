import React from 'react'
import ReactDOM from 'react-dom'

class ModalDestination extends React.PureComponent {
  constructor (props) {
    super(props)
    this.node = document.createElement('div')
    document.body.appendChild(this.node)
  }

  componentWillUnmount () {
    if (this.node) {
      document.body.removeChild(this.node)
    }
    this.node = null
  }
  render () {
    return ReactDOM.createPortal(
      this.props.children,
      this.node
    )
  }
}

const App = () => (
  <div>
    <ModalDestination />
    <h1>
        THis is level 1
      <div>
        <h2>this is level 2</h2>

      </div>
    </h1>
  </div>
)

export default ReactDOM.render(<App />, document.getElementById('render'))
