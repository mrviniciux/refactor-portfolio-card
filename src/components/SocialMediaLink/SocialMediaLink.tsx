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
          }}
          src={src}
          alt={alt}
          width={30}
          height={30}
        />
      </a>
    </Grid>
  );
}

export default SocialMediaLink;
