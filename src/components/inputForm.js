import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCommitCounts } from '../redux/actions';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url:'https://github.com/facebook/react/',
            timespan:'day',
            loading: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleTimespanChange = this.handleTimespanChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {        
        this.setState({
              loading: (nextProps.tableData == null || nextProps.tableData.length === 0)
        });
    }

    handleInputChange(event) {
        this.setState({url: event.target.value});
    }

    handleTimespanChange(event) {
        this.setState({timespan: event.target.value});
    }

    handleButtonClick(event) {                
        this.setState({loading: true});
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
                { this.state.loading ? <span>Loading...</span> : null }
            </div>
        );
    }
}

InputForm.propTypes = {	
	tableData: PropTypes.array
};

function mapStateToProps(state) {	
	return {
        tableData: state.commitCounts,              
	};
}

export default connect(	mapStateToProps, { getCommitCounts })(InputForm);