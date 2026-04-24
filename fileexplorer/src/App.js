import logo from './logo.svg';
import './App.css';
import FileExplorer from './Components/FileExplorer';
import data from "./data.js"
import useTreeTravere from './hooks/use-traverse.js';
import { useState } from 'react';
function App() {
   const [explorerData,setExplorerData]=useState(data)
    const {insertNode,deleteNode}=useTreeTravere()
   const handleInsertNode=(folderId,item,isFolder)=>{
    
    
    const finalTree=insertNode(explorerData,folderId,item,isFolder)
   setExplorerData(finalTree)
   }
   const handleDeleteNode=(folderId)=>{
    
    
    const finalTree=deleteNode(explorerData,folderId)
    console.log("final",finalTree);
    
   setExplorerData(finalTree)
   }
  
  return (
    <FileExplorer folderData={explorerData} 
    insertNode={insertNode} 
    handleInsertNode={handleInsertNode}
      handleDeleteNode={handleDeleteNode}
    />
  );
}

export default App;
