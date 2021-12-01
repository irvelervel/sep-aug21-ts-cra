import { Component } from 'react'
import { Alert, Button } from 'react-bootstrap'

interface MainComponentProps {
  // what is the shape of this props object
  // MainComponent is going to receive?
  title: string
  subTitle?: string
  counter?: number
}

interface MainComponentState {
  alertVariant: string
}

class MainComponent extends Component<MainComponentProps, MainComponentState> {
  state: MainComponentState = {
    alertVariant: 'danger',
  }

  //   changesName = (name:string) => name.toUpperCase()

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subTitle || ''}</h3>
        {this.props.counter && <p>{this.props.counter}</p>}
        <Alert variant={this.state.alertVariant}>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
            lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
          </p>
          <Button
            variant='primary'
            onClick={() =>
              this.setState({
                alertVariant: this.state.alertVariant === 'danger' ? 'success' : 'danger',
              })
            }
          >
            CHANGE COLOR
          </Button>
        </Alert>
      </div>
    )
  }
}

export default MainComponent

// Array<string>
