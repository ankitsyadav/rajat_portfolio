import { useState } from 'react';

export function FileExplorer({ files, activeFile, onFileClick }) {
  const [expandedFolders, setExpandedFolders] = useState(['projects', 'credentials']);

  const toggleFolder = (folderName) => {
    setExpandedFolders(prev => 
      prev.includes(folderName)
        ? prev.filter(f => f !== folderName)
        : [...prev, folderName]
    );
  };

  const isFolder = (name) => name.endsWith('/');
  const folderName = (name) => name.replace('/', '');

  return (
    <div className="file-explorer">
      <div className="file-explorer__header">
        <span className="file-explorer__title">EXPLORER</span>
      </div>
      <div className="file-explorer__content">
        <div className="file-explorer__project">
          <div className="file-explorer__project-header">
            <span className="file-explorer__chevron">▶</span>
            <span className="file-explorer__project-name">RAJAT_PORTFOLIO</span>
          </div>
          <div className="file-explorer__files">
            {files.map((file) => (
              <div key={file.name}>
                {isFolder(file.name) ? (
                  <>
                    <div 
                      className={`file-explorer__item folder ${expandedFolders.includes(folderName(file.name)) ? 'expanded' : ''}`}
                      onClick={() => toggleFolder(folderName(file.name))}
                    >
                      <span className="file-explorer__item-icon">
                        {expandedFolders.includes(folderName(file.name)) ? '📂' : '📁'}
                      </span>
                      <span className="file-explorer__item-name">{file.name}</span>
                    </div>
                    {expandedFolders.includes(folderName(file.name)) && (
                      <div className="file-explorer__folder-contents">
                        {/* Folder contents would go here */}
                      </div>
                    )}
                  </>
                ) : (
                  <div 
                    className={`file-explorer__item file ${activeFile === file.name ? 'active' : ''}`}
                    onClick={() => onFileClick(file)}
                  >
                    <span className="file-explorer__item-icon">{file.icon}</span>
                    <span className="file-explorer__item-name">{file.name}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}