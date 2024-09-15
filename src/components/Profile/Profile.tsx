import { Grid } from '@mui/material';
import { ProfileStyled, GridSocialMediaStyled } from './Profile.styled';

function Profile() {
  return (
    <ProfileStyled>
      <img className="profile-img" src="/me.png" />
      <GridSocialMediaStyled
        display={'flex'}
        justifyContent={'space-evenly'}
        flexWrap={'nowrap'}
        paddingTop={2}
      >
        <Grid item xs={2} paddingRight={1}>
          <a className="social-media-link" href="https://github.com/mrviniciux">
            <img src="/github.webp" />
          </a>
        </Grid>
        <Grid item xs={2} paddingRight={1}>
          <a
            className="social-media-link"
            href="https://www.instagram.com/3nl1ght3dstr3am/"
          >
            <img src="/instagram.webp" />
          </a>
        </Grid>
        <Grid item xs={2} paddingRight={1}>
          <a
            className="social-media-link"
            href="https://web.facebook.com/httpmarks"
          >
            <img src="/facebook.png" />
          </a>
        </Grid>
        <Grid item xs={2} paddingRight={1}>
          <a
            className="social-media-link"
            href="https://www.linkedin.com/in/mrviniciux/"
          >
            <img src="/linkedin.png" />
          </a>
        </Grid>
        <Grid item xs={2}>
          <a
            className="social-media-link"
            href="https://open.spotify.com/user/12179331974?si=e884de4e8a034d7a"
          >
            <img src="/spotify.png" />
          </a>
        </Grid>
      </GridSocialMediaStyled>
    </ProfileStyled>
  );
}

export default Profile;
