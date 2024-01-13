import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import store from './utils/store';
import Header from './components/Header.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const appRouter=createBrowserRouter([{
  path:'/',
  element:<Body/>,
  children:[
    {
    path:'/',
    element:<MainConatiner/>
    },
    {
      path:'watch',
      element:<WatchPage/>
    }

  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header/>
        <RouterProvider router={appRouter}/> 
      </div>
    </Provider>
  );
}

export default App;