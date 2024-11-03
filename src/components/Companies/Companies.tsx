import { Container, Grid, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
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
  const translate = useTranslations('companies');
  return (
    <Container>
      <Typography variant="h5" paddingTop={2} paddingBottom={2}>
        {translate('title')}
      </Typography>
      <Grid
        container
        alignItems={'center'}
        justifyContent={'center'}
        spacing={5}
        padding={2}
      >
        {companyLogos.map((logo, index) => (
          <Grid item key={index}>
            <Image
              data-testid="company-logo"
              alt="123"
              width={100}
              height={100}
              src={logo}
              key={index}
            />
          </Grid>
        ))}
      </Grid>
      <Typography variant="caption" paddingLeft={5}>
        {translate('descriptionCompany')}
      </Typography>{' '}
    </Container>
  );
}

export default Companies;
