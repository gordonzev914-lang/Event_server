import {writingToJson} from "./generalFunctions.js"
import { readJsonFile } from "./generalFunctions.js"




const createUser= async(user)=>{
    try {
        const arryOfUsers=await readJsonFile("./users")
        if(arryOfUsers.length===0){
            arryOfUsers.push(user)
            const check= writingToJson( arryOfUsers,"users")
            return check
        }
        else{
        for(let i=0;i<arryOfUsers.length; i++){
        const inOrOut=arryOfUsers[i]
        if(inOrOut.userName!==user.userName){
        console.log(inOrOut)
            arryOfUsers.push( user)
            const check= writingToJson( arryOfUsers,"users")
            return check
        }
        else if(inOrOut.userName===user.userName){
            return "not valid"
            }    }    }
    } catch (error) {
        console.log(error)
    }
}

