import Grid from '@mui/material/Grid';
import Image from 'next/image';

interface SocialMediaLinkProps {
  href: string;
  src: string;
  alt: string;
}

function SocialMediaLink({ href, src, alt }: SocialMediaLinkProps) {
  return (
    <Grid item xs={2} paddingRight={1}>
      <a className="social-media-link" href={href}>
        <Image
          style={{
            minWidth: '38px',
            maxWidth: '5vw',
            maxHeight: '4.5vh',
          }}
          src={src}
          alt={alt}
          width={10}
          height={10}
        />
      </a>
    </Grid>
  );
}

export default SocialMediaLink;