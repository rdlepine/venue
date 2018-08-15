import React from 'react';
import {Button} from '@material-ui/core'
import TicketIcon from '../../resources/images/icons/ticket.png'

const MyButton = (props) => {
    return (
        <div>
            <Button href={props.link}
                    variant="contained"
                    size="smal"
                    style={{
                        background: props.bck,
                        color:props.color,
                    }}
            >
              <img src={TicketIcon} className="iconImage" alt="Icon Button"  />
              {props.text}
            </Button>
        </div>
    );
};

export default MyButton;