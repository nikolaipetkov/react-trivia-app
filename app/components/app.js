import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { add } from "../actions/add";

import './app.css';
import '../index.css'

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            platformType: ''
        };

        this.addPlatform = this.addPlatform.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    

    componentDidMount() {
        console.warn('props :', this.props)
    }

    componentDidUpdate() {
        console.warn('update :', this.props)
    }

    addPlatform(){
    	const { platformType } = this.state;

    	platformType && this.props.add({ platform: platformType });

    	this.setState({
    		platformType: ''
    	})
    }

    handleChange(event){
    	this.setState({
    		platformType: event.target.value
    	})
    }


    render() {
    	const { platformType } = this.state;
    	const { whatever } = this.props;
        return (
        	<div>
				<div className="test">
					{
						whatever && whatever.map((entry, index) => <span className="test" key={index}>{entry.platform + ' '}</span>)
					}
	            </div>
                <div className="ok"> greeeeeen</div>
	            <input  
		            type="text"
		            className="form-control"
		            id="platformType"
		            value={platformType}
		            onChange={this.handleChange}
		        />
	            <button onClick={this.addPlatform}>add platform</button>
        	</div>
        );
    }
}


export default connect(
    state => ({
        whatever: state.root,
    }),
    dispatch => {
        return {
            add: payload => dispatch(add(payload))
        };
    },
)(App);
