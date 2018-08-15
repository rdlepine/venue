import React, { Component } from 'react'
import Slide from 'react-reveal/Slide'

class TimeUntil extends Component {

  componentDidMount() {
    setInterval( () => this.getTimeUntil(this.state.deadline),1000)
  }

  getTimeUntil = (deadline) => {
    const time = (Date.parse(deadline) - Date.parse(new Date()))
    if(time < 0) {
        console.log('Date Passed')
    } else {
        const seconds = Math.floor((time/1000) % 60)
        const minutes = Math.floor((time/1000/60) % 60)
        const hours = Math.floor((time/(1000*60*60))%24)
        const days = Math.floor(time/(1000*60*60*24))
        this.setState( {
            seconds:seconds,
            minutes:minutes,
            days:days,
            hours:hours,
        })
    }
  }

  state = {
      deadline: 'Dec, 16, 2018',
      days:0,
      hours:0,
      minutes:0,
      seconds:0
  }

  render() {

    const {days,hours,minutes,seconds} = this.state

    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event starts in
                </div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">
                            {days}
                        </div>
                        <div className="countdown_tag">
                            Days
                        </div>
                    </div>
                <div className="countdown_item">
                    <div className="countdown_time">
                       {hours}
                    </div>
                    <div className="countdown_tag">
                        Hours
                    </div>
                </div>
                <div className="countdown_item">
                    <div className="countdown_time">
                        {minutes}
                    </div>
                    <div className="countdown_tag">
                        Minutes
                    </div>
                </div>
                <div className="countdown_item">
                    <div className="countdown_time">
                        {seconds}
                    </div>
                    <div className="countdown_tag">
                       Seconds
                    </div>
                </div>
            </div>    
        </div>
      </Slide>
    )
  }
}

export default TimeUntil
