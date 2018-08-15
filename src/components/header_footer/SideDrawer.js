import React from 'react';
import {Drawer, List, ListItem} from '@material-ui/core'

const SideDrawer = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={(value) => props.onClose(false)  }
            >
           <List>
              <ListItem button onClick={() => console.log('Featured')} >
                Event Starts In
            </ListItem>
              <ListItem button onClick={() => console.log('Featured')} >
                Venue INFO
            </ListItem>
            <ListItem button onClick={() => console.log('Featured')} >
               Highlights
            </ListItem>
            <ListItem button onClick={() => console.log('Featured')} >
               Pricing
            </ListItem>
            <ListItem button onClick={() => console.log('Featured')} >
               Location
            </ListItem>
           </List>
        </Drawer>
    );
};

export default SideDrawer;