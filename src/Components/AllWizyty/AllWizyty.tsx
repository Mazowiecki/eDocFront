import React, {useEffect, useState} from 'react';
import {URL} from "../../helpers/consts";
import {handleErrors} from "../../helpers/utils";

const AllWizyty = (userData: any) => {
    const dane = userData.userData[0];
    const [wizyty, setWizyty] = useState([]);

    useEffect(() => {
        getWizyty(dane.id)
    },[])

    const getWizyty = (id: number) => {
        fetch(`${URL}/allWizyty?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(handleErrors)
            .then(response => response.json())
            .then(res => {
                console.log(res);
                setWizyty(res.data);
            })
            .catch(error => console.error(error));
    };


    return (
        <ul>
            {
                wizyty.map((item: any, index) => (
                    <>
                        <li>Wizyta: Nr {index} - {item.data}</li>
                        <ul>
                            <li>Lekarz: {item.imieLekarz} {item.nazwiskoLekarz} - {item.specjalizacjaLekarz}</li>
                            <li>Powód: {item.powod}</li>
                        </ul>
                    </>
                ))
            }
        </ul>
    );
};

export default AllWizyty;
