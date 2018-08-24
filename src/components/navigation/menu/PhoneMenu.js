import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import Link from '../Link'
import { Link as LinkScroll } from 'react-scroll'
import React from 'react'
import MenuData from './Menu.json'
import { LinkedLeanJSLogo } from '../../logos/LeanJS'
import ContactButton from '../../buttons/ContactButton'
import './PhoneMenu.css'
import { SPACING_SMALL } from '../../../config/styles'

const Item = ({ children, ...rest }) => {
  const LinkType = scroll ? LinkScroll : Link
  const props = scroll ? { smooth: true, duration: 500, ...rest } : rest
  return <LinkType {...props}>{children}</LinkType>
}

const PhoneMenuItem = styled(Item)`
  display: block;
  padding-top: ${SPACING_SMALL};
  padding-bottom: ${SPACING_SMALL};
  color: white;
`

PhoneMenuItem.displayName = 'PhoneMenuItem'

class PhoneMenu extends React.Component {
  state = {
    isOpen: false,
  }

  closeMenu = () => {
    this.setState({ isOpen: false })
  }

  render() {
    const { isOpen } = this.state
    const { closeMenu } = this

    return (
      <Menu isOpen={isOpen}>
        <LinkedLeanJSLogo />
        {MenuData.map((item, i) => (
          <PhoneMenuItem onClick={closeMenu} key={i} to={item.to}>
            {item.text}
          </PhoneMenuItem>
        ))}
        <PhoneMenuItem
          onClick={closeMenu}
          key="phonemenu-contact"
          to="contact"
          scroll
        >
          Contact us
        </PhoneMenuItem>
      </Menu>
    )
  }
}

export default PhoneMenu
