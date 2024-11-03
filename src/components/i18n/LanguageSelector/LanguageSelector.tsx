import React from 'react';
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';
import { useRouter } from 'next/router';
import Flag from 'react-world-flags';

interface LanguageSelectProps {}

const LanguageSelector: React.FC<LanguageSelectProps> = () => {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;

  const handleChange = (event: SelectChangeEvent<string>) => {
    const selectedLocale = event.target.value as string;
    router.push({ pathname, query }, asPath, { locale: selectedLocale });
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
