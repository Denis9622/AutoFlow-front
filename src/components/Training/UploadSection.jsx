import { useState } from 'react';
import styles from './UploadSection.module.css';

function UploadSection() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setUploadMessage('');
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setUploadMessage('Please select a file to upload.');
      return;
    }

    setTimeout(() => {
      setUploadMessage(`File "${selectedFile.name}" uploaded successfully.`);
      setSelectedFile(null);
    }, 2000);
  };

  return (
    <div className={styles.uploadSection}>
      <h2>Upload Training Materials</h2>

      <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      <label htmlFor="fileInput" className={styles.fileLabel}>
        {selectedFile ? selectedFile.name : 'Choose a file'}
      </label>

      <button onClick={handleUpload} className={styles.uploadButton}>
        Upload
      </button>

      {uploadMessage && <p className={styles.uploadMessage}>{uploadMessage}</p>}
    </div>
  );
}

export default UploadSection;
