import axios from "../utils/axiosInstance"
const postLogger = async ({level, message}) => {
    try{
        const res = await axios.post('/logger/admin',{level:level, message:message})
    }catch(err){
        console.log(err)
    }
}

export default postLogger