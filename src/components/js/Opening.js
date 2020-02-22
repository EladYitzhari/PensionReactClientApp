import React, { Component } from 'react';
import onoLogo from '../../img/LOGOONO.jpg'
import '../css/animationCss.css'
import '../css/opening.css'

class Opening
 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className=" fadeInUp animated" style={{width:'100%',textAlign:'center'}}>
                <img id="opening_logoImg" src={onoLogo} alt="onoLogo" />
            </div>
            
         );
    }
}
 
export default Opening
;