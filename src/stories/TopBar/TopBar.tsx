import { ReactNode } from 'react'
import { Col, Container, Nav, Navbar } from 'react-bootstrap'
import { IconType } from 'react-icons/lib'

export interface TopBarProps {
  brand: string
  showNav?: boolean,
  children: ReactNode,
  variant?: 'dark' | 'light'
  links?: {
    title: string,
    Icon: IconType,
    href: string
  }[]
}

export const TopBar = ({ brand, showNav = true, links, variant = 'light' }: TopBarProps) => {
  return (
    <Navbar variant={variant} style={{ backgroundColor: variant === 'light' ? 'var(--bs-light)' : 'var(--bs-dark)' }}>
      <Container fluid={true} className='no-gutter'>
        <Col md={2}>
          <Navbar.Brand>{brand}</Navbar.Brand>
        </Col>
        {
          showNav &&
          (
            <Nav className="justify-content-end">
              {
                links && links.map(({ title, Icon, href }) => (
                  <Nav.Link key={href} href={href}>
                    <Icon />
                    {title}
                  </Nav.Link>
                ))
              }
            </Nav>
          )
        }
      </Container>
    </Navbar>
  )
}
