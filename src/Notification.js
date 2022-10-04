import "./css/notification.css";
import { useContext } from 'react';
import NotificationContext from './context/notificationContext';

const Notification = ({ callback }) => {

  const notificationCtx = useContext(NotificationContext);

    return (
        notificationCtx.notification !== null && (
        <div className="notification-overlay">
            <div className="notification-close" 
                onClick={( e ) =>{
                 e.preventDefault()
                 notificationCtx.clear()
                 callback()
                }
            }>X</div>
            <div className={ "notification " + notificationCtx.notification }>
                <div className="notification-inner">
                    <p> { notificationCtx.notificationText } </p>
                    <div className="notification-reset" 
                        onClick={( e ) =>{
                            e.preventDefault()
                            notificationCtx.clear()
                            callback()
                        }
                    }>New Game</div>
                </div>
            </div>
        </div>
        )
    );
};

export default Notification;