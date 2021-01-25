import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import axios from "axios";
import './Linear.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Linear = () => {
  const classes = useStyles();

  const [post, setPost] = React.useState(null);
  const [isLoad, setIsLoad] = React.useState(false);
  const [isError, setError] = React.useState(false);
  

  React.useEffect(() => {
 setIsLoad(true)
 /* you can create an error in the url and you can see the effect*/
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("Post result", res.data);
        let myPost = res.data.filter((item) => {
          return item.id < 3;
        });
        setPost(myPost);
        setIsLoad(false)
         
      })
      .catch((err) => {
      setError(true)
        //console.log("Error Mesage from linear", err.message);
      
      });
  },[]);
  return (
    <div className="container3">
      <h4>Liner Loading</h4>
      {post ? (
        post.map((item) => {
          return (
            <div key={item.id}>
              <li>{item.title}</li>
            </div>
          );
        })
      ) : (
        <div className={classes.root}>
         {isLoad && 
          <LinearProgress color="secondary" />}
        </div>
      )}
      <div>
      <div className={classes.root}>
         {isError && 
          <p style={{backgroundColor:'orange', padding:'10px'}}>Somthing went wrong!</p>}
        </div>
      </div>
    </div>
  );
};

export default Linear;
