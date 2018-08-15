import React, { Component } from 'react'
import {Fade, Slide} from 'react-reveal'
import MyButton from '../utils/MyButton'

class Discount extends Component {

  state = {
      discountStart:0,
      discountEnd:30
  }

  porcentage = () => {
      const {discountStart, discountEnd} = this.state
      if(discountStart < discountEnd) {
        this.setState( {
            discountStart: discountStart + 1,
        })
      }
  }

  componentDidUpdate() {
      setTimeout( () => {
        this.porcentage()
      },30)
  }

  render() {
  
    const {discountStart, discountEnd} = this.state

    return (
      <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade
                    onReveal={() => this.porcentage()}
                >
                    <div className="discount_porcentage">
                        <span>{discountStart}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
           
                <Slide right>
                <div className="discount_description">
                        <h3>Purchase Ticketes before Aug 1st</h3>
                        <p>Have a look at overriding with classes section and the implementation of the component for more detail.
                        </p>
                        <MyButton text="Purchase Tickets" bck="#ffa800" color="#ffffff" link="http://google.com" /> 
                    </div>
                </Slide>
            </div>
      </div>
    )
  }
}

export default  Discount 