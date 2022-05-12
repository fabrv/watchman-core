import { Form } from 'react-bootstrap'

import './ActionBar.css'

export const ActionBar = () => {
  return (
    <div className='action-bar'>
      <Form.Control type='text' placeholder='Search' />
    </div>
  )
}
