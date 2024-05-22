
"use client"
import Content from "@/components/Content";
import Profile from "@/components/Profile";
import { Download } from "@mui/icons-material";
import { Button, Card, createTheme, Grid, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#424242',
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <Grid container padding={2}>
          <Grid item>
            <Profile />
          </Grid>
          <Grid item>
            <Content />
          </Grid>
        </Grid>
        <Grid padding={2} display={'flex'} justifyContent={'flex-end'}>
          <Button variant="contained" color="secondary" startIcon={<Download />}>Request Resume</Button>
        </Grid>
      </Card>
    </main>
    </ThemeProvider>
  );
}
