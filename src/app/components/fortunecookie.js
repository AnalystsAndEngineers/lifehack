"use client";

import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import {FaDiceD6} from "react-icons/fa"

export default function FortuneCookie() {
    const [quote, setQuote] = useState("");
    useEffect(() => {
        newQuote();
    }, [])
    const newQuote = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:3000/api/quote", requestOptions)
            .then(response => response.text())
            .then(result => setQuote(result))
            .catch(error => console.log('error', error));
    }

    return (
        <div className="text-center p-16">
            <Typography variant="h5" className="font-montserrat font-normal">{quote}</Typography>
            <FaDiceD6 className="cursor-pointer text-2xl mx-auto my-5 hover:animate-spin text-cyan-600" onClick={newQuote}/>
        </div>
    );
}
