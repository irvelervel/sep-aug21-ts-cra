import { useState, useEffect } from 'react'
import { Alert, Button } from 'react-bootstrap'

interface FunctionalComponentProps {
  title: string
  subTitle?: string
}

interface User {
  name: string
}

const FunctionalComponent = ({ title, subTitle }: FunctionalComponentProps) => {
  const [alertVariant, setAlertVariant] = useState('danger')
  const [user, setUser] = useState<User | null>(null)
  // how can I tell TS that null is just the initial value, and later on
  // user is going to become something like { name: string } ???
  // there is a way for telling TS explicitely the type of user, without having TS
  // trying to automatically figure it out by our initial value

  useEffect(() => {
    console.log('just mounted!')
  }, [])

  return (
    <div>
      <h1>{title}</h1>
      <h3>{subTitle || ''}</h3>
      <Alert variant={alertVariant}>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
        </p>
        <Button variant='primary' onClick={() => setAlertVariant(alertVariant === 'danger' ? 'success' : 'danger')}>
          CHANGE COLOR
        </Button>
        {user ? <div>Welcome, {user.name}</div> : <div>You need to log in</div>}
      </Alert>
    </div>
  )
}

export default FunctionalComponent
