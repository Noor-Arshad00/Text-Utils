export default function Alert123(props) {
  if (!props.alert) {
    return null; // kuch render mat karo agar alert hi nahi hai
  }

  return (
    
          <div className={`alert alert-${props.alert.type} alert-info`} role="alert" style={{
         position: 'fixed',
        top: '60px', // Navbar ke just neeche
        right: '20px',
        zIndex: 9999,
        minWidth: '300px',
        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)'
         }}>
      <strong>{props.alert.type}</strong>: {props.alert.msg}
    </div>

  );
}
