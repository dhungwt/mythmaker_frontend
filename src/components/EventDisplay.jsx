import React from 'react'

function EventDisplay(props) {
    const event = props.event;

  return (
    <div>{event.characterId.name}: {event.text}</div>
  )
}

export default EventDisplay