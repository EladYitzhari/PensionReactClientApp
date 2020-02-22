import React, { Component } from 'react';
import Opening from '../../components/js/Opening';
import Questionnaire from '../../components/js/Questionnaire';
import * as mainAction from '../../store/acions/mainAction'
import {connect} from 'react-redux';
import Explanation from '../../components/js/Explanation'
import Simulation from '../../components/js/Simulation'
class MainPage extends Component {
    state = { 
        stage:this.props.stage
     }


     componentDidMount=()=>{
         setTimeout(() => {
             this.props.changeStage("user");
         }, 2000);
     }


    render() { 

        let stage =null;
        if(this.props.stage === "opening"){
            stage =  <Opening />;
        }else if(this.props.stage === "user"){
            stage = <Questionnaire/>;
        }else if(this.props.stage === "explanation")
        {
            stage = <Explanation />
        }else if(this.props.stage === "simulation")
        {
            stage = <Simulation />
        }

        return ( 
            <React.Fragment>

                {stage}
          
            </React.Fragment>
         );
    }
}

const mapStateToProp = state =>
{
    return {
         stage: state.main.stage 
        }
}

const mapDispatchToProps = dispatch =>
{
    return {
        changeStage: (newStage) => dispatch(mainAction.changeStageDispach(newStage))
    }
}
 
export default connect(mapStateToProp,mapDispatchToProps)(MainPage);