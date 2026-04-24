import React, { useState } from 'react'
import useTreeTravere from '../hooks/use-traverse';

function FileExplorer({ folderData, handleInsertNode,handleDeleteNode }) {
  const [open, setOpen] = useState(false);

  const [showInput, setShowInput] = useState({
    isFolder: false,
    visible: false
  });

  const handleAddNewFolder = (isFolder) => {
    setOpen(true);
    setShowInput({
      visible: true,
      isFolder
    });
  };

  const onAddNewFolder = (e) => {
    if (e.key === "Enter" && e.target.value) {
      handleInsertNode(folderData.id, e.target.value, showInput.isFolder);

      setShowInput({
        visible: false,
        isFolder: false
      });
    }
  };

  // ✅ file case
  if (!folderData?.isFolder) {
    return <div>📄 {folderData?.name}<div onClick={(e)=>handleDeleteNode(folderData?.id,e.target.value,showInput.isFolder)}>x</div></div>;
  }

  return (
    <div className="container">
      <h5>
        {open ? "📂" : "📁"}
        <span onClick={() => setOpen(prev => !prev)}>
          {folderData.name}<div onClick={(e)=>handleDeleteNode(folderData?.id)}>x</div>
        </span>

        <button onClick={() => handleAddNewFolder(false)}>File +</button>
        <button onClick={() => handleAddNewFolder(true)}>Folder +</button>
      </h5>

      {showInput.visible && (
        <input
          autoFocus
          onKeyDown={onAddNewFolder}
          onBlur={() => {
            
              setShowInput({ visible: false, isFolder: false });
           
          }}
        />
      )}

      {open &&
        folderData.items.map((child) => (
          <FileExplorer
            key={child.id}
            folderData={child}
            handleInsertNode={handleInsertNode}
            handleDeleteNode={handleDeleteNode}
          />
        ))}
    </div>
  );
}
export default FileExplorer
