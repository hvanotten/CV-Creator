import { Grid, Typography } from "@material-ui/core";

const Skills = ({ skills }) => {
  return (
    <Grid container spacing={1} style={{ marginLeft: 20 }}>
      {skills.map((skill) => (
        <Grid item xs={2} key={skill.id}>
          <Typography variant="subtitle2" color="secondary">
            {skill.skill}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Skills;
