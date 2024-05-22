
import Content from "@/components/Content";
import Profile from "@/components/Profile";
import { Button, Card, Grid } from "@mui/material";

export default function Home() {
  return (
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
        <Button>Request Resume</Button>
      </Card>
    </main>
  );
}
