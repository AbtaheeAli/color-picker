import React, { Component } from 'react'

export class App extends Component {
  state = {
    h: Math.round(Math.random() * 360),
    s: Math.round(Math.random() * 100),
    l: Math.round(Math.random() * 100),
    a: 1,
  }

  randomColor = () => {
    this.setState({
      h: Math.round(Math.random() * 360),
      s: Math.round(Math.random() * 100),
      l: Math.round(Math.random() * 100),
    })
  }

  handleChangeH = event => {
    this.setState({ h: event.target.value })
  }

  handleChangeS = event => {
    this.setState({ s: event.target.value })
  }

  handleChangeL = event => {
    this.setState({ l: event.target.value })
  }

  handleChangeA = event => {
    this.setState({ a: event.target.value })
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
                backgroundColor: `hsla(${this.state.h}, ${this.state.s}%, ${this.state.l}%, ${this.state.a}`,
              }}
            ></article>
            <p className="scale">{`hsla (${this.state.h}, ${this.state.s}%, ${this.state.l}%, ${this.state.a})`}</p>
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
            <article>
              <h2 className="sliderA">A</h2>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={this.state.a}
                onChange={this.handleChangeA}
              ></input>
            </article>
          </section>
        </main>
        <footer>
          <h5>Created By: Abtahee Ali</h5>
        </footer>
      </body>
    )
  }
}

export default App
