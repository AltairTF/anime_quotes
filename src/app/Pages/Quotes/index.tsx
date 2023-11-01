'use client';

import { useState, useEffect } from 'react';
import Button from '@/app/components/Button';
import CardQuotes from '@/app/components/CardsQuotes';
import { asyncGetQuotes } from './Requests';

function Quotes() {
  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState({
    title: '',
    character: '',
    quote: '',
  });

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    setLoading(true);
    try {
      asyncGetQuotes()
        .then(data => {
          console.log('data:', data);
          if (data !== '502' && data !== undefined) {
            setdata({
              title: data.anime,
              character: data.character,
              quote: data.quote,
            });
          } else {
            setdata({
              title: 'Erro 502',
              character: '',
              quote: '',
            });
            setTimeout(() => {
              getData();
            }, 3000);
          }
        })
        .then(() => {
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <Button className="m-4" onClick={() => getData()}>
        Nova Frase
      </Button>
      <CardQuotes loading={loading} title={data.title} character={data.character} quote={data.quote} />
    </div>
  );
}

export default Quotes;
