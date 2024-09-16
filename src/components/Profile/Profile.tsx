import Image from 'next/image';
import SocialMediaLink from '../SocialMediaLink';
import Grid from '@mui/material/Grid';

const socialMediaLinks = [
  {
    href: 'https://wa.me/5573999811133',
    src: '/whatsapp.png',
    alt: 'Whatsapp',
  },
  {
    href: 'https://github.com/mrviniciux',
    src: '/github.webp',
    alt: 'GitHub',
  },
  {
    href: 'https://www.instagram.com/mrviniciux/',
    src: '/instagram.webp',
    alt: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/in/mrviniciux/',
    src: '/linkedin.png',
    alt: 'LinkedIn',
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
        src={'/me.png'}
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
