import {Routes,Route} from "react-router-dom";
import {Home} from "../pages/Home/Home";
import {Result} from "../pages/Result/Result";

export const MyRoutes=()=>{
    return <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/res" element={<Result/>}></Route>
    </Routes>
}