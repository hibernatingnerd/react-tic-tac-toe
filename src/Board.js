import "./css/board.css"
import { useState, useEffect, useContext } from "react"
import Cell from './Cell'
import NotificationContext from './context/notificationContext'
import Notification from './Notification';

const Board = () => {
    
    const notificationCtx = useContext(NotificationContext);

    const initialState =  {
        board : {
            0 : null,
            1 : null,
            2 : null,
            3 : null,
            4 : null,
            5 : null,
            6 : null,
            7 : null,
            8 : null
        },
        turn : 0
    }

    const [ board, setBoard ] = useState(initialState.board)

    const [ turn, setTurn ] = useState(initialState.turn)

    const resetBoard = () => {

        setBoard( initialState.board )
        setTurn( initialState.turn )

    }

    useEffect(() => {

        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
  
        for (let i of winningConditions) {
   
            let checker = [board[ i[0]], board[ i[1]], board[ i[2]]]
       
            if( checker.every( ( value, i, array ) => value === array[0] && value !== null ) ){

               notificationCtx.success( checker + " won!", resetBoard );
               
            }

        }

    },
    [ board ])

	return (
        <div className="board">
            	<Notification 
                {
                    ...{
                        callback : resetBoard
                    }
                }
                />
            { Object.entries( board ).map( ( value, index ) => {
          
               return <div className={ "cell cell-" + index } key={ index }>
                    <Cell
                        {
                            ...{
                                index,
                                turn,
                                value,
                                board,
                                callback : ( index ) => {
                              
                                    let result = turn % 2 === 0 ? 'X' : 'O'
                           
                                    setTurn( ( turn + 1 ) )

                                    setBoard(
                                        {
                                            ...board,
                                            [ index ] : result
                                        }
                                    )

                                    return true
                                }
                            }
                        }
                    ></Cell>
                </div>
            }) }
            <button className="button button-reset" onClick={ e => {
					e.preventDefault()
					resetBoard()
				}
			}>Reset</button>
        </div>
	)
}

export default Board;
