import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [portfolioData, getPortfolioData] = useState({
    projects: [],
    technologies: [],
    tools: [],
  });

  useEffect(() => {
    fetch('https://chloegerry.github.io/chloe-gerry/portfolioData.json')
      .then((response) => response.json())
      .then((data) =>
        getPortfolioData({
          projects: data.projects,
          technologies: data.technologies,
          tools: data.tools,
        })
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ portfolioData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
