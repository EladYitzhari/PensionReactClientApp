import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../css/simulation.css'
import {Line,} from 'react-chartjs-2';

class Simulation extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="mainDivSimulation">
                
                Simulation
                <Line width="1000" height="500"
                        options={{
                            // padding:"0px",
                            responsive:false,
                            maintainAspectRatio:false,
                            defaultFontSize:"30px",
                            width:"400",
                            height:"400",
                            hover:true,
                            
                            legend:{
                                display:true,
                                position:'right'
                            }}}
                    
            data={{
                labels:[1,2,3],
                datasets:[{
                    label:"t1",
                    borderColor:'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
                    backgroundColor:'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
                    data:[100,200,300]
                },{
                    label:"t2",
                    borderColor:'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
                    backgroundColor:'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
                    data:[100,50,20]  
                },{
                    label:"t3",
                    borderColor:'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
                    backgroundColor:'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')',
                    data:[50,70,30]      
                }]
                    } }/>
                </div>
         );
    }
}
 
export default connect()(Simulation);