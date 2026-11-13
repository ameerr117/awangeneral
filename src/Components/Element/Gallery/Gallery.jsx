import  { useState } from 'react';
import About1 from '../../../assets/About1.jpg';
import About2 from '../../../assets/About2.jpg';
import About3 from '../../../assets/About3.jpg';
import About4 from '../../../assets/About4.jpg';
import About5 from '../../../assets/About5.jpg';
import About6 from '../../../assets/About6.jpg';
import './Gallery.css';


const images = [About1, About2, About3, About4, About5, About6];

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setZoomed(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const toggleZoom = () => {
    setZoomed((prevZoomed) => !prevZoomed);
  };

  return (
    <div className="Full">
      
      <div className='Gallery'>
        <div className='Gallery4'>
          <img src={About1} alt="" onClick={() => openModal(0)} />
          <img src={About2} alt="" onClick={() => openModal(1)} />
          <img src={About3} alt="" onClick={() => openModal(2)} />
          <img src={About4} alt="" onClick={() => openModal(3)} />
        </div>
        
        <div className='Gallery2'>
          <img src={About5} alt="" onClick={() => openModal(4)} />
          <img src={About6} alt="" onClick={() => openModal(5)} />
        </div>
        <div className='Gallery5'>
          <img src={About1} alt="" onClick={() => openModal(0)} />
          <img src={About2} alt="" onClick={() => openModal(1)} />
          <img src={About3} alt="" onClick={() => openModal(2)} />
          <img src={About4} alt="" onClick={() => openModal(3)} />
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-button left" onClick={prevImage}>‹</button>
            <img
              src={images[currentIndex]}
              alt="Full Size Preview"
              className={`modal-image ${zoomed ? 'zoomed' : ''}`}
              onClick={toggleZoom}
            />
            <button className="modal-button right" onClick={nextImage}>›</button>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default Gallery;
