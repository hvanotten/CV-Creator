import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Divider } from "@material-ui/core";


const Info = ({ infos }) => {
  return (
    <Grid
      justifyContent="space-between"
      style={{ margin: 20 }}
      container
      spacing={1}
    >
      <Grid container item xs={8}>
        <Grid item xs={12}>
          <Typography color="primary" variant="h3">
            {infos.map((info) => info.fullName)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography color="secondary" variant="h5">
            {infos.map((info) => info.title)}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={4}>
        <Grid item xs={12}>
          <Typography variant="subtitle2">
            <MailOutlineIcon color="primary" />
            {infos.map((info) => info.email)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2">
            <GitHubIcon color="primary" />
            {infos.map((info) => info.github)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2">
            <LinkedInIcon color="primary" />
            {infos.map((info) => info.linkedin)}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2">
            <LocationOnOutlinedIcon color="primary" />
            {infos.map((info) => info.location)}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
      <Typography gutterBottom style={{ margin: 10 }} variant="body1">
        {infos.map((info) => info.description)}
      </Typography>
    </Grid>
  );
};

export default Info;