import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as mainAction from '../../store/acions/mainAction'
import { Message,Input, Button } from 'semantic-ui-react';
import '../css/Explanation.css'

class Explanation extends Component {

    state = {  }

    nextLevel=()=>{
        this.props.finishExplain(this.props.userId,new Date().toString());
        console.log("userId",this.props.userId,"date",new Date().toString())
        this.props.changeStage("simulation");
    }


    render() {
        
        let explanationText = null;
        if(this.props.version === 1 || this.props.version === 2)
        {
            explanationText = (
                <Message>
                    <Message.Header>סימולטור השקעה</Message.Header>
                    <p>
                    במערכת ניהול ההשקעות אתה נדרש להשקיע במשך שלושים סבבי השקעה. בסבב הראשון תקבל סכום של 1000 להשקעה. 
                    <br></br>
                   <b> תוכל לבחור להשקיע באחד מבין שלושה מסלולי השקעה:</b>
                    <br></br>
                    <b> א.	מסלול בסיכון גבוה </b> שבו  הסכום שתשקיע מדי תקופה יהיה בעל מאפיינים סטטיסטיים שנדגמו מתיק מניות בינ"ל
                        <br></br>
                        <b> ב.	מסלול בסיכון נמוך </b>, שבו  הסכום שתשקיע מדי תקופה יהיה בעל מאפיינים סטטיסטיים שנדגמו מתיק אג"ח ממשלתי 
                        <br></br>
                        <b>ג.	מסלול בסיכון בינוני</b>, המשלב את התיק הראשון והתיק השני ,במשקלות שווים של 50% כ"א והוא בעל מאפיינים סטטיסטיים מתאימים. 
                        <br></br>
                        לאחר שתבחר, התוכנה תציג לך כמה תשואה צברת בסבב הראשון  ואת סך הסכום שעומד לרשותך ואז תתבקש להשקיע מחדש את הסכום הצבור ועוד 1000 ₪ חדשים בסבב השני.
                        <br></br>בכל סבב תתבקש לקבל החלטה מחדש 
                        התהליך נמשך במשך 30 פעמים בסך הכל. השלמת ההשקעה בפעם ה-30 משלימה את המשימה    הפיננסית 

                    </p>
                </Message>
          )
        }else  if(this.props.version === 3 || this.props.version === 4){
            explanationText = (
                <Message>
                    <Message.Header>סימולטור פנסיוני</Message.Header>
                    <p>
                    מערכת ניהול ההשקעות הפנסיונית מדמה השקעה לטווח של 30 שנה עד הפרישה. במערכת אתה מתבקש  להשקיע את כספי הפנסיה במשך שלושים סבבי השקעה. בכל שנה תקבל סכום של 1000 להשקעה. 
                    <br></br>
                   <b> תוכל לבחור להשקיע באחד מבין שלושה מסלולי השקעה:</b>
                    <br></br>
                    <b> א.	מסלול בסיכון גבוה </b> שבו  הסכום שתשקיע מדי תקופה יהיה בעל מאפיינים סטטיסטיים שנדגמו מתיק מניות בינ"ל
                        <br></br>
                        <b> ב.	מסלול בסיכון נמוך </b>, שבו  הסכום שתשקיע מדי תקופה יהיה בעל מאפיינים סטטיסטיים שנדגמו מתיק אג"ח ממשלתי 
                        <br></br>
                        <b>ג.	מסלול בסיכון בינוני</b>, המשלב את התיק הראשון והתיק השני ,במשקלות שווים של 50% כ"א והוא בעל מאפיינים סטטיסטיים מתאימים. 
                        <br></br>
                        לאחר שתבחר, התוכנה תציג לך כמה תשואה צברת בסבב הראשון  ואת סך הסכום שעומד לרשותך ואז תתבקש להשקיע מחדש את הסכום הצבור ועוד 1000 ₪ חדשים בסבב השני.
                        <br></br> בכל סבב תתבקש לקבל החלטה מחדש 
                        התהליך נמשך במשך 30 פעמים בסך הכל. השלמת ההשקעה בפעם ה-30 משלימה את המשימה    הפיננסית 

                    </p>
                </Message>)
        }

        return ( 
            <div className="explanationMainDiv" style={{textAlign:"center"}}>
                {explanationText}
                <Button onClick={()=>this.nextLevel()} size="big" color="green">הבנתי, בוא נתחיל</Button>
            </div>
         );
    }
}
 

const mapStateToProp = state =>
{
    return {
         stage: state.main.stage,
         version: state.main.version,
         userId:state.main.userId
        }
}

const mapDispatchToProps = dispatch =>
{
    return {
        changeStage: (newStage) => dispatch(mainAction.changeStageDispach(newStage)),
        finishExplain:(userId,finishTime)=> dispatch(mainAction.finishExplanationUpdate(userId,finishTime))
    }
}




export default connect(mapStateToProp,mapDispatchToProps)(Explanation);