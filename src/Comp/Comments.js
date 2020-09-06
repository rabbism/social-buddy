import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: "10px",
    margin: "10px",
    border: "1px solid #555",
    backgroundColor: '#A4B0BD'
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

})







function Comments(props) {
  const classes = useStyles();

  const { name, body, email } = props;

  return (
    <div style={{ width: "60%", margin: "0px auto" }}>
      <Card className={classes.root}>
        <CardContent>
          <div className="" style={{ display: "flex", alignItems: "center" }}>
          
              <Avatar src={name} />
            
            <Typography variant="h5" style={{ marginLeft: "10px" }}>
              {name}
            </Typography>
          </div>
          <Typography>E-mail:{email}</Typography>

          <Typography variant="body2" component="p">
            {body}
            <br />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Comments;
