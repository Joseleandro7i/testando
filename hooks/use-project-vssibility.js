import React, { useState } from 'react';

export default function useProjectVisibility(handleClickProjeto) {
    const [isVisibleProject, setIsVisibleProject] = useState(false);
  
    const toggleDescription = () => {
      setIsVisibleProject((previous) => !previous);
      handleClickProjeto();
    };
  
    const closeDescription = () => {
      setIsVisibleProject(false);
      handleClickProjeto();
    };
  
    return { isVisibleProject, toggleDescription, closeDescription };
  }

  