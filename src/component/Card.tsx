import CardImage from './CardImage';
import CardText from './CardText';

export default function Card() {
  return(
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        width: '500px',
      }}
    >
      <CardImage />
      <CardText />
    </div>
  )
}