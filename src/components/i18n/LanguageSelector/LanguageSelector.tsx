'use client';

import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';
import Flag from 'react-world-flags';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

interface LanguageSelectProps {}

const LanguageSelector: React.FC<LanguageSelectProps> = () => {
  const router = useRouter();
  const locale = useLocale();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedLocale = event.target.value as string;
    router.push(`/${selectedLocale}`);
  };

  const languages = [
    {
      value: 'pt',
      code: 'BR',
      alt: 'Português',
    },
    {
      value: 'en',
      code: 'US',
      alt: 'English',
    },
    {
      value: 'ja',
      code: 'JP',
      alt: 'Japan',
    },
    {
      value: 'de',
      code: 'DE',
      alt: 'Germany',
    },
    {
      value: 'fr',
      code: 'FR',
      alt: 'Français',
    },
  ];

  return (
    <FormControl variant="outlined" size="small">
      <Select
        value={locale} // Idioma atual
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Select Language' }}
        sx={{
          width: 76,
          color: 'text.primary',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          borderRadius: 999,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.14)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.32)',
          },
          '& .MuiSvgIcon-root': {
            color: 'text.secondary',
          },
        }}
      >
        {languages.map((lang, index) => (
          <MenuItem value={lang.value} key={lang.alt + index}>
            <Flag code={lang.code} alt={lang.alt} width={24} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
