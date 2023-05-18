
import axios from "axios";

export default axios.create({
    baseURL:'http://localhost:8000'
})

export const api =axios.create({
    baseURL:'http://localhost:8000'
})

export const getStudents=async () =>{
    const response=await api.get('/students_all_info')
    return response.data
}