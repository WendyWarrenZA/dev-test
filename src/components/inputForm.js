import React from 'react';
import { connect } from 'react-redux';
import { getCommitCounts } from '../redux/actions';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url:'https://github.com/facebook/react/',
            timespan:'day'
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleTimespanChange = this.handleTimespanChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({url: event.target.value});
    }

    handleTimespanChange(event) {
        this.setState({timespan: event.target.value});
    }

    handleButtonClick(event) {        
        this.props.getCommitCounts(this.state.url, this.state.timespan);
        event.preventDefault();
    }

    render() {
        return ( 
            <div className="form-group">
                <label className="form-label">Repo URL</label>
                <input className="form-input" type="text" name="url" value={this.state.url} onChange={this.handleInputChange}/>
                <label className="form-label">Timespan</label>
                <select className="form-select" name="timespan" onChange={this.handleTimespanChange}>
                    <option value='day'>Last 24 Hours</option>
                    <option value='week'>Last Week</option>
                    <option value='month'>Last Month</option>
                </select>
                <br/><br/>
                <button className="btn" onClick={this.handleButtonClick}>Update Stats</button>
            </div>
        );
    }
}

export default connect(	null, { getCommitCounts })(InputForm);