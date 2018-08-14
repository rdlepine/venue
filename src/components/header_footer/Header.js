import React, { Component } from 'react'
import {AppBar, Toolbar} from '@material-ui/core'
import MenuIcon from '@material-ui/core/Menu'
import IconButton from '@material-ui/core/IconButton'

//font-family: 'Righteous', cursive;
//font-family: 'Roboto', sans-serif;

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: '#2f2f2f',
            boxShadow: 'none',
            padding: '10px 0'
          }}
          >
          <Toolbar>
            <div className="header_logo">
              <div className="font-righteous header_log_venu">
                The Venue
              </div>
              <div className="header_logo_title">
                Musical Events
              </div>
            </div>
            <IconButton>
              <MenuIcon>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}


export default Header