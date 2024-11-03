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

  return (
    <FormControl variant="outlined" size="small">
      <Select
        value={locale} // Idioma atual
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Select Language' }}
        style={{ width: 70 }}
      >
        <MenuItem value="pt">
          <Flag code="BR" alt="Português" width={24} />
        </MenuItem>
        <MenuItem value="en">
          <Flag code="US" alt="English" width={24} />
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
