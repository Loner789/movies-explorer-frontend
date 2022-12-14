// IMPORTS:
import './Message.css';
import React from 'react';

// MESSAGE COMPONENT:
function Message(props) {
    // Constants:
    const {message} = props;

  return ( 
    <p className='message'>
    {message}
    </p>
   );
}

export default Message;