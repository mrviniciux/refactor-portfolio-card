import { Box } from '@mui/material';
import Image from 'next/image';

interface SocialMediaLinkProps {
  href: string;
  src: string;
  alt: string;
}

function SocialMediaLink({ href, src, alt }: SocialMediaLinkProps) {
  return (
    <Box>
      <a
        className="social-media-link"
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={alt}
        style={{
          display: 'flex',
          width: 42,
          height: 42,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.08)',
          transition: 'background 160ms ease, transform 160ms ease',
        }}
      >
        <Image
          style={{
            width: 22,
            height: 22,
            objectFit: 'contain',
          }}
          src={src}
          alt={alt}
          width={22}
          height={22}
        />
      </a>
    </Box>
  );
}

export default SocialMediaLink;
