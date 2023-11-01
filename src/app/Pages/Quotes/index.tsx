'use client';

import { useState } from 'react';
import Button from '@/app/components/Button';
import CardQuotes from '@/app/components/CardsQuotes';
import { asyncGetQuotes } from './Requests';

function Quotes() {
  const [data, setdata] = useState({
    title: 'Teste',
    character: 'Naruto',
    quote: 'Pode ser duro as vezes',
  });

  function handleClick() {
    asyncGetQuotes().then(data => {
      setdata({
        title: data.anime,
        character: data.character,
        quote: data.quote,
      });
    });
  }

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <Button className="m-4" onClick={handleClick}>
        Nova Frase
      </Button>
      <CardQuotes title={data.title} character={data.character} quote={data.quote} />
    </div>
  );
}

export default Quotes;
