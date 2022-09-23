import axios from "axios";

 axios.interceptors.request.use(function (config) {
    
    /* const {origin} = new URL(config.url);

    const allowedOrigins = [process.env.BASE_URL];
    const token = localStorage.getItem('access-token');

    if (allowedOrigins.includes(origin)) {
       config.headers.authorization = false;
    }  */
    config.headers={
       /*  'Access-Control-Allow-Origin': '*',*/
        'Accept': '*/*',
        /* "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204 */
        'Content-Type': 'application/json'
        
    };
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
}); 

/* export const fetchProductList = async({ pageParam = 1 }) =>{
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/product?page=${pageParam}`);
    return data;
};


export const fetchProduct = async(value) =>{
    const {data} = await axios.get(`${process.env.BASE_ENDPOINT}/product/${value}`);
    return data;
}; */

export const postUser = async(input) =>{
    const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/api/User/Register`,input);
    return data;
};

export const gettUser = async() =>{
    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/User/Create`);
    return data;
};


/* export const fetchRegister = async(input) => {
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/register`,input);

    return data;
};


export const fetchLogin = async (input) => {
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/login`,input);
    return data;
};
  

export const fetchMe = async () =>{
    const {data} = await axios.get(`${process.REACT_APP_BASE_ENDPOINT}/auth/me`);
    return data;
};


export const fetchLogout = async () =>{
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/logout`,{
        refresh_token: localStorage.getItem("refresh-token")
    });

    return data;
};


export const postOrder = async (input) => {
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/order`, input);
    return data; 
}


export const fetchOrders = async () => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/order`);

    return data;
}


export const deleteProduct = async (product_id) =>{
    const {data} = await axios.delete(`${process.env.REACT_APP_BASE_ENDPOINT}/product/${product_id}`);

    return data;
}


export const updateProduct = async (input,product_id) => {
    const {data} = await axios.put(`${process.env.REACT_APP_BASE_ENDPOINT}/product/${product_id}`,input);

    return data;
} */