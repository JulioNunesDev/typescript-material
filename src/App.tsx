
import {BrowserRouter} from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/contexts/ThemeContexts';


export const App =()=> {
  return (
    <AppThemeProvider>


    <BrowserRouter>
    <AppRoutes/>
    </BrowserRouter>

    </AppThemeProvider>
    
  );
}

