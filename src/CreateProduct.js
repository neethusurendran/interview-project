
import {Button,Grid,TextField} from '@material-ui/core';
import React,{ useState} from 'react';
import { withRouter } from 'react-router';
import { useEffect } from 'react';
import validate from 'validate.js';
import { validateForm } from './validateForm';
import './CreateProduct.css';

const CreateProduct=({history,...props})=>{

    const [form, setForm] = useState([
        {
            element_name: "name",
            value: "",
            isTouched: false,
            placeholder: "Enter Name",
            label: " Name",
        },
        {
            element_name: "descreption",
            value: "",
            isTouched: false,
            placeholder: "Enter Description",
            label: " Name",
        },
       
    ]);

    const [errors,setErrors]=useState(false)
    const [isSubmit, setisSubmit] = useState(false);

    var constraints={
        name: {
            presence:{allowEmpty:false},   
        },
        description: {
            presence:{allowEmpty:false},   
        },
       
    };
    useEffect(() => {
        isValid();
    }, [form, isSubmit]);

    const isValid = (isSubmitted = isSubmit) => {
    
        const formObj = document.getElementById("frmReg");
        const ingnored = [];

        if (!isSubmitted) {
            form.forEach((field) => {
                if (!field.isTouched) {
                    ingnored.push(field.element_name);
                }
            });
        }
        const validStatus = validateForm(formObj, constraints, ingnored);
        setErrors(validStatus.errors);
        return validStatus;
    };



    const [shouldPrint, setShouPring] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(history)
        setisSubmit(true)
        const validForm=isValid(true);

        if(validForm.isFormValid){
            history.push('/CreateView',{form})
        }


        
    };

    const handleInputChange = (e, index) => {
        const updateForm = [...form];
        updateForm[index] = {
            ...form[index],
            value: e.target.value,
            isTouched: true,
        };
        setForm(updateForm);
        
    };

   return (
        <div className="form-div">
            <form id="frmReg">
                <Grid container columns={8} spacing={2} >
                    {form.map((field, index) => {
                        return (
                            <Grid item xs={8}>
                                <TextField
                                    name={field.element_name}
                                    id={field.element_name}
                                    value={field.value}
                                    placeholder={field.placeholder}
                                    variant="outlined"
                                    label={field.lable}
                                    onChange={(e) => handleInputChange(e, index)}
                                />
                                <p>{errors[field.element_name]}</p>
                                
                            </Grid>
                        );
                    })}
                    <Grid item xs={8}>
                    <Button
                        variant="contained" 
                        size="large" 
                        onClick={handleSubmit} 
                        >SUBMIT</Button>
                     </Grid>
                    {shouldPrint ? <div>{form.first_name}</div> : null}
                </Grid>
            </form>
        </div>
    );
}

export default withRouter(CreateProduct);