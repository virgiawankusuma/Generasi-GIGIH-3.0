export default function CardText({name, gender}:{name:string, gender:string}) {
  return(
    <div style={{
      display: 'flex',
      // warp
      flexDirection: 'column',
      alignItems: 'flex-start'
    }}>
      <p 
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          textAlign: 'left',
        }}
      >
        {name}
      </p>
      { 
        <p style={{color: `${gender === 'male' ? 'blue' : 'pink'}`}}>{gender}</p>
      }
    </div>
  );
}