import { Form, Button } from 'react-bootstrap'
import {
  FormEvent,
  useState,
  // ChangeEvent
} from 'react'

const FormComponent = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [smoking, setSmoking] = useState(false)

  //   const handleInput = (e: ChangeEvent<HTMLInputElement>, fieldName: string) => {
  //     if (fieldName === 'email') {
  //       setEmail(e.target.value)
  //     } else if (fieldName === 'password') {
  //       setPassword(e.target.value)
  //     }
  //   }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(email)
    console.log(password)
    console.log(smoking)
    // submit the form
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          //   onChange={(e) => handleInput(e as any, 'email')}
        />
        <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // onChange={(e) => handleInput(e as any, 'password')}
        />
      </Form.Group>
      <Form.Group>
        <Form.Check type='checkbox' label='Smoking' checked={smoking} onChange={(e) => setSmoking(e.target.checked)} />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default FormComponent
