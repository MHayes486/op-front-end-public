import React from 'react';

import Event from './Event';
import classes from './EventList.module.css';

const EventList = (props) => {

  return (
    <ul className={classes['event-list']}>
      {props.event.map((event) => (
        <Event
          key={event.id}
          eventName={event.eventName}
          eventAddress={event.eventAddress}
          image={event.image}          
        />
      ))}
    </ul>
  );
};

export default EventList;