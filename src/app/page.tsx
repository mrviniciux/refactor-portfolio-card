
import { Button, Card, Grid } from "@mui/material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <Grid container>
          <Grid item>
            <div className="profile">
              <img width={300} height={300} src="/me.png" />

              <Grid container justifyContent={'center'} spacing={1} padding={2}>
                <Grid item>
                  <a href="#"><img width={50} height={50} src="/github.webp" /></a>
                </Grid>
                <Grid item>
                  <a href="#"><img width={50} height={50} src="/instagram.webp" /></a>
                </Grid>
                <Grid item>
                  <a href="#"><img width={50} height={50} src="/facebook.png" /></a>
                </Grid>
                <Grid item>
                  <a href="#"><img width={50} height={50} src="/linkedin.png" /></a>
                </Grid>
                <Grid item>
                  <a href="#"><img width={50} height={50} src="/spotify.png" /></a>
                </Grid>
              </Grid>
            </div>
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
