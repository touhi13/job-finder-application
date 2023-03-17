import axios from "../../utils/axios";


export const getJobs=async(search)=>{
    let queryString = "";
    // if (search !== "") {
        queryString += `&q=${search}`;
    // }
    const response=await axios.get(`/jobs/?${queryString}`)
// console.log(response.data)
    return response.data;
}
export const addJobs=async(data)=>{
    const response=await axios.post('/jobs',data)
    return response.data;
}
export const editJobs=async(id,data)=>{
    const response=await axios.put(`/jobs/${id}`,data)
    return response.data;
}
export const deleteJobs=async(id)=>{
    const response=await axios.delete(`/jobs/${id}`)
    return response.data;
}