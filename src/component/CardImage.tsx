export default function CardImage() {
  return <img 
            src="https://picsum.photos/200/300" 
            alt="random" 
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: '9999px',
            }}
          />;
}