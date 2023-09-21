import { Provider } from 'react-redux';
import './App.css';
import Body from './component/Body';
import Header from './component/Header';
import store from './utils/store';
import MainContainer from './component/MainContainer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchContainer from './component/WatchContainer';

const appRouter = createBrowserRouter([{
  path:'/',
  element : <Body/>,
  children:[
    {
      path:'/',
      element:<MainContainer/>
    },
    {
      path:'watch',
      element:<WatchContainer/>
    }
  ]
}]);
function App() {
  return (
    <Provider store={store}>
    <div >
      <Header/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
