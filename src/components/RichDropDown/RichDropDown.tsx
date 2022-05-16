import { ReactNode, CSSProperties, useState } from 'react'
import { Button } from 'react-bootstrap'

import './RichDropDown.css'

export interface RichDropDownProps {
  children: ReactNode
  caption: ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | undefined
  className?: string
  style?: CSSProperties
}

export const RichDropDown = ({
  children,
  caption,
  variant = 'light',
  className = '',
  style = {}
}: RichDropDownProps) => {
  const [show, setShow] = useState(false)

  const onToggleClick = (e: any) => {
    setShow(!show)
  }

  return (
    <div className={`rich-popup ${className}`}>
      <Button
        variant={ variant }
        className='btn-popup'
        style={ style }
        onClick={ onToggleClick }
      >
        <span style={{ marginRight: '0.5rem' }}>
          { caption }
        </span>
      </Button>
      <div
        className='popup-content'
        style={{
          display: show ? 'block' : 'none'
        }}
      >
        { children }
      </div>
    </div>
  )
}
