import Card from '../Card';

type CardQuotesProps = {
  title: string;
  character: string;
  quote: string;
};

const CardQuotes = ({ title, character, quote }: CardQuotesProps) => {
  return (
    <Card>
      <p className="text-3xl">{title}</p>
      <p className="text-2xl">{character}</p>
      <p className="text-1xl">{quote}</p>
    </Card>
  );
};

export default CardQuotes;
