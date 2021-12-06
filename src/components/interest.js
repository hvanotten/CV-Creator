import { Grid, Typography } from "@material-ui/core";

const Interests = ({ interests }) => {
  return (
    <Grid container spacing={1} style={{ marginLeft: 20 }}>
      {interests.map((interest) => (
        <Grid item xs={3} key={interest.id}>
          <Typography variant="subtitle2" color="secondary">
            {interest.interest}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Interests;
