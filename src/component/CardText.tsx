export default function CardText({name, gender}:{name:string, gender:string}) {
  const handleClick = (name: string) => {
    alert(`Hello ${name}`);
  }

  return(
    <div style={{
      display: 'flex',
      // warp
      flexDirection: 'column',
      alignItems: 'flex-start'
    }}>
      <button 
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          textAlign: 'left',
        }}
        onClick={() => handleClick(name)}
      >
        {name}
      </button>
      { 
        <p style={{color: `${gender === 'male' ? 'blue' : 'pink'}`}}>{gender}</p>
      }
    </div>
  );
}