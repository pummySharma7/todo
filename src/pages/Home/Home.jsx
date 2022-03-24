import { Card } from "../../molecules/Card/Card"
import { Search } from "../../molecules/SearchBox/SearchBox"
import {useSelector} from "react-redux";

export const Home=()=>{
    let todo=useSelector((state)=>state.todo)
    return <div>
        <Search placeholder="Enter youtr task" text="add"/>
        <Card data={todo}/>
    </div>
} 