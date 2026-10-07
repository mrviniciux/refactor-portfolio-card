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
        width={768}
        height={1024}
        sizes="(max-width: 600px) 60vw, 220px"
        alt="Marcos Vinícius dos Santos"
        className="profile-img"
        src="/me.png"
        priority
        style={{
          width: 'clamp(160px, 18vw, 220px)',
          height: 'auto',
          objectFit: 'contain',
          borderRadius: 18,
          border: '2px solid rgba(240, 138, 120, 0.72)',
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.3)',
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
