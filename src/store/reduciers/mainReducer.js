import * as actionTypes from '../acions/actionTypes'

const initialState = {
    stage:"opening",
    userId: null,
    ip:null,
    version:null,
    showMarket:false,
    historyTable:[{
                cycleNum:0,
                portfolioVal:0,
                periodYield:0,
                totalYield:0,
                marketPortfolioVal:0,
                marketPeriodYield:0,
                marketTotalYield:0
        }],
    chartData:{
        cycleNum:0,
        
        totalPortfolioAssets:0,
        totalMarketAssets:0,
        totalPortfolioYield:0,
        totalMarketYield:0,
        data:{
            labels:[1],
            datasets:[{
                label:"התיק שלך",
                borderColor:'green',
                data:[1000]
            },{
                label:"תיק השוק",
                borderColor:'orange',
                data:[1000]
            }]
            }
    }
}


const reducer = (state = initialState ,action) => {
    switch(action.type){
        case actionTypes.INSERT_NEW_USER:
        {
            return {
               ...state,
               userId:action.val
               
            }
        }  
        case actionTypes.GET_USER_IP:
            {
                return {
                   ...state,
                   ip:action.val
                   
                }
            }
        case actionTypes.CHANGE_STAGE:
            {
                return {
                   ...state,
                   stage:action.val
                   
                }
            }
        case actionTypes.UPDATE_VERSION_NUMBER:
            {
                let showMarket = false;
                if(action.val <3)
                {
                    showMarket = true;
                }
                return {
                    ...state,
                    version:action.val,
                    showMarket:showMarket
                    
            }
        }   
        case actionTypes.INCREASE_CHART_LABEL:
            {
                let newLabels = [...state.chartData.data.labels];
                newLabels.push(action.val);
                let newChartData = {...state.chartData};
                newChartData.data.labels = newLabels;
                return {
                    ...state,
                    chartData:newChartData
                    
            }
        }  
        case actionTypes.INSERT_CYCLE_TO_HISTORY:
            {
                let newHistory = [...state.historyTable];
                newHistory.push(action.val);
                return {
                    ...state,
                    historyTable:newHistory
                    
            }
        }  
        case actionTypes.INSERT_NEW_CHART_DATA:
            {
                let newChartDataSet = [...state.chartData.data.datasets[0].data];
                newChartDataSet.push(action.val);
                let newChartData = {...state.chartData};
                newChartData.data.datasets[0].data = newChartDataSet;
                return {
                    ...state,
                    chartData:newChartData
                    
            }
        } 
        case actionTypes.INSERT_NEW_CHART_MARKET_DATA:
            {
                let newChartDataSet = [...state.chartData.data.datasets[1].data];
                newChartDataSet.push(action.val);
                let newChartData = {...state.chartData};
                newChartData.data.datasets[1].data = newChartDataSet;
                return {
                    ...state,
                    chartData:newChartData
                    
            }
        } 
    }
    
    return state;
}


export default reducer;