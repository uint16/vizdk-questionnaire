import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WorkflowHelper from './helpers/WorkflowHelper';

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-screen flex flex-col items-center justify-center">
        <WorkflowHelper/>
      </div>
    </QueryClientProvider>
  );
}

export default App;