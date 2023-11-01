import Lottie from 'lottie-react';
import Loading from '../../../Animations/loading.json';
import Card from '../Card';

type CardQuotesProps = {
  title: string;
  character: string;
  quote: string;
  loading?: boolean;
};

const CardQuotes = ({ title, character, quote, loading }: CardQuotesProps) => {
  console.log('loading:', loading);
  return (
    <Card>
      {loading && <Lottie animationData={Loading} loop={true} className="h-32" />}
      {!loading && (
        <>
          <p className="text-3xl text-center font-bold m-1">{title}</p>
          <p className="text-2xl text-center m-1">{character}</p>
          <p className="text-1xl text-center m-1">{quote}</p>
        </>
      )}
    </Card>
  );
};

export default CardQuotes;
