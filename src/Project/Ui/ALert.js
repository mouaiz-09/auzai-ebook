import Alert from "@mui/material/Alert";

export default function AlertBasic({ type, text  ,open}) {
  function Result() {
      switch (type) {
      case "success":
        return <Alert severity="success">{text}</Alert>;
       
      case "info":
        return <Alert severity="info">This is an info Alert.</Alert>;
       
      case "warning":
        return <Alert severity="warning">This is a warning Alert.</Alert>;
        
      case "error":
        return <Alert severity="error">This is an error Alert.</Alert>;
        

      default:
       return   <Alert severity="warning">err in switch</Alert>;
        
    }
  }
  return (
    <div ClassName="Alert">
      {open === true ? <Result/> :<></>}
    </div>
  );
}
