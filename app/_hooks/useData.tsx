'use client'

import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { CategoryType, getCategories, getProjects, ProjectType } from '@/app/_actions/queries';

// Define the shape of our context
interface DataContextType {
  projects: ProjectType[];
  categories: CategoryType[];
  isLoading: boolean;
  error: Error | null;
}

// Create the context with default values
const DataContext = createContext<DataContextType>({
  projects: [],
  categories: [],
  isLoading: false,
  error: null,
});

// Provider component
export function DataProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const projectData = await getProjects();
        const categoryData = await getCategories();
        setProjects(projectData);
        setCategories(categoryData);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      } finally {
        setIsLoading(false);
        console.log('Data fetched');
        console.log(projects);
        console.log(categories);
      }
    }

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const values = useMemo(() => ({
    projects,
    categories,
    isLoading,
    error
  }), [projects, categories, isLoading, error]);

  return (
    <DataContext.Provider value={values}>
      {children}
    </DataContext.Provider>
  );
}

// Custom hook to use the data context
export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
