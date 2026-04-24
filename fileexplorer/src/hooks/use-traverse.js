const useTreeTravere = () => {

  function insertNode(tree, folderId, item, isFolder) {
    
    // ✅ case 1: match found
    if (tree.id === folderId && tree.isFolder) {
      return {
        ...tree,
        items: [
          {
            id: new Date().getTime().toString(),
            name: item,
            isFolder,
            items: []
          },
          ...tree.items
        ]
      };
    }

    // ✅ case 2: traverse children
    return {
      ...tree,
      items: tree.items.map((child) =>
        insertNode(child, folderId, item, isFolder)
      )
    };
  }
 let deletedIndex;
  function deleteNode(tree, folderId) {
  if (!tree.items) return tree;

  let newItems = [];

  for (let i = 0; i < tree.items.length; i++) {
    const child = tree.items[i];

    // ✅ delete here
    if (child.id === folderId) {
      // skip this child (deleted)
      // and STOP further processing
      return {
        ...tree,
        items: [...newItems, ...tree.items.slice(i + 1)]
      };
    }

    // ✅ recurse
    const updatedChild = deleteNode(child, folderId);

    newItems.push(updatedChild);
  }

  return {
    ...tree,
    items: newItems
  };
}

  return { insertNode,deleteNode };
};

export default useTreeTravere;