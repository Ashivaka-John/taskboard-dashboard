import { createBrowserRouter } from 'react-router-dom';

// routing imports
import Tasks from './components/Tasks';
import Notes from './components/Notes';
import Statistic from './components/Statistic';
// import Example from './components/Example';
import CalenderPage from './components/CalenderPage';
import App from './App';


const CustomRouter = createBrowserRouter([
 {
  path: '/',
  element: <App />
 },
 {
  path: '/Tasks',
  element: <Tasks />
 },
 {
  path: '/Notes',
  element: <Notes />
 },
 {
  path: '/Statistics',
  element: <Statistic />
 },
 {
  path: '/Calendar',
  element: <CalenderPage />
 }
]);


export default CustomRouter;