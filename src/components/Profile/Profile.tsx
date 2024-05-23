import { CircularProgress, Grid, LinearProgress } from "@mui/material";
import { useState } from "react";

type LoaderTypes = 'instagram' | 'github' | 'facebook' | 'linkedin' | 'spotify';

function Profile() {
    const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="profile">
      <img width={300} height={300} src="/me.png" />
      {isLoading && <Grid container direction={'column'} justifyContent={"center"} alignItems={"center"} spacing={1} padding={2}>
       <>
          <CircularProgress />
          <p>Aguarde, carregando...</p>
        </>
      
      </Grid>}
      
      <Grid container justifyContent={"center"} spacing={1} padding={2}>
        {!isLoading && (
          <>
            <Grid item>
              <a onClick={() => setIsLoading(true)} href="https://github.com/mrviniciux">
                <img width={50} height={50} src="/github.webp" />
              </a>
            </Grid>
            <Grid item>
              <a onClick={() => setIsLoading(true)} href="https://www.instagram.com/3nl1ght3dstr3am/">
                <img width={50} height={50} src="/instagram.webp" />
              </a>
            </Grid>
            <Grid item>
              <a onClick={() => setIsLoading(true)} href="https://web.facebook.com/httpmarks">
                <img width={50} height={50} src="/facebook.png" />
              </a>
            </Grid>
            <Grid item>
              <a onClick={() => setIsLoading(true)} href="https://www.linkedin.com/in/mrviniciux/">
                <img width={50} height={50} src="/linkedin.png" />
              </a>
            </Grid>
            <Grid item>
              <a onClick={() => setIsLoading(true)} href="https://open.spotify.com/user/12179331974?si=e884de4e8a034d7a">
                <img width={50} height={50} src="/spotify.png" />
              </a>
            </Grid>
         </>
      )}
      </Grid>
    </div>
  );
}

export default Profile;
