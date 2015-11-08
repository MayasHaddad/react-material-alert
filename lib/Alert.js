var React = require('react');
var assign = require('lodash.assign');
var Natures = require('./Natures');
var CloseButton = require('../images/ic_close_18px.svg');
require('../css/main.css');

var alertStyle = {
    margin: 5 + 'px',
    position: 'relative',
    minHeight: 50 + 'px',
    display: 'flex',
    justifyContent: 'center', /* align horizontal */
    alignItems: 'center', /* align vertical */
    fontFamily: 'roboto'
};

var alertWarning = assign({}, alertStyle, {backgroundColor: '#FDD835'});
var alertFailure = assign({}, alertStyle, {backgroundColor: '#F44336'});
var alertInfo = assign({}, alertStyle, {backgroundColor: '#BBDEFB'});
var alertSuccess = assign({}, alertStyle, {backgroundColor: '#69F0AE'});


var alertCloseButton = {
    position: 'absolute',
    right: 0 + 'px',
    top: 0 + 'px',
    cursor: 'pointer'
};

module.exports = React.createClass({

    getInitialState: function() {
        return {sShow: true};
    },
    
    dismissAlert: function() {
        this.setState({sShow: false});
        if(this.props.closeCallback) {
            this.props.closeCallback();
        }
    },
    
    render: function() {
        
        if(this.state.sShow === false) {
            return (React.createElement('div'));
        }
        var alertType;
        switch(this.props.alert.nature) {
            case Natures.WARNING:
                    alertType = alertWarning;
                break;
                case Natures.FAILURE:
                    alertType = alertFailure;
                break;
                case Natures.SUCCESS:
                    alertType = alertSuccess;
                break;
                case Natures.INFO:
                    alertType = alertInfo;
                break;
        }
        if(alertType !== undefined) {
            var closeElement = React.createElement('img', {onClick: this.dismissAlert, src:CloseButton, style:alertCloseButton});
            var alertBox = React.createElement('span', {dangerouslySetInnerHTML:{__html: this.props.alert.content}, }); 
            
            return React.createElement('div', {style:alertType, role:"alert", id:this.props.id}, alertBox, closeElement);
            
        }
        
        return (React.createElement('div'));
    }
});