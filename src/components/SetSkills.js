import { Grid, TextField } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import IconButton from "@material-ui/core/IconButton";

const SetSkills = ({ skills, setSkills }) => {
  return (
    <Grid container spacing={1}>
      {skills.map((s, i) => (
        <Grid container item xs={3} key={s.id}>
          <Grid item xs={10}>
            <TextField
              value={s.skill}
              size="small"
              id="outlined-basic"
              label="Skill"
              variant="outlined"
              onChange={(e) => {
                let a = [...skills];
                a[i].skill = e.target.value;
                setSkills(a);
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton
              edge="start"
              color="secondary"
              onClick={() => {
                setSkills(skills.filter((a) => a.id !== s.id));
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

export default SetSkills;
