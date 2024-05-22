"use client"

import { Grid, Typography } from "@mui/material";
import { ContentStyled } from "./Content.styled";

function Content() {
  return ( 
    <ContentStyled container paddingLeft={5} paddingRight={5} direction={'column'}>
      <Typography paddingBottom={0} marginBottom={0} variant="h4" gutterBottom>
        Marcos Vinícius dos Santos
      </Typography>
      <Typography variant="h5" paddingBottom={2}>
        Web developer
      </Typography>

      <Typography padding={0} margin={0} variant="h6" gutterBottom>
        Skills
      </Typography>
      <Typography paddingBottom={1} variant="body1">ReactJS, ES7, Layout Design, Node, Elixir</Typography>

      <Typography variant="h6" gutterBottom>
        Location
      </Typography>
      <Typography variant="body1">Imbituba - SC - Brazil</Typography>

      <Typography variant="h6" gutterBottom>
        Interests
      </Typography>
      <Typography variant="body1">Frontend, backend, language paradigms, security information and surf 🌊</Typography>
    </ContentStyled>
   );
}

export default Content;