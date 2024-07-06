import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './AllUser/RootLayout';
import Home from './Pages/Home';
import SingleRoom from './Pages/SingleRoom';



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>

        <Route index element={<Home />} />

        <Route
          path="/singleroom"
          element={<SingleRoom />}
        />
      </Route>
    )
  );


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App