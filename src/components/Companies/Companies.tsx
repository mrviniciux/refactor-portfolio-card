import { Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const companyLogos: string[] = [
  '/ambev-logo.png',
  '/blumenau-iluminacao.jpeg',
  '/centauro-logo.png',
  '/hemmer-logo.jpg',
  '/nike-logo.jpg',
  '/philips-logo.webp',
];

function Companies() {
  return (
    <Container>
      <Typography variant="h5" paddingTop={2} paddingBottom={2}>
        Companies
      </Typography>
      <Grid
        container
        alignItems={'center'}
        justifyContent={'center'}
        spacing={5}
        padding={2}
      >
        {companyLogos.map((logo, index) => (
          <Grid item>
            <Image alt="123" width={100} height={100} src={logo} key={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Companies;
