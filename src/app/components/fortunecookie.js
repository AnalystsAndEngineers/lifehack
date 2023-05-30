'use client';

import { Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { FaDiceD6 } from 'react-icons/fa';

export default function FortuneCookie() {
  const [quote, setQuote] = useState('');
  useEffect(() => {
    newQuote();
  }, []);
  const newQuote = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('/api/quote', requestOptions)
      .then((response) => response.text())
      .then((result) => setQuote(result))
      .catch((error) => console.log('error', error));
  };

  return (
    <div className="p-16 text-center">
      <Typography variant="h5" className="font-montserrat font-normal">
        {'"'}
        {quote}
        {'"'}
      </Typography>
      <FaDiceD6 className="mx-auto my-5 cursor-pointer text-2xl text-cyan-600 hover:animate-spin" onClick={newQuote} />
    </div>
  );
}
