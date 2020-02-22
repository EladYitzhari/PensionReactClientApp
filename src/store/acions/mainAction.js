import * as actionTypes from '../acions/actionTypes'
import * as location from '../../components/Functions/locations'
import * as httpFunctions from '../../components/Functions/HttpFunctions'
import 'whatwg-fetch'
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
        fetch(location.serverAdress()+"/User/NewUser", {
            method: 'POST',
            body: JSON.stringify(userDetails)
            ,headers: {
                'Content-Type':'application/json'
            //   'Authorization': localStorage.getItem("token")
            }
          })
        .then(httpFunctions.checkStatus)
        .then(response=>{
            return response.text();
        })
        // .then(httpFunctions.parseJSON)
        .then(function(data) {
          console.log('request succeeded: '+location.serverAdress()+"/User/NewUser", data)
          dispatch(insertNewUser(data));
        }).catch(function(error) {
          console.log('request failed', error.data)
          alert("Somthing went wrong, send that message to the admin: "+error.data);

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
      fetch(location.serverAdress()+"/User/finishExplain", {
        method: 'POST',
        body:JSON.stringify({userId:userId,finishExplanation:finishTime
        })
        ,headers: {
            'Content-Type':'application/json'
        }
      })
      .then(httpFunctions.checkStatus)
        .then(function(data) {
          dispatch(finishExplanation());
          console.log('request succeeded: '+location.serverAdress()+"/User/finishExplain/"+finishTime, data)     
        }).catch(function(error) {
          console.log('request failed', error.data)
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
