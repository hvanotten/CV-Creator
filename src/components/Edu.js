import { Grid, Typography } from "@material-ui/core";

const Edu = ({ edu }) => {
  return edu.map((i) => (
    <Grid
      key={i.id}
      style={{ marginLeft: 20 }}
      container
      spacing={1}
      justifyContent="center"
    >
      <Grid item xs={8}>
        <Typography color="secondary" variant="body1">
          {i.course}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="subtitle2">
          {i.university + " | " + i.startDate + " - " + i.endDate}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography gutterBottom variant="body2">
          {i.description}
        </Typography>
      </Grid>
    </Grid>
  ));
};

export default Edu;
