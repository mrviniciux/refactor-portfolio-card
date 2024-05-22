import { Grid, Typography } from "@mui/material";

function Content() {
  return ( 
    <Grid container padding={1}>
      <Typography variant="h4" gutterBottom>
        Marcos Vinícius dos Santos
      </Typography>
      <Typography variant="h5" gutterBottom>
        Web developer
      </Typography>

      <Typography variant="h6" gutterBottom>
        Skills

      </Typography>
    </Grid>
   );
}

export default Content;