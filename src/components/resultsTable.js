import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ResultsTable extends React.Component {
    render() {        
        const items = (this.props.tableData != null && this.props.tableData.length > 0) 
            ? this.props.tableData.map((d) => <tr className="active" key={d[0]}><td>{d[0]}</td><td>{d[1]}</td></tr>) 
            : <tr></tr>;
        return (
            <div>  
                {items != null && items.length > 0 && (         
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Username</th>
                            <th>Commit Cnt</th>
                        </tr>
                        </thead>
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                )}
            </div>                
        );
    }
}

ResultsTable.propTypes = {	
	tableData: PropTypes.array
};

function mapStateToProps(state) {	    
	return {
		tableData: state.commitCounts
	};
}

export default connect(mapStateToProps)(ResultsTable);