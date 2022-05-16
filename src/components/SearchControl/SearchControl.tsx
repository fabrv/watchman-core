import { KeyboardEvent, ChangeEvent } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import { FiSearch } from 'react-icons/fi'
import './SearchControl.css'

export interface SearchControlProps {
  value: string
  placeholder: string
  onChange?: (value: string) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
}

export const SearchControl = ({
  value,
  onChange,
  onKeyDown,
  placeholder
}: SearchControlProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <div className='input-filter'>
      <InputGroup>
        <InputGroup.Text><FiSearch/></InputGroup.Text>
        <Form.Control
          defaultValue={value}
          type='text'
          placeholder={placeholder}
          onKeyDown={onKeyDown}
          onChange={handleChange}
        />
      </InputGroup>
    </div>
  )
}
