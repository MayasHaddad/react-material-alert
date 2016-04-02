import React from 'react'
import Natures from './Natures'
import CloseButton from '../images/ic_close_18px.svg'
import '../css/main.css'

export default class Alert extends React.Component {

  constructor (props) {
    super(props)
    this.state = { sShow: true }
    this.dismissAlert = this.dismissAlert.bind(this)
  }
  
  static propTypes = {
    alert: React.PropTypes.shape({
        nature: React.PropTypes.number.isRequired,
        content: React.PropTypes.func.isRequired
    })
  }

  dismissAlert () {
    this.setState({sShow: false})
    if (this.props.closeCallback) {
      this.props.closeCallback()
    }
  }

  getAlertStyle () {
    const alertStyle = {
      margin: 5 + 'px',
      position: 'relative',
      minHeight: 50 + 'px',
      display: 'flex',
      justifyContent: 'center', /* align horizontal */
      alignItems: 'center', /* align vertical */
      fontFamily: 'roboto'
    }

    const alertWarning = {...alertStyle, backgroundColor: '#FDD835'}
    const alertFailure = {...alertStyle, backgroundColor: '#F44336'}
    const alertInfo = {...alertStyle, backgroundColor: '#BBDEFB'}
    const alertSuccess = {...alertStyle, backgroundColor: '#69F0AE'}

    switch (this.props.alert.nature) {
      case Natures.WARNING:
        return alertWarning
      case Natures.FAILURE:
        return alertFailure
      case Natures.SUCCESS:
        return alertSuccess
      case Natures.INFO:
        return alertInfo
    }
  }

  getCloseBtnStyle () {
    return {
      position: 'absolute',
      right: 0 + 'px',
      top: 0 + 'px',
      cursor: 'pointer'
    }
  }

  render () {
    if (this.state.sShow === false) {
      return <div />
    }
    const Content = this.props.alert.content
    return <div style={this.getAlertStyle()} role='alert' id={this.props.id} >
      <img src={CloseButton} onClick={this.dismissAlert} style={this.getCloseBtnStyle()} />
        <Content />
    </div>
  }
}
