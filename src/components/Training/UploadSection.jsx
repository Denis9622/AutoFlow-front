import { useState } from 'react';
import styles from './UploadSection.module.css';

function UploadSection() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
    setUploadMessage('');
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setUploadMessage('Выберите файл для загрузки.');
      return;
    }

    setTimeout(() => {
      setUploadMessage(`Файл "${selectedFile.name}" успешно загружен.`);
      setSelectedFile(null);
    }, 2000);
  };

  return (
    <div className={styles.uploadSection}>
      <h2>Загрузка обучающих материалов</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className={styles.uploadButton}>
        Загрузить
      </button>
      {uploadMessage && <p className={styles.uploadMessage}>{uploadMessage}</p>}
    </div>
  );
}

export default UploadSection;
