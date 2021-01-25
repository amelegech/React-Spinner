import React from "react";
import "./MySpinner.css";
import axios from "axios";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: "#fff",
//   },
// }));
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     '& > * + *': {
//       marginLeft: theme.spacing(2),
//     },
//   },
// }));
const MySpinner = () => {
  //const classes = useStyles();
  const [users, setUsers] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState(false);

  React.useEffect (  () => {
    userFetchHandler()
  }, []);

 const  userFetchHandler=()=>{
    setIsLoad(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log("Spinner response from DB", res.data);
        let user = res.data.slice(0, 5);
        setUsers(user);
        setIsLoad(false);
      })
      .catch((error) => {
        console.log("Erorr Found: ", error.msg);
      });
  }
  return (
    <div className="container">
      <p>Spinner component </p>
      <div>
        {users.map((u) => {
          return (
            <div>
              <li key={u.id}>User Name is: {u.name}</li>
            </div>
          );
        })}
      </div>
      
      <div >
      
      { isLoad && <CircularProgress color="secondary" value={75}/>}
    </div>
        
    </div>
  );
};
export default MySpinner;
