import React from 'react'

function EventDisplay(props) {
    const event = props.event;

  return (
    <div className="eventLogText">
      <b className="eventLogName capitalizeName">{event.characterId.name} : </b> 
      {event.text}
    </div>
  )
}

export default EventDisplay