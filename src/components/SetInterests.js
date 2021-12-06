import { Grid, TextField } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import IconButton from "@material-ui/core/IconButton";

const SetInterests = ({ interests, setInterests }) => {
  return (
    <Grid container spacing={1}>
      {interests.map((s, i) => (
        <Grid container item xs={4} key={s.id}>
          <Grid item xs={10}>
            <TextField
              value={s.interest}
              size="small"
              id="outlined-basic"
              label="interest"
              variant="outlined"
              onChange={(e) => {
                let a = [...interests];
                a[i].interest = e.target.value;
                setInterests(a);
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton
              edge="start"
              color="secondary"
              onClick={() => {
                setInterests(interests.filter((a) => a.id !== s.id));
              }}
            >
              <DeleteOutlineIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default SetInterests;
