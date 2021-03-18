import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      average: 0,
      positive: 0,
      sum: 0
    }
  }

  incrementGood = () => this.setState({
    sum: this.state.sum + 1,
    good: this.state.good + 1
  },
    this.updateValues)

  incrementNeutral = () => this.setState({
    sum: this.state.sum + 1,
    neutral: this.state.neutral + 1
  },
    this.updateValues)

  incrementBad = () => this.setState({
    sum: this.state.sum + 1,
    bad: this.state.bad + 1
  },
    this.updateValues)

  updateValues = () => this.setState({
    average: ((this.state.good - this.state.bad) / this.state.sum).toFixed(1),
    positive: (this.state.good / this.state.sum * 100).toFixed(1)
  })

  render() {
    if (this.state.sum === 0) {
      return (
        <div>
          <h1>anna palautetta</h1>
          <div>
            <Button
              handleClick={this.incrementGood}
              text="hyvä"
            />
            <Button
              handleClick={this.incrementNeutral}
              text="neutraali"
            />
            <Button
              handleClick={this.incrementBad}
              text="huono"
            />
          </div>
          <h1>statistiikka</h1>
          <p>ei yhtään palautetta annettu</p>
        </div>
      )
    }
    else {
      return (
        <div>
          <h1>anna palautetta</h1>
          <div>
            <Button
              handleClick={this.incrementGood}
              text="hyvä"
            />
            <Button
              handleClick={this.incrementNeutral}
              text="neutraali"
            />
            <Button
              handleClick={this.incrementBad}
              text="huono"
            />
          </div>
          <Statistics statistics={this.state} />
        </div>
      )
    }
  }
}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => (
  <div>
    <h1>statistiikka</h1>
    <table>
      <tbody>
        <tr>
          <td>hyvä</td>
          <td>{props.statistics.good}</td>
        </tr>
        <tr>
          <td>neutraali</td>
          <td>{props.statistics.neutral}</td>
        </tr>
        <tr>
          <td>huono</td>
          <td>{props.statistics.bad}</td>
        </tr>
        <tr>
          <td>keskiarvo</td>
          <td>{props.statistics.average}</td>
        </tr>
        <tr>
          <td>positiivisia</td>
          <td>{props.statistics.positive} %</td>
        </tr>
      </tbody>
    </table>
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))