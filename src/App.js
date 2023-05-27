
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import IncrementCounter from './components/IncrementCounter';
import DecrementCounter from './components/DecrementCounter';
import {useSelector} from 'react-redux'
import Users from './components/Users';


function App() {

   let {counter}= useSelector(state=>state.counter)
  

  let browserRouter=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout />,
      children:[
        {
          path:'increment',
          element:<IncrementCounter />
        },
        {
          path:'decrement',
          element:<DecrementCounter />
        },
        {
          path:'users',
          element:<Users />
        }
      ]
    }
  ])
  
  return (
    <div className="App">
      <h1>Root</h1>
      <h2>Counter :{counter}</h2>
          <RouterProvider router={browserRouter} />
      
          
    </div>
  );
}

export default App;
