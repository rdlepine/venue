import React, { Component } from 'react'
import {AppBar, Toolbar} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import SideDrawer from './SideDrawer'


//font-family: 'Righteous', cursive;
//font-family: 'Roboto', sans-serif;

class Header extends Component {

  state = {
    drawerOpen: false,
    headerShow: false
  }

  toggleDrawer = (value) => {
    this.setState( {
      drawerOpen: value
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    
  }

  handleScroll = () => {
    if(window.scrollY > 0) {
      this.setState({
        headerShow: true
      })
    } else {
      this.setState({
        headerShow: false
      })
    }
  }

  render() {

    const {drawerOpen} = this.state
    return (
      <AppBar
          position="fixed"
          style={{
            backgroundColor: this.state.headerShow?'#2f2f2f':'transparent',
            boxShadow: 'none',
            padding: '10px 0px'
          }}
          >
          <Toolbar>
            <div className="header_logo">
              <div className="font-righteous header_log_venu">The Venue</div>
              <div className="header_logo_title">Musical Events</div>
            </div>
            <IconButton
                aria-label="Menu"
                color="inherit" 
                open={drawerOpen}
                onClick={ () =>  this.toggleDrawer(true) } >
                <MenuIcon />
            </IconButton>
            <SideDrawer
              open={drawerOpen}
              onClose={(value) => this.toggleDrawer(value)}
            />
          </Toolbar>
        </AppBar>
    )
  }
}


export default Header