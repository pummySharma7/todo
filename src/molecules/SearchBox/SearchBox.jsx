
import { Button } from "../../atoms/Button/Button"
import {InputField} from "../../atoms/InputFiled/InputField"
import {useState} from "react";
import {v4 as uuid} from "uuid";
import {useDispatch} from "react-redux";
import {addTodo} from "../../Redux/action";

export const Search=(prop)=>{
    const [data,setData]=useState("");
    const dispatch=useDispatch();
    const obj={
        placeholder:prop.placeholder,
        type:prop.type? prop.type : "text"
    };
    const handlechange=(e)=>{
        setData(e.target.value)
    }

    const submitData=()=>{
        console.log("dfvdf")
       let payload={
           status:false,
           title:data,
           id:uuid(),
           mark:false
       }
       dispatch(addTodo(payload));
    }

    return <div>
        <InputField {...obj} onChange={handlechange}/>
        <Button onClick={submitData} text={prop.text}/>
    </div>
}