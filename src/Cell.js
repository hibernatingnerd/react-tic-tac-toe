// Importing the CSS for the board
import "./css/cell.css";
import { IconTimes, IconCircle } from './Svgs';

const Cell = ({ index, value, reset, callback }) => {

	return (
		
		<div 
			className="cell-input"
			onClick={ e => {
				e.preventDefault()
				// only fire the callback if the cell has no value set
				if( value[1] === null ){

					callback( index ) 

				}
			}}
		>	
		{ value[1] !== null &&
			<div className="cell-input-svg">
				{ value[1] === 'X' ? <IconTimes /> : <IconCircle /> }
			</div>
		}
		</div>

	)
}

export default Cell;
