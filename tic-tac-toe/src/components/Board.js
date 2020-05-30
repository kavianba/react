import React from 'react';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cell: Array(9).fill('0'),
      currentPlayer: 'X',
      playerText: 'Next Player: '
    }
  }


  renderSquare() {
    return this.state.cell.map((item, index) => {
      return(
        <div className="square" onClick={() => { this.onCellClick(index) }} key={index}>
          {item !== '0' ? item : ''}
        </div>
      );
    });
  }

  onCellClick(index) {
    let nextPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
    let updatedCell = [...this.state.cell];
    if (updatedCell[index] === '0') {
      updatedCell[index] = this.state.currentPlayer;

      this.setState({
        cell: updatedCell,
        currentPlayer: nextPlayer
      });
      this.calculateGame(updatedCell);
    }
  }

  calculateGame(cellData) {
    let winner = this.calculateWinner(cellData);
    let emptyCells = cellData.filter((item) => (item === '0'));

    if (winner) {
      alert(winner + ' is winner');
      this.setState({
        playerText: 'Winner: ',
        currentPlayer: winner
      })
    } else if(emptyCells.length < 1) {
      alert('Game over');
    }
  }

  calculateWinner(cellData) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cellData[a] !== '0' && cellData[a] === cellData[b] && cellData[a] === cellData[c]) {
        return cellData[a];
      }
    }
    return null;
  }

  onReplayClick = () => {
    this.setState({
      cell: Array(9).fill('0'),
      currentPlayer: 'X',
      playerText: 'Next Player: '
    });
  }

  render () {
    return (
      <div>
        <h3>Tic Tac Toe</h3>

        <div className="game">
          <div className="board">
            {this.renderSquare()}
          </div>
        </div>
        <br/>
        <div>{this.state.playerText}{this.state.currentPlayer}</div>
        <br/>
        <div>
          <button onClick={this.onReplayClick}>Replay</button>
        </div>
      </div>
    )
  }
}

export default Board;