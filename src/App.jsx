import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'

export class App extends Component {
  state = {
    h: 0,
    s: 0,
    l: 0,
  }
  handleChangeH = event => {
    const colorThatIsChanging = event.target
    const valueOfColorChanging = parseInt(colorThatIsChanging.value)

    this.setState({ h: valueOfColorChanging })
  }

  handleChangeS = event => {
    const colorThatIsChanging = event.target
    const valueOfColorChanging = parseInt(colorThatIsChanging.value)

    this.setState({ s: valueOfColorChanging })
  }

  handleChangeL = event => {
    const colorThatIsChanging = event.target
    const valueOfColorChanging = parseInt(colorThatIsChanging.value)

    this.setState({ l: valueOfColorChanging })
  }

  render() {
    return (
      <main>
        <section>
          <h1>Choose Your Color!</h1>
        </section>
        <section>
          <article>
            <h2>Hue</h2>
            <input
              type="range"
              min="0"
              max="360"
              value={this.state.h}
              onChange={this.handleChangeH}
            ></input>
          </article>
          <article>
            <h2>Saturation</h2>
            <input
              type="range"
              min="0"
              max="360"
              value={this.state.s}
              onChange={this.handleChangeS}
            ></input>
          </article>
          <article>
            <h2>Lightness</h2>
            <input
              type="range"
              min="0"
              max="360"
              value={this.state.l}
              onChange={this.handleChangeL}
            ></input>
          </article>
        </section>
      </main>
    )
  }
}

export default App
