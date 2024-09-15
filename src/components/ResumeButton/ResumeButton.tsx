import { Download } from '@mui/icons-material';
import { Button } from '@mui/material';

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
  return (
    <Button
      onClick={handleDownload}
      variant="contained"
      color="secondary"
      startIcon={<Download />}
    >
      Request Resume
    </Button>
  );
}

export default ResumeButton;
