import { Button, Grid, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const SetEdu = ({ edu, setEdu }) => {
  return edu.map((e, i) => (
    <Grid container spacing={1} key={e.id}>
      <Grid item md={6} sm={6} xs={6}>
        <TextField
          value={e.course}
          fullWidth
          size="small"
          id="outlined-basic"
          label="Course/Program"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let a = [...edu];
            a[i].course = e.target.value;
          }}
        />
      </Grid>
      <Grid item md={6} sm={6} xs={6}>
        <TextField
          fullWidth
          value={e.university}
          size="small"
          id="outlined-basic"
          label="University"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let a = [...edu];
            a[i].university = e.target.value;
            setEdu(a);
          }}
        />
      </Grid>
      <Grid item md={6} sm={6} xs={6}>
        <TextField
          value={e.startDate}
          fullWidth
          size="small"
          id="outlined-basic"
          label="Start Date"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let a = [...edu];
            a[i].startDate = e.target.value;
            setEdu(a);
          }}
        />
      </Grid>
      <Grid item md={6} sm={6} xs={6}>
        <TextField
          value={e.endDate}
          fullWidth
          size="small"
          id="outlined-basic"
          label="End Date"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let a = [...edu];
            a[i].endDate = e.target.value;
            setEdu(a);
          }}
        />
      </Grid>
      <Grid item md={12} sm={12} xs={12}>
        <TextField
          value={e.description}
          fullWidth
          multiline
          id="outlined-basic"
          label="Description"
          variant="outlined"
          margin="normal"
          onChange={(e) => {
            let a = [...edu];
            a[i].description = e.target.value;
            setEdu(a);
          }}
        />
      </Grid>
      <Button
        style={{ marginLeft: 18 }}
        onClick={() => {
          setEdu(edu.filter((a) => a.id !== e.id));
        }}
        color="secondary"
        variant="contained"
        size="small"
      >
        remove
        <DeleteIcon />
      </Button>
    </Grid>
  ));
};

export default SetEdu;
