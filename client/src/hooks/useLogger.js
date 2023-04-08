import React, { useEffect } from 'react'
import axios from '../utils/axiosInstance'

export const useLogger = ({level, message}) => {
    const postLogger = async () => {
        try{
            const res = await axios.post('/logger/client',{level:level, message:message})
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{postLogger()},[level, message])
}
