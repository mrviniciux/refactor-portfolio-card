
import Profile from "@/components/Profile";
import { Button, Card, Grid } from "@mui/material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <Grid container>
          <Grid item>
            <Profile />
          </Grid>
          <Grid item>
            <div className="content"></div>
          </Grid>
        </Grid>
        <Button>Request Resume</Button>
      </Card>
    </main>
  );
}
