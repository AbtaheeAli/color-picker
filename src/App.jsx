import React, { Component } from 'react'

export class App extends Component {
  state = {
    h: Math.round(Math.random() * 360),
    s: Math.round(Math.random() * 100),
    l: Math.round(Math.random() * 100),
  }

  randomColor = () => {
    this.setState({
      h: Math.round(Math.random() * 360),
      s: Math.round(Math.random() * 100),
      l: Math.round(Math.random() * 100),
    })
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
      <body>
        <header>
          <h1>Choose Your Color!</h1>

          <div
            className="btn-group mt-2 mb-4"
            role="group"
            aria-label="actionButtons"
          ></div>

          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.min.js"
            integrity="sha256-qM7QTJSlvtPSxVRjVWNM2OfTAz/3k5ovHOKmKXuYMO4="
            crossorigin="anonymous"
          ></script>
        </header>
        <main>
          <section>
            <article
              className="colorBox"
              style={{
                backgroundColor: `hsl(${this.state.h}, ${this.state.s}%, ${this.state.l}%`,
              }}
            ></article>
            <p className="scale">{`hsl (${this.state.h}, ${this.state.s}%, ${this.state.l}%,)`}</p>
            <button onClick={this.randomColor}>Random Color</button>
          </section>
          <section>
            <article>
              <h2 className="sliderH">H</h2>
              <input
                type="range"
                min="0"
                max="360"
                value={this.state.h}
                onChange={this.handleChangeH}
              ></input>
            </article>
            <article>
              <h2 className="sliderS">S</h2>
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.s}
                onChange={this.handleChangeS}
              ></input>
            </article>
            <article>
              <h2 className="sliderL">L</h2>
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.l}
                onChange={this.handleChangeL}
              ></input>
            </article>
          </section>
        </main>
      </body>
    )
  }
}

export default App
