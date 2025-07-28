import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import MainLayout from "../MainLayout";
const roues=createBrowserRouter(
    [
        {
            path:"/",
            element:<MainLayout/>,
            children:[
                {
                    index:"/",
                    element:<Home/>,
                },
                
                {
                    path:"/Contact",
                    element:<Contact/>}
            ]
        
        }
    ]
)


export default function Approutes() {
  return (
          <RouterProvider router={roues}/>
  )
}
