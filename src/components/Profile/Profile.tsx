import profilePic from '../../../public/me.png';

import Image from 'next/image';
import SocialMediaLink from '../SocialMediaLink';
import Grid from '@mui/material/Grid';

const socialMediaLinks = [
  {
    href: 'https://github.com/mrviniciux',
    src: '/github.webp',
    alt: 'GitHub',
  },
  {
    href: 'https://www.instagram.com/3nl1ght3dstr3am/',
    src: '/instagram.webp',
    alt: 'Instagram',
  },
  {
    href: 'https://web.facebook.com/httpmarks',
    src: '/facebook.png',
    alt: 'Facebook',
  },
  {
    href: 'https://www.linkedin.com/in/mrviniciux/',
    src: '/linkedin.png',
    alt: 'LinkedIn',
  },
  {
    href: 'https://open.spotify.com/user/12179331974?si=e884de4e8a034d7a',
    src: '/spotify.png',
    alt: 'Spotify',
  },
];

function Profile() {
  return (
    <div>
      <Image
        width={100}
        style={{ maxWidth: '15vw', minWidth: '222px' }}
        height={100}
        sizes="100vw"
        alt="profile-image"
        className="profile-img"
        src={profilePic}
      />
      <Grid
        display={'flex'}
        justifyContent={'space-evenly'}
        flexWrap={'nowrap'}
        paddingTop={2}
      >
        {socialMediaLinks.map((link, index) => (
          <SocialMediaLink
            href={link.href}
            src={link.src}
            alt={link.alt}
            key={link.alt + index}
          />
        ))}
      </Grid>
    </div>
  );
}

export default Profile;
