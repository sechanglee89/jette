import { useEffect } from 'react';
import Layout from './components/Layout'
import './App.css'

const App = () => {
  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      window.history.replaceState(null, '', redirectPath);
    }
  }, []);

  return (
    <Layout />
  )
}

export default App