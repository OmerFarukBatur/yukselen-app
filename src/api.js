import axios from "axios";



// export const postUser = async(input) =>{
//     const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/api/User/Register`, input
//     ,{
//         //method: 'post',
//         //mode: 'cors',
//         headers:{
//         'Access-Control-Allow-Origin': 'https://localhost:7124;*',
//         // 'Content-Type': 'application/json;charset=utf-8',
//         // 'accept': '*/*',
        
//         },
//     }
//     );
//     return data;
// };

// export const gettUser = async() =>{
//     const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/User/Create`);
//     return data;
// };


export default{
    get: axios.get,
    post:axios.post,
    put: axios.put,
    delete: axios.delete
}