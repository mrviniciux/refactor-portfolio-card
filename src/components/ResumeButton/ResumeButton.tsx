import { Download } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useTranslations } from 'next-intl';

const handleDownload = () => {
  const fileName = 'NP-Resume-Marcos.pdf';
  const filePath = `/${fileName}`;

  const link = document.createElement('a');
  link.href = filePath;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function ResumeButton() {
  const translate = useTranslations('about');
  return (
    <Button
      onClick={handleDownload}
      variant="contained"
      color="secondary"
      startIcon={<Download />}
    >
      {translate('labels.requestresume')}
    </Button>
  );
}

export default ResumeButton;
