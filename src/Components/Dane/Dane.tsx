import React from 'react';
import {Formik, Field, Form} from "formik";
import {URL} from "../../helpers/consts";
import {handleErrors} from "../../helpers/utils";

const Dane = (userData: any) => {
    const dane = userData.userData[0];

    const postDane = (values: any) => {
        fetch(`${URL}/dane`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: dane.id,
                imie: values.imie,
                nazwisko: values.nazwisko,
                pesel: values.pesel,
                miasto: values.miasto
            })

        })
            .then(handleErrors)
            .then(response => response.json())
            .then(res => {
                console.log('res', res);
            })
            .catch(error => console.error(error));
    };

    return (
        <Formik
            initialValues={{imie: dane?.imie, nazwisko: dane?.nazwisko, pesel: dane?.pesel, miasto: dane?.miasto}}
            onSubmit={(values) => {
                postDane(values)
            }}
        >
            <Form>
                <Field name="imie" type="text" placeholder="imie"/>
                <Field name="nazwisko" type="text" placeholder="nazwisko"/>
                <Field name="pesel" type="text" placeholder="pesel"/>
                <Field name="miasto" type="text" placeholder="miasto"/>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default Dane;
