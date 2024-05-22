import { Download } from "@mui/icons-material";
import { Button} from "@mui/material";

const handleDownload = () => {
  const filePath = '/marcos_vinicius_dos_santos_curriculo.pdf';

  const link = document.createElement('a');
  link.href = filePath;
  link.setAttribute('download', 'marcos_vinicius_dos_santos_curriculo.pdf'); 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function ResumeButton() {
  return ( 
    <Button onClick={handleDownload} variant="contained" color="secondary" startIcon={<Download />}>Request Resume</Button>
   );
}

export default ResumeButton;