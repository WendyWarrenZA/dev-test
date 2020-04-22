import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

class ResultsGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasData: false
        }        
    }

    componentWillReceiveProps(nextProps) {        
        this.setState({
              hasData: (nextProps.tableData != null && nextProps.tableData.length > 0)
        });
    }

    render() {        
        const data = (this.props.tableData != null && this.props.tableData.length > 0) 
            ? this.props.tableData.map((d) => ({user:d[0], count:d[1]})) 
            : null;
        //const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
        return ( 
            <div className="graph">
            { this.state.hasData ? 
                <BarChart width={800} height={400} data={data}>
                    <Bar barSize={30} dataKey="count" fill="#8884d8"/>
                    <XAxis dataKey="user"/>                    
                    <YAxis />
                    <Tooltip cursor={{fill: 'transparent'}}/>
                </BarChart>
            : null }
            </div>
        );
    }
}

ResultsGraph.propTypes = {	
	tableData: PropTypes.array
};

function mapStateToProps(state) {	    
	return {
		tableData: state.commitCounts
	};
}

export default connect(mapStateToProps)(ResultsGraph);