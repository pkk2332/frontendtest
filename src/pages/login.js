import React,{useState} from 'react'
import { useFormik } from 'formik';
import { Input, TextField, FormControl, Button, Grid, InputLabel, Box } from '@material-ui/core'
import * as Yup from 'yup';
import Axios from 'axios'
import { withRouter } from "react-router";import {useStore} from '../store/store'

const loginSchema = Yup.object().shape({
    password: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});


const Login = ({history}) => {

    const [,dispatch]= useStore()
    const [ApiError, setApiError] = useState('')
    const handleLogin=async ()=>{
        try {
           const res= await Axios.post('https://reqres.in/api/login',values)
           console.log(res.data.token)
            dispatch({type:'setUser',payload:values})
            history.push('/home')
        } catch (error) {
            setApiError('Invalid Username and password')
            console.log(error)
        }
}
    
    const { handleSubmit, values, errors, touched, handleChange } = useFormik({
        initialValues: {
            password: '',
            email: '',
        },
        onSubmit:handleLogin,
        validationSchema: loginSchema,

    });
    return (
        <Grid container justify="center" >
            <Grid xs={12} sm={8} lg={4} item    >
                <h3 style={{ textAlign: 'left' }}>  LOGIN</h3>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
                    <FormControl fullWidth >
                        <TextField
                            error={errors.email && touched.email}
                            helperText={(errors.email && touched.email) &&errors.email}
                            onInput={handleChange} name="email" id="standard-basic" label="Email" />
                    </FormControl>
                    <Box mt={4}>
                        <FormControl fullWidth >
                            <TextField
                                error={errors.password && touched.password}
                                id="standard-number"
                                label="Password"
                                type="password"
                                name="password"
                                onInput={handleChange}
                                helperText={ (errors.password && touched.password) && errors.password}
                            />
                        </FormControl>
                    </Box>
                    <small style={{color:'red'}}>
                                {ApiError}  
                    </small>
                    <Box mt={3}>
                        <Button
                            type="submit"
                            color="primary"
                            style={{ backgroundColor: 'black' }}
                        >Login</Button>
                    </Box>

                </form>
            </Grid>
        </Grid>

    )
}

export default withRouter (Login)