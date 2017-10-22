/* @flow */
import React from 'react'

type Props = {
  message: string,
  date:    Date
}

type State = {
  text: string,
}

class Main extends React.Component<Props, State> {
  state = {
    text: 'Hello world!',
  }

  render() {
    const t = this.state.text
    const m = this.props.message
    const d = this.props.date.toString()
    return (
      <div>{t}, {m}. ({d})</div>
    )
  }
}

export default Main
