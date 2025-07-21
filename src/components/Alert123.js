export default function Alert123(props) {
  if (!props.alert) {
    return null; // kuch render mat karo agar alert hi nahi hai
  }

  return (
    <div className={`alert alert-${props.alert.type} alert-info`} role="alert">
      <strong>{props.alert.type}</strong>: {props.alert.msg}
    </div>
  );
}
