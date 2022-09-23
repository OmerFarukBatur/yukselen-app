import {object, string, number} from 'yup';


const validations = object({
    fullName: string().min(2).max(50).required(),
    email: string().email().required(),
    phoneNumber: string().required(),
    job: string(),
    address: string().min(15).max(150),
    userLength: number().min(120).max(250).required(),
    kilo: number().min(40).max(250).required(),
    gender: string().required(),
    day: number().min(1).max(31).required(),
    month: number().min(1).max(12).required(),
    year: number().min(1920).required()
  });

export default validations;