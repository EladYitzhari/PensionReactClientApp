import * as actionTypes from '../acions/actionTypes'
import * as location from '../../components/Functions/locations'
import * as httpFunctions from '../../components/Functions/HttpFunctions'
import 'whatwg-fetch';
import axiox from 'axios';
import axios from 'axios';
/////////////////////////INSERT NEW USER////////////////////////////
export const insertNewUser = (userId) =>
{
    return {
            type: actionTypes.INSERT_NEW_USER,
            val:userId
            };
      
}

export const insertNewUserDetails = (userDetails) =>
{
    return (dispatch)  =>
    {
      axios.post("https://pension-app-a235f.firebaseio.com/users.json",userDetails)
      .then(response =>{
        dispatch(insertNewUser(response.data.name));
      }).catch(error=>{
        console.log(error);
        alert("there was an error, please contact the admin, the error is: "+error)
      })
          
        
 
    }
}
////////////////UPDATE FINISH EXPLANATION///////////////////////////
export const finishExplanation = () =>
{
    return {
            type: actionTypes.FINISH_EXPLAINATION,
            };
      
}
export const finishExplanationUpdate = (userId,finishTime)=>{
  return (dispatch)  =>
    {
      axiox.patch("https://pension-app-a235f.firebaseio.com/users/"+userId+".json",{finishExplanationTime:finishTime})
      .then(response=>{
        dispatch(finishExplanation());
        console.log("request succeeded");
      })
    }
}

////////////////INSERT NEW CYCLE TO DB///////////////////////////
export const insertNewCycleToDbDispach = () =>
{
    return {
            type: actionTypes.INSERT_NEW_CYCLE_TO_DB,
            };
      
}
export const insertNewCycleToDb = (userId,cycle)=>{
  return (dispatch)  =>
    {
      axiox.post("https://pension-app-a235f.firebaseio.com/users/"+userId+"/cycles.json",cycle)
      .then(response=>{
        dispatch(insertNewCycleToDbDispach());
        console.log("request succeeded, cycle inserted to DB: "+cycle);
      })
    }
}

///////////////CHANGE STAGE///////////////////////////
export const changeStage = (newStage) =>
{
    return {
            type: actionTypes.CHANGE_STAGE,
            val:newStage
            };
      
}

export const changeStageDispach = (newStage) =>
{
    return (dispatch)  =>
    {    
      dispatch(changeStage(newStage));
    }
}
/////////////////
export const UpdateVersion = (versionNumber) =>
{
  return {
    type: actionTypes.UPDATE_VERSION_NUMBER,
    val:versionNumber
    };
}
////////////////GET USER IP///////////////////////////
export const insertUserIp = (userIp) =>
{
    return {
            type: actionTypes.GET_USER_IP,
            val:userIp
            };
      
}
export const getUserIp = ()=>{
  return (dispatch)  =>
    {
      axiox.get("https://api.ipify.org/?format=json")
      .then(response=>{
        console.log(response.data)
        dispatch(insertUserIp(response.data.ip));
        console.log("request succeeded, the ip is: "+response.data.ip);
      })
    }
}

///////////////CHANGE STAGE///////////////////////////