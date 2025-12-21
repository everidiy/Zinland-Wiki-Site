import { Link } from 'react-router-dom';
import '../styles/Menu.css';
import '../styles/Download.css';
import { useState } from 'react';

export default function Menu() {
  const [downloadOpen, setDownloadOpen] = useState(false);

  const openDownload = () => {
    setDownloadOpen(true);
    document.body.style.overflow = 'hidden';
  }

  const closeDownload = () => {
    setDownloadOpen(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <div className="navbar">
      <div className="logo">
          <p>Zinland-Wiki</p>
      </div>
      <div className="choose">
          <p
          onClick={() => openDownload()}
          >Download</p>
        <a href="/characters" target='_blank' rel='noopener noreferrer'>
          Characters
        </a>
      </div>
      <div className="random">
        <p>Your totem</p>
      </div>

      {downloadOpen && (
          <Download 
              closeDownload={closeDownload}
          />
      )}
    </div>
  );
}

export function Download({ closeDownload }) {

  return (
    <div className="download-container" onClick={closeDownload}>
      <div className="download-modal" onClick={e => e.stopPropagation()}>
        <button className="download-close" onClick={closeDownload}>×</button>
        <h2>Are you ready to embark on a journey?</h2>
        <a href="/files/Zinland_Game_Word_v1.exe" download>
          Download Game
        </a>
      </div>
    </div>
  );
}