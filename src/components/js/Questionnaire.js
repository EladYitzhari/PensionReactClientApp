import React, { Component } from 'react';
import { Table,Input, Button } from 'semantic-ui-react';
import '../css/questionnaire.css'
import {connect} from 'react-redux';
import * as mainAction from '../../store/acions/mainAction'

class Questionnaire extends Component {
    state = { 
        quest1:"0",quest2:"0",
        quest3:"0",quest4:"0",
        quest5:"0",quest6:"0",
        quest7:"0",quest8:"0",
        quest9:"0",quest10:"0",
        quest11:"0",quest12:"0",
        gender:"0",
        age:"0",
        familyStatus:"-",
        numOfKids:"0",
        totalWorkYears:"0",
        religionStatus:"-",
        numOfEmployers:"0",
        insurenceEmployers:"0",
        areYouManager:"no",
        numOfEmployees:"0"
        
     }

     componentWillMount=()=>{
        this.props.getUserIp();
     }
    test = (state)=>
    {
        console.log(state)
    }
    updateState =(e,key)=>{
        this.setState({[key]:e.target.value});
        console.log(this.state)
    }
    insertToServer =(state)=>
    {
        let versionNumer = Math.round(Math.random()*3)+1;
        let userDetails = {...state,
                    mobileDevice:(typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1),
                    createTime:new Date().toString(),
                    simulationType:versionNumer,
                    ip:this.props.ip};
        this.props.updateVersion(versionNumer);
        this.props.insertUserDetails(userDetails);
        this.props.changeStage("explanation");
        console.log(this.state);
    }
    render() { 
        const selectOptions =['-','1','2','3', '4','5','6','7'];



        return ( 
            <div id="mainDivQuestionnaire" >
                <div id="discriptionsQuestionnaire" >
                המשפטים שלפניך מתייחסים לאופן שבו אתה מרגיש במערכות יחסים קרובות עם אנשים אחרים. <br></br>
                המונח 'אנשים אחרים' מתייחס לאנשים הנמצאים ביחסים קרובים אתך.<br></br>
                אנו מתעניינים בדרך שבה אתה חווה בדרך כלל מערכות יחסים.<br></br><br></br>
                <b>התייחס לכל משפט על ידי דרוג עד כמה אתה מסכים או אינך מסכים אתו, על ידי שימוש בסולם שלהלן:</b>
                </div>
                <Table textAlign="right">
                    <Table.Header>
                        <Table.Row textAlign="center">
                            <Table.HeaderCell>עד כמה אתה מסכים או אינך מסכים עם כל משפט:</Table.HeaderCell>
                            <Table.HeaderCell><span style={{color:"green"}}>מאוד מסכים-7 </span>
                            <span style={{color:"red"}}>מאוד לא מסכים-1</span></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row >
                            <Table.Cell>1. זה עוזר לפנות לאנשים אחרים ברגעים שאני זקוק להם</Table.Cell>
                            <Table.Cell>
                                <select  value={this.state.quest1}value={this.state.quest1}  onChangeCapture={(e)=>this.updateState(e,"quest1")} className="questionnaireQuest"> {selectOptions.map(s=>{
                                    return <option key={s+Math.random()} value={s}>{s}</option>
                                })}
                                </select> 
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>2. אני נזקק להרבה אישורים לכך שאני אהוב על ידי אנשים הקרובים לי</Table.Cell>
                            <Table.Cell>
                                <select  value={this.state.quest2} onChangeCapture={(e)=>this.updateState(e,["quest2"])}className="questionnaireQuest"> {selectOptions.map(s=>{
                                    return <option key={s+Math.random()} value={s}>{s}</option>
                                })}
                                </select>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>3. אני רוצה להתקרב לאנשים אחרים אבל אני ממשיך לסגת מהם</Table.Cell>
                            <Table.Cell>
                                <select  value={this.state.quest3} onChangeCapture={(e)=>this.updateState(e,["quest3"])}className="questionnaireQuest"> {selectOptions.map(s=>{
                                    return <option key={s+Math.random()} value={s}>{s}</option>
                                })}
                                </select>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>4. אני מרגיש שאנשים אחרים אינם רוצים להתקרב כפי שאני הייתי רוצה</Table.Cell>
                            <Table.Cell>
                                <select  value={this.state.quest4} onChangeCapture={(e)=>this.updateState(e,["quest4"])}className="questionnaireQuest"> {selectOptions.map(s=>{
                                    return <option key={s+Math.random()} value={s}>{s}</option>
                                })}
                                </select>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>5. אני פונה לאנשים אחרים בקשר להרבה דברים כולל נחמה ואיש</Table.Cell>
                                                        <Table.Cell>
                                <select  value={this.state.quest5} onChangeCapture={(e)=>this.updateState(e,["quest5"])}className="questionnaireQuest"> {selectOptions.map(s=>{
                                    return <option key={s+Math.random()} value={s}>{s}</option>
                                })}
                                </select>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>6. הרצון שלי להיות מאוד קרוב, לעתים מרחיק ממני אנשים</Table.Cell>
                                                        <Table.Cell>
                                <select  value={this.state.quest6} onChangeCapture={(e)=>this.updateState(e,["quest6"])}className="questionnaireQuest"> {selectOptions.map(s=>{
                                    return <option key={s+Math.random()} value={s}>{s}</option>
                                })}
                                </select>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>7. אני מנסה להימנע מלהתקרב יותר מדי לאנשים אחרים</Table.Cell>
                                                        <Table.Cell>
                                <select  value={this.state.quest7} onChangeCapture={(e)=>this.updateState(e,["quest7"])}className="questionnaireQuest"> {selectOptions.map(s=>{
                                    return <option key={s+Math.random()} value={s}>{s}</option>
                                })}
                                </select>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>8. אינני מודאג לעתים קרובות מדי מכך שינטשו אותי</Table.Cell>
                                                        <Table.Cell>
                                <select  value={this.state.quest8} onChangeCapture={(e)=>this.updateState(e,["quest8"])}className="questionnaireQuest"> {selectOptions.map(s=>{
                                    return <option key={s+Math.random()} value={s}>{s}</option>
                                })}
                                </select>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>9. בדרך כלל אני דן בבעיות ובדאגות שלי עם אנשים הקרובים לי</Table.Cell>
                                                        <Table.Cell>
                                <select  value={this.state.quest9} onChangeCapture={(e)=>this.updateState(e,["quest9"])}className="questionnaireQuest"> {selectOptions.map(s=>{
                                    return <option key={s+Math.random()} value={s}>{s}</option>
                                })}
                                </select>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>10. אני נעשה מתוסכל כאשר אנשים אחרים לא נמצאים איתי במידה בה הייתי רוצה שיהיו</Table.Cell>
                                                        <Table.Cell>
                                <select  value={this.state.quest10} onChangeCapture={(e)=>this.updateState(e,["quest10"])}className="questionnaireQuest"> {selectOptions.map(s=>{
                                    return <option key={s+Math.random()} value={s}>{s}</option>
                                })}
                                </select>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>11. אני נעשה מתוח כאשר אנשים אחרים מתקרבים אלי יותר מדי</Table.Cell>
                                                        <Table.Cell>
                                <select  value={this.state.quest11} onChangeCapture={(e)=>this.updateState(e,["quest11"])}className="questionnaireQuest"> {selectOptions.map(s=>{
                                    return <option key={s+Math.random()} value={s}>{s}</option>
                                })}
                                </select>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>12. אני דואג שלאנשים אחרים לא יהיה אכפת ממני באותה מידה שבה לי אכפת מהם</Table.Cell>
                                                        <Table.Cell>
                                <select  value={this.state.quest12} onChangeCapture={(e)=>this.updateState(e,["quest12"])}className="questionnaireQuest"> {selectOptions.map(s=>{
                                    return <option key={s+Math.random()} value={s}>{s}</option>
                                })}
                                </select>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Table  textAlign="right">
                    <Table.Header>
                    <Table.Row><Table.HeaderCell> פרטים כלליים</Table.HeaderCell><Table.HeaderCell>אנא מלא/י את הערך</Table.HeaderCell></Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                        <Table.Cell>מין</Table.Cell>
                                <Table.Cell>
                                <select  onChangeCapture={(e)=>this.updateState(e,["gender"])} className="questionnaireQuest"> 
                                    <option value="-">-</option>
                                    <option  value="male">זכר</option>
                                    <option  value="female">נקבה</option>
                                </select>
                            </Table.Cell>
                           
                        </Table.Row>
                        <Table.Row> 
                                <Table.Cell>גיל</Table.Cell>
                                <Table.Cell>
                                    <Input onChangeCapture={(e)=>this.updateState(e,["age"])} className="questionnaireQuest" type="number"/>
                                </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                        <Table.Cell>מצב משפחתי</Table.Cell>
                                <Table.Cell>
                                <select  onChangeCapture={(e)=>this.updateState(e,["familyStatus"])} className="questionnaireQuest"> 
                                    <option value="-">-</option>
                                    <option  value="single">רווק/ה</option>
                                    <option  value="married">נשוי/ה</option>
                                    <option  value="divorcee">גרוש/ה</option>
                                    <option  value="widow">אלמן/ה</option>
                                </select>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row> 
                                <Table.Cell>מספר ילדים</Table.Cell>
                                <Table.Cell>
                                    <Input onChangeCapture={(e)=>this.updateState(e,["numOfKids"])} className="questionnaireQuest" type="number"/>
                                </Table.Cell>
                        </Table.Row>
                        <Table.Row> 
                                <Table.Cell> שנות עבודה בכלל</Table.Cell>
                                <Table.Cell>
                                    <Input onChangeCapture={(e)=>this.updateState(e,["totalWorkYears"])} className="questionnaireQuest" type="number"/>
                                </Table.Cell>
                        </Table.Row>
                        <Table.Row> 
                                <Table.Cell>הגדר את יחסך לדת</Table.Cell>
                                <Table.Cell>
                                <select  onChangeCapture={(e)=>this.updateState(e,["religionStatus"])} className="questionnaireQuest"> 
                                    <option value="-">-</option>
                                    <option  value="chiloni">חילוני</option>
                                    <option  value="masorati">מסורתי</option>
                                    <option  value="dati">דתי</option>
                                    <option  value="charedi">חרדי</option>
                                </select>
                                </Table.Cell>
                        </Table.Row>
                        <Table.Row> 
                                <Table.Cell> בכמה אירגונים עבדת לפני עבודתך הנוכחית</Table.Cell>
                                <Table.Cell>
                                    <Input onChangeCapture={(e)=>this.updateState(e,"numOfEmployers")} className="questionnaireQuest" type="number"/>
                                </Table.Cell>
                        </Table.Row>
                        <Table.Row> 
                                <Table.Cell> כמה מהם בתחום הביטוח</Table.Cell>
                                <Table.Cell>
                                    <Input className="questionnaireQuest" type="number" onChangeCapture={(e)=>this.updateState(e,"insurenceEmployers")}/>
                                </Table.Cell>
                        </Table.Row>
                        <Table.Row> 
                                <Table.Cell> האם אתה מנהל</Table.Cell>
                                <select   onChangeCapture={(e)=>this.updateState(e,"areYouManager")} className="questionnaireQuest"> 
                                    <option value="no">לא</option>
                                    <option  value="yes">כן</option>
                                </select>
                        </Table.Row>
                        {(this.state.areYouManager === "yes")?
                                    (<Table.Row> 
                                        <Table.Cell>כמה עובדים אתה מנהל</Table.Cell>
                                        <Table.Cell>
                                            <Input className="questionnaireQuest" onChangeCapture={(e)=>this.updateState(e,"numOfEmployees")} type="number"/>
                                        </Table.Cell>
                                  </Table.Row>)
                                  :null}
                        <Table.Row textAlign="center">
                            
                            <Table.Cell>
                                <Button size="big" color='green' onClick={()=>this.insertToServer(this.state)}>המשך </Button>
                            </Table.Cell>
                            <Table.Cell></Table.Cell>
                        </Table.Row>
                    </Table.Body>
                  
                </Table>
            </div>
         );
    }
}
 

 
const mapStateToProp = state =>
{
    return {
         ip:state.main.ip
        }
}

const mapDispatchToProps = dispatch =>
{
    return {
        insertUserDetails: (userDetails) => dispatch(mainAction.insertNewUserDetails(userDetails)),
        changeStage: (newStage) => dispatch(mainAction.changeStageDispach(newStage)),
        updateVersion: (versionNum) => dispatch(mainAction.UpdateVersion(versionNum)),
        getUserIp: ()=> dispatch(mainAction.getUserIp())
    }
}
export default connect(mapStateToProp,mapDispatchToProps)(Questionnaire);