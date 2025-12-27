import '../styles/Title.css';
import '../styles/Download.css';
import { useState } from 'react';

export default function Title() {
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
        <div className="title">
            <h1>Enter the World of Zinland</h1>
            <p>Heroes, monsters and words await</p>
            <button className="play-btn" onClick={() => openDownload()}>Download</button>

            {downloadOpen && (
          <Download 
              closeDownload={closeDownload}
          />
      )}
        </div>
    )
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