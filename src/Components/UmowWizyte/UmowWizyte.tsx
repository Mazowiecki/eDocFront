import React, {useEffect, useState} from 'react';
import {Field, Form, Formik, useFormik, useFormikContext} from "formik";
import {URL} from "../../helpers/consts";
import {handleErrors} from "../../helpers/utils";
import { TextField } from '@material-ui/core';


const UmowWizyte = (userData: any) => {
    const [lekarze, setLekarze] = useState([]);
    const formikProps = useFormikContext()
    const dane = userData.userData[0];

    useEffect(() => {
        getLekarze();
    }, [])

    const getLekarze = () => {
        fetch(`${URL}/lekarze`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(handleErrors)
            .then(response => response.json())
            .then(res => {
                console.log(res);
                setLekarze(res.data);
            })
            .catch(error => console.error(error));
    };

    const postWizyta = (values: any) => {
        fetch(`${URL}/wizyta`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_users: dane.id,
                id_lekarz: values.lekarz,
                date: values.date,
                powod: values.powod
            })
        })
            .then(handleErrors)
            .then(response => response.json())
            .then(res => {
                console.log(res);
            })
            .catch(error => console.error(error));
    };


    // @ts-ignore
    return (
        <Formik
            initialValues={{
                lekarz: 1,
                date: new Date(),
                powod: ''
            }}
            onSubmit={(values) => {
                postWizyta(values);
            }}
        >
            {({ values }) => (
                <Form>
                    <div id="my-radio-group">Lekarz: </div>
                    <div role="group" aria-labelledby="my-radio-group">
                        {
                            lekarze.map((item: any, index) => (
                                <label key={item.id_lekarz}>
                                    <Field type="radio" name="lekarz" value={item.id_lekarz} />
                                    {item.imie}
                                </label>
                            ))
                        }
                    </div>

                    <TextField
                        id="date"
                        label="Data wizyty"
                        type="date"
                        name="date"
                        onChange={date => formikProps.setFieldValue('date', date)}
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Field name="powod" type="text" placeholder="Powod"/>
                    <br/>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default UmowWizyte;
