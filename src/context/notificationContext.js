import { createContext, useState } from 'react';

const NotificationContext = createContext({
  notification: null,
  notificationText: null,
  success: () => {},
  error: () => {},
})

const states = {
  success: 'success',
  error: 'error',
}

const NotificationProvider = ( props ) => {
  const [notification, setNotification] = useState(null);
  const [notificationText, setNotificationText] = useState(null);
  
  
  const success = ( text ) => {
    window.scroll( 0, 0 );
    setNotificationText( text );
    setNotification( states.success );
  }

  const error = ( text ) => {
    window.scroll( 0, 0 );
    setNotificationText( text) ;
    setNotification( states.success );
  }

  const clear = () => {
    setNotificationText( null );
    setNotification( null );
  }
    
  return (
    <NotificationContext.Provider
      value={{
        success, error, clear, notification, notificationText,
      }}
    >
      { props.children }
    </NotificationContext.Provider>
  )
}

export { NotificationProvider }
export default NotificationContext