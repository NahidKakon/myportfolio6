// components/ImageZoom.js
import { useState } from 'react';
import Image from 'next/image';

const ImageZoom = ({ src, alt, width, height }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const openModal = () => setIsZoomed(true);
  const closeModal = () => setIsZoomed(false);

  return (
    <div>
      {/* Thumbnail Image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onClick={openModal}
        style={{ cursor: 'pointer' }}
      />

      {/* Modal for Zoomed Image */}
      {isZoomed && (
        <div style={styles.modal} onClick={closeModal}>
          <div style={styles.modalContent}>
            <Image src={src} alt={alt} width={width * 2} height={height * 2} />
          </div>
        </div>
      )}
    </div>
  );
};

// Styles for modal
const styles = {
  modal: {
    display: 'flex',
    position: 'fixed',
    zIndex: 1000,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  modalContent: {
    maxWidth: '80%',
    maxHeight: '80%',
  },
};

export default ImageZoom;
