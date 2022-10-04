// Importing the required components
import Board from './Board';

// Importing the CSS File
import "./css/App.css";

import { NotificationProvider } from './context/notificationContext';
 
function App() {

	return (
		<NotificationProvider>
		<div className="App">
			<Board />
		</div>
		</NotificationProvider>
	);
}

export default App;
