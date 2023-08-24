import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [projectData, getProjectData] = useState([]);

  useEffect(() => {
    fetch('https://chloegerry.github.io/chloe-gerry/projectsData.json')
      .then((response) => response.json())
      .then((data) => getProjectData(data.projects))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ projectData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
