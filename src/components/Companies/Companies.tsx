import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const companyLogos = [
  { src: '/ambev-logo.png', name: 'Ambev' },
  { src: '/blumenau-iluminacao.jpeg', name: 'Blumenau Iluminação' },
  { src: '/centauro-logo.png', name: 'Centauro' },
  { src: '/hemmer-logo.jpg', name: 'Hemmer' },
  { src: '/nike-logo.jpg', name: 'Nike' },
  { src: '/philips-logo.webp', name: 'Philips' },
];

function Companies() {
  const translate = useTranslations('companies');
  return (
    <Container maxWidth={false} sx={{ p: { xs: 2.5, md: 4 } }}>
      <Stack spacing={0.75} mb={2}>
        <Typography
          id="companies-title"
          component="h2"
          variant="h5"
          sx={{ fontWeight: 700 }}
        >
          {translate('title')}
        </Typography>
        <Typography color="text.secondary" variant="body2">
          {translate('descriptionCompany')}
        </Typography>
      </Stack>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={{ xs: 1.5, md: 2 }}
      >
        {companyLogos.map((logo) => (
          <Grid item key={logo.name}>
            <Box
              sx={{
                width: { xs: 112, md: 138 },
                height: { xs: 72, md: 84 },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 1.5,
                borderRadius: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.94)',
              }}
            >
              <Image
                data-testid="company-logo"
                alt={`${logo.name} logo`}
                width={110}
                height={64}
                src={logo.src}
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: 110,
                  maxHeight: 64,
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Companies;
