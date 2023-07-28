import React from 'react'
import { Fragment } from 'react';

function Notification(props) {
    const msg = props.msg;

  return (
    <Fragment>
        {msg}
    </Fragment>
  )
}

export default Notification