import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../css/simulation.css'
import {Line} from 'react-chartjs-2';
import * as mainAction from '../../store/acions/mainAction'
import { Table,Input, Button } from 'semantic-ui-react';
import HistoryTable from './HistoryTable';
import * as actionTypes from "../../store/acions/actionTypes";
import * as marketData from '../Functions/MarketData'

class Simulation extends Component {
    state = { 
        isMobile:(typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1),
        cycleNum:0
     }


    newCycle = (risk) =>{
        let newCycleNum = this.state.cycleNum+1;
        this.setState({cycleNum:newCycleNum});
        this.props.increaseChartLable(newCycleNum);
        let lastCycleHistory = this.props.historyTable[this.props.historyTable.length-1];
        let newYield = this.generateYield(risk);
        let portfolioVal = Math.round((lastCycleHistory.portfolioVal+1000)*(1+newYield/100));
        let totalYield = lastCycleHistory.totalYield+newYield;
        let newMarketData = marketData.marketDataArray[newCycleNum-1];
        let cycle={
                cycleNum:newCycleNum,
                portfolioVal:portfolioVal,
                periodYield:newYield,
                totalYield:totalYield,
                risk:risk,
                time:new Date(),
                ip:this.props.ip,
                marketPortfolioVal:newMarketData.marketPortfolioVal,
                marketPeriodYield:newMarketData.marketPeriodYield,
                marketTotalYield:newMarketData.marketTotalYield
                
        };
        this.props.addToHistoryTable(cycle);
        this.props.insertNewChartData(portfolioVal);
        this.props.insertNewCycleToDb(this.props.userId,cycle);
        this.props.insertNewMarketChartData(cycle.marketPortfolioVal);
    }

    generateYield = (risk)=>{
        if(risk === "high"){
            return Math.round(Math.random()*22-10);
        }else if(risk === "mediumHigh"){
            return  Math.round(Math.random()*14-6);
        }else if(risk === "mediumLow"){
            return  Math.round(Math.random()*10-4);
        }else if(risk === "low"){
            return  Math.round(Math.random()*6-2);
        }
    }
    render() { 

        



        return ( 
            <div id="mainDivSimulation">
             
             <div id="simulationHeader">
               אנא בחר/י את מסלול ההשקעה בתקופה {this.state.cycleNum+1} 
             </div>

             <div id="simulationButtonsSection">
             <Button size={(this.state.isMobile)?"tiny":"big"} 
                    style={{marginRight:"2%",marginTop:"1%"}} color='teal' onClick={()=>this.newCycle("high")}> מסלול בסיכון גבוה </Button>
                    
            <br></br><Button onClick={()=>this.newCycle("mediumHigh")} size={(this.state.isMobile)?"tiny":"big"} style={{marginRight:"2%",marginTop:"1%"}} color='blue'> מסלול בסיכו בינוי-גבוה </Button>
            <br></br><Button onClick={()=>this.newCycle("mediumLow")} size={(this.state.isMobile)?"tiny":"big"} style={{marginRight:"2%",marginTop:"1%"}} color='violet'> מסלול בסיכון בינוני-נמוך </Button>
            <br></br><Button onClick={()=>this.newCycle("low")} size={(this.state.isMobile)?"tiny":"big"} style={{marginRight:"2%",marginTop:"1%"}} color='purple'> מסלול בסיכון נמוך </Button>
           
             </div>
                
                
                <div id="simulationChartDiv">
                <Line  width={(this.state.isMobile)?"300":"1000"} 
                height={(this.state.isMobile)?"300":"500"}
                        options={{
                            // padding:"0px",
                            responsive:false,
                            maintainAspectRatio:false,
                            defaultFontSize:"30px",
                            width:"400",
                            height:"400",
                            hover:true,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        suggestedMin: 0
                                    }
                                  }]
                               },
                            legend:{
                                display:true,
                                position:'right'
                            }}}
                    
            data={this.props.chartData.data }/>
            </div>
            <HistoryTable></HistoryTable>


            </div>
         );
    }
}



const mapStateToProp = state =>
{
    return {
        chartData: state.main.chartData,
        historyTable: state.main.historyTable,
        userId:state.main.userId,
        ip:state.main.ip
        }
}
 
const mapDispatchToProps = dispatch =>
{
    return {
        increaseChartLable: (newCycleNum) => dispatch({type:actionTypes.INCREASE_CHART_LABEL,val:newCycleNum}),
        addToHistoryTable: (newCycle) => dispatch({type:actionTypes.INSERT_CYCLE_TO_HISTORY,val:newCycle}),
        insertNewChartData: (newPortfolioVal) => dispatch({type:actionTypes.INSERT_NEW_CHART_DATA,val:newPortfolioVal}),
        insertNewMarketChartData: (newMarketPortfolioVal) => dispatch({type:actionTypes.INSERT_NEW_CHART_MARKET_DATA,val:newMarketPortfolioVal}),
        insertNewCycleToDb: (userId,newCycle)=>{dispatch(mainAction.insertNewCycleToDb(userId,newCycle))}
    }
}
export default connect(mapStateToProp,mapDispatchToProps)(Simulation);