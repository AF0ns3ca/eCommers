import { Outlet } from "react-router-dom";
import MainHeader from "../organisms/MainHeader";

function App() {
   return (
      <div className="w-full flex flex-col">
         <MainHeader />
         <div className="pt-20 max-w-256 m-auto">
            <Outlet />
         </div>
      </div>
   );
}

export default App;
