import * as React from 'react'
import * as styles from './styles'

interface IState {
  pressed: boolean
}

interface IProps {}

export class ClassComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      pressed: false
    }
  }

  private handleButtonClick = () => {
    this.setState({
      pressed: true
    })
  }

  public render() {
    return (
      <button
        className={`${styles.componentButton} ${this.state.pressed ? styles.componentPressedButton : ''}`}
        onClick={this.handleButtonClick}
      />
    )
  }
}
