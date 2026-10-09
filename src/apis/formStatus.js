import axios from '../config/axiosConfig'

export const FormStatus = async(values)=>{
    try {
        const res = await axios.post('/api/')
    return res;
    } catch (error) {
        console.log(error)
        throw error;
        
    }
}