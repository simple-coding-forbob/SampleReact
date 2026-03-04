import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routers/router";


function App() {
  return (
    <>
      {/* 예제 1 */}
      {/* <Home /> */}
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
