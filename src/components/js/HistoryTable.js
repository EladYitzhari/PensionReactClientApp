import React, { Component } from 'react';
import { Table, TableHeader } from 'semantic-ui-react';
import * as mainAction from '../../store/acions/mainAction';
import {connect} from 'react-redux';
import '../css/historyTable.css'



class HistoryTable extends Component {
    state = {  }
    render() { 
        return ( 
            <table className="table historyTable" style={{textAlign:"center"}}>
                <thead>
                    <tr>
                        <th>מספר תקופה</th>
                        <th>שווי תיק</th>
                        <th>תשואה לתקופה</th>
                        <th>תשואה כוללת</th>
                        {(this.props.showMarket)?<th> שווי תיק השוק</th> : null}
                        {(this.props.showMarket)?<th>תשואת השוק לתקופה</th> : null}
                        {(this.props.showMarket)?<th>תשואת השוק כוללת</th> : null}
                    </tr>
                </thead>
                <tbody>
                    {this.props.historyTable.map(h=>{
                        return (
                            <tr>
                                <td>{h.cycleNum}</td>
                                <td>{h.portfolioVal.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>{h.periodYield}</td>
                                <td>{h.totalYield}</td>
                                {(this.props.showMarket)?<td>{h.marketPortfolioVal.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td> : null}
                                {(this.props.showMarket)?<td>{h.marketPeriodYield}</td> : null}
                                {(this.props.showMarket)?<td>{h.marketTotalYield}</td> : null}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
         );
    }
}



const mapStateToProp = state =>
{
    return {
        showMarket: state.main.showMarket,
        historyTable: state.main.historyTable
        }
}
 
const mapDispatchToProps = dispatch =>
{
    return {
        changeStage: (newStage) => dispatch(mainAction.changeStageDispach(newStage))
    }
}
export default connect(mapStateToProp,mapDispatchToProps)(HistoryTable);