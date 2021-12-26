import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from "react-router-dom"
import { RecoilRoot } from 'recoil';
import './index.css'
import App from './App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    }
  },
})

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </RecoilRoot>  
  </QueryClientProvider>,
  document.getElementById('root')
);
