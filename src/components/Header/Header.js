import React, { useState } from 'react'

import Logo from './Logo'
import Nav from './Nav'
import Account from './Account'
import Drawer from './Drawer'
import { HeaderWrap, Animation, StyledRow } from './style'

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <HeaderWrap
          fluid
        >
          <div>
            <StyledRow>
              <Logo open={open} setOpen={setOpen} />
              <Nav />
              <Account open={open} setOpen={setOpen} />
            </StyledRow>
          </div>
        </HeaderWrap>

        <Drawer open={open} setOpen={setOpen} />
      </>
    )
}

export default Header
