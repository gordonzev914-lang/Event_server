import fs from "fs/promises"

export const writingToJson= (Object,fileName)=>{
    try{
        const objectToString= JSON.stringify(Object)
        fs.writeFile(`${fileName}.json`,objectToString ,'utf-8',(objectToString)=>{console.log(objectToString)})
                return objectToString
            }
            catch(err){
                console.log(err)
            }
        }

export const readJsonFile=async(path)=>{
    try{
        const data=await fs.readFile(`${path}.json`,'utf-8',()=>{})
        const data2=JSON.parse(data)
        return data2
    }
    catch(err){
        console.log(err)
    }
}//בעת קריאה לפונקציה יש להשתמש ב 
// "await"

