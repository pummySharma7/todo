import { useSelector } from "react-redux"
import { Card } from "../../molecules/Card/Card";
export const Result=()=>{
    const marked=useSelector((state)=>state.todo).filter(e=>e.mark);
    console.log(marked);
    return <div>
        <Card data={marked}/>
    </div>
}