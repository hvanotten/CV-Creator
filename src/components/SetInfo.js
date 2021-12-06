import { Grid, TextField } from "@material-ui/core";

const SetInfo = ({ setInfos, infos }) => {
  return (
    <Grid container spacing={1}>
      <Grid item md={6} sm={6} xs={6}>
        <TextField
          color="secondary"
          value={infos[0].fullName}
          fullWidth
          size="small"
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let i = [...infos];
            i[0] = { fullName: e.target.value };
            setInfos(i);
          }}
        />
      </Grid>
      <Grid item md={6} sm={6} xs={6}>
        <TextField
          color="secondary"
          value={infos[1].title}
          fullWidth
          size="small"
          id="outlined-basic"
          label="Title"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let i = [...infos];
            i[1] = { title: e.target.value };
            setInfos(i);
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          color="secondary"
          value={infos[2].email}
          fullWidth
          size="small"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let i = [...infos];
            i[2] = { email: e.target.value };
            setInfos(i);
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          color="secondary"
          value={infos[3].github}
          fullWidth
          size="small"
          margin="normal"
          id="outlined-basic"
          label="GitHub"
          variant="outlined"
          onChange={(e) => {
            let i = [...infos];
            i[3] = { github: e.target.value };
            setInfos(i);
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          color="secondary"
          value={infos[4].linkedin}
          fullWidth
          size="small"
          margin="normal"
          id="outlined-basic"
          label="LinkedIn"
          variant="outlined"
          onChange={(e) => {
            let i = [...infos];
            i[4] = { linkedin: e.target.value };
            setInfos(i);
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          color="secondary"
          value={infos[5].location}
          fullWidth
          size="small"
          margin="normal"
          id="outlined-basic"
          label="Location"
          variant="outlined"
          onChange={(e) => {
            let i = [...infos];
            i[5] = { location: e.target.value };
            setInfos(i);
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          color="secondary"
          value={infos[6].description}
          fullWidth
          multiline
          size="small"
          margin="normal"
          id="outlined-basic"
          label="Description"
          variant="outlined"
          onChange={(e) => {
            let i = [...infos];
            i[6] = { location: e.target.value };
            setInfos(i);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SetInfo;
