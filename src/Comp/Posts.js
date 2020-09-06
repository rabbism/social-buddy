import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    padding: "20px",
    margin: "20px",
    boxShadow: "0px 5px 7px -7px rgba(0,0,0,.75)",
    border: "1px solid lightgray",
    borderRadius: "5px",
  },

  bullet: {
    display: "inline",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    fontWeight:"700px",
  },
  pos: {
    marginBottom: 12,
  },
});

function Posts(props) {
  const { title, body, id } = props;
  const classes = useStyles();

  return (
    <div className="post" style={{ width: "60%", margin: "0px auto" }}>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>

          <Typography variant="body2" component="p">
            {body}
            <br />
          </Typography>
        </CardContent>
        <CardActions style={{ textDecoration: "none" }}>
          <Link to={"/posts/" + id}>
            {props.show && (
              <Button variant="contained" color="primary">
              See More
            </Button>
            )}
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
export default Posts;
