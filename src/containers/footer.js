import React, {Component} from 'react';

const blockInlineStyle = {'display':'inline-block'};


export default class Footer extends Component {
    render() {
            return <div style={blockInlineStyle}>
                <br/><br/><br/><br/><br/>
                <p>DISCLAIMER: This website is for demonstration purposes only.  It is intended to provide a workflow of some of the key features planned for development.  To take a look at the features planned for the full product, please visit <a href="http://www.CareCrewHQ.com">www.CareCrewHQ.com</a></p>
            </div>
    }
}
