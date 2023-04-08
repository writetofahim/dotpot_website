import axios from "../utils/axiosInstance"
const postLogger = async ({level, message}) => {
    try{
        const res = await axios.post('/logger/client',{level:level, message:message})
        console.log(res)
    }catch(err){
        console.log(err)
    }
}

export default postLogger