import { Divider, Paper, Typography } from "@material-ui/core";
import React from "react";
import Edu from "./Edu";
import Info from "./info";
import Interests from "./interest";
import Skills from "./Skills";
import Work from "./Work";

export class ComponentToPrint extends React.PureComponent {
  render() {
    const { infos, work, edu, skills, interests } = this.props;
    return (
      <Paper style={{ padding: 16 }}>
        <Info infos={infos} />
        <Divider variant="middle" />
        <Typography color="primary" variant="h6" style={{ marginLeft: 20 }}>
          WORK EXPERIENCE
        </Typography>
        <Work work={work} />
        <Typography color="primary" variant="h6" style={{ marginLeft: 20 }}>
          EDUCATION
        </Typography>
        <Edu edu={edu} />
        <Typography color="primary" variant="h6" style={{ marginLeft: 20 }}>
          {skills.length !== 0 && "Skills"}
        </Typography>
        <Skills skills={skills} />
        <Typography color="primary" variant="h6" style={{ marginLeft: 20 }}>
          {interests.length !== 0 && "Interests"}
        </Typography>
        <Interests interests={interests} />
      </Paper>
    );
  }
}
