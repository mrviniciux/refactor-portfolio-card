import Image from 'next/image';
import SocialMediaLink from '../SocialMediaLink';
import { Box } from '@mui/material';

const socialMediaLinks = [
  {
    href: 'https://wa.me/5548991913318',
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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      sx={{ width: '100%' }}
    >
      <Image
        width={176}
        height={176}
        sizes="(max-width: 600px) 144px, 176px"
        alt="Marcos Vinícius dos Santos"
        className="profile-img"
        src="/me.png"
        priority
        style={{
          width: 'clamp(132px, 15vw, 176px)',
          height: 'clamp(132px, 15vw, 176px)',
          objectFit: 'cover',
          borderRadius: '50%',
          border: '3px solid rgba(240, 138, 120, 0.72)',
          padding: 4,
          background: '#17151d',
        }}
      />
      <Box display="flex" justifyContent="center" gap={1} flexWrap="wrap">
        {socialMediaLinks.map((link, index) => (
          <SocialMediaLink
            href={link.href}
            src={link.src}
            alt={link.alt}
            key={link.alt + index}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Profile;
