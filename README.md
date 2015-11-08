![dependencies-image-url]

# README #

react-material-alert is a lightweight library for displaying UI alerts in the google material design way.

[Demo](http://mayashaddad.github.io/react-material-alert-demo/)

[Demo source](https://github.com/MayasHaddad/react-material-alert-demo)

### Prerequisites ###
In order to have the library up and running, your project must have webpack and some loaders installed.

Please refer to the demo which has the minimum necessary webpack loaders for using react-material-alert.

### Installation ###

`$> npm i react-material-alert`
### Usage ###

1. require Alert tag:
`var Alert = require('react-material-alert').Alert;`

2. require Nature types:
`var Natures = require('react-material-alert').Natures;`

3. render tag in jsx:
`<Alert alert={myAlert} id={"justLikeHtmlId"} />`

The `myAlert` variable is a json that you would have declared like so:

`var myAlert = {nature:myNature, content:"this is an alert!"}; `

The `myNature` will have the value of the nature of the alert you want to display, you have the choice between:

* `Natures.SUCCESS`
* `Natures.WARNING`
* `Natures.FAILURE`
* `Natures.INFO`

### Basic example ###


```
var React = require('react');

var Alert = require('react-material-alert').Alert;

var Natures = require('react-material-alert').Natures;

var sayTheyHitClose = function() {
    console.log('they hit the close button captain!');
};

var App = React.createClass({
    render: function() {
        return <div>
                <Alert 
                  alert= {{
                    nature: Natures.SUCCESS,
                    content: "it is a <strong>success</strong>!"
                  }}
                  id={"alert_1"}
                  closeCallback={sayTheyHitClose} />
            </div>;
    }
});
React.render(<App />,
             document.getElementById('app'));
```

### Browsers ###

*react-material-alert* uses [flexbox](http://www.w3.org/TR/css-flexbox-1/)

### Changelog ###

- Cursor now is pointer when hovering over close button
- Click on close button callback added through props

[dependencies-image-url]: https://david-dm.org/MayasHaddad/react-material-alert.svg
