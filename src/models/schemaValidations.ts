import * as yup from 'yup';

export const loginSchema = yup
    .object()
    .shape({
        email: yup.string().email('please provide correct format "example@example.com"').required("this field is required"),
        password: yup.string().required('please complete this field'),
    })
    .required();

export const registrationSchema=yup.object().shape({
    firstName:yup.string().required('this field is required'),
    lastName:yup.string().required('this field is required'),
    email: yup.string().email('please provide correct format "example@example.com"').required("this field is required"),
    password: yup.string().required('this field is required'),
    cnp:yup.string().matches(/^[1-9]\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(0[1-9]|[1-4]\d|5[0-2]|99)(00[1-9]|0[1-9]\d|[1-9]\d\d)\d$/).required()
})