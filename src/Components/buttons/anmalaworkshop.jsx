import Button from 'react-bootstrap/Button';

function AnmalaWorkshop() {
  return (
    <div>
      <Button
        style={{
          width: '30rem',
          height: '4rem',
          backgroundColor: '#BCD0A5',
          borderRadius: '50px',
          color: '#304742',
          outline: 'none',
          border: '0px solid #374742',
        }}
      >
        <span
          style={{
            fontSize: '30px', // 1.875rem is equivalent to 30px (16px base font size)
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '500', // Use '500' for medium weight
          }}
        >
          Anmälan dig till WORKSHOP
        </span>
      </Button>
    </div>
  );
}

export default AnmalaWorkshop;
