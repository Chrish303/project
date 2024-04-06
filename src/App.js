import { useState } from 'react';
import './App.css';

function App() {

  const[count,setCount]=useState(1);
  const[winner,setWinner]=useState('');
  const[char,setChar]=useState('x');
  const [matrix, setMatrix] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);



  const getBGclass=(value)=>{
    if(value==='x')return 'yellow'
    if(value==='o')return 'orange'

    return ''
  }

  const checkwinner=()=>{
    // check row winner
    if(matrix[0][0] && matrix[0][0] === matrix[0][1] && matrix[0][1] === matrix[0][2]){
      setWinner(matrix[0][0] + '  is the winner')
    }
    if( matrix[1][0] && matrix[1][0] === matrix[1][1] && matrix[1][1] === matrix[1][2]){
      setWinner(matrix[1][0] + '  is the winner')
    }
    if(matrix[2][0] && matrix[2][0] === matrix[2][1] && matrix[2][1] === matrix[2][2]){
      setWinner(matrix[2][0] + ' is the winner')
    }

    // check col winner
    if(matrix[0][0] && matrix[0][0] === matrix[1][0] && matrix[1][0] === matrix[2][0]){
      setWinner(matrix[2][0] + ' is the winner')
    }
    if(matrix[0][1] && matrix[0][1] === matrix[1][1] && matrix[1][1] === matrix[2][1]){
      setWinner(matrix[2][1] + ' is the winner')
    }
    if(matrix[0][2] && matrix[0][2] === matrix[1][2] && matrix[1][2] === matrix[2][2]){
      setWinner(matrix[2][2] + 'is the winner')
    }
    // cheeck diogonal winner
    if(matrix[0][2] && matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]){
      setWinner(matrix[2][0] + 'is the winner')
    }
    if (count === 9){
      setWinner("Match is Draw")
    }
  }

  const handleClick=(r,c)=>{
    if(matrix[r][c]) return ''
    const tmpmMatrix=[...matrix];
    tmpmMatrix[r][c]=char;
    setMatrix(tmpmMatrix);
    setChar(char === 'x' ? 'o' : 'x');
    setCount(count + 1);
    checkwinner();
  }

  return (
    <div className="App">
      <div className="header aligncenter">TIC TAC TOE</div>
      <div className="aligncenter board">
        {!winner &&<p className='tittle'> {char} your turn</p>}
        <div className='gameboard'>
             {winner ||
            matrix.map((row, rindex) => (
              <div className='row'>
                {
                  row.map((cell, cindex) => (
                    <div onClick={()=>handleClick(rindex,cindex)}
                    className={`cell aligncenter ${getBGclass(matrix[rindex][cindex])}`}>{matrix[rindex][cindex]}</div>
                  ))
                }
              </div>
            ))
          }
        </div>
        <button  className="button" onClick={()=>{
          setWinner('');
          setMatrix([
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
          ]);
        }}>Restart</button>
      </div>
    </div>
  );
}


export default App;
