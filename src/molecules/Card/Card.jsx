
import {Button} from "./../../atoms/Button/Button";
import {useDispatch} from "react-redux";
import { deleteTodo,markTodo,toggleTodo,getTodo} from "./../../Redux/action";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const Card=(data)=>{
    console.log(data);
    const dispatch = useDispatch();
    const handleEnd=(result)=>{
        console.log(result);
        const items = Array.from(data.data);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        console.log(items);
        dispatch(getTodo(items))
    }
    
    return <div >
        <DragDropContext onDragEnd={handleEnd}>
    <Droppable droppableId="characters">
        {(provided)=>(
            <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {data.data.map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={item.id.toString()}
                index={index}
              >
                {(provided, snapshot) => (
                  <li
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    key={item.id}
                    className={
                      snapshot.isDragging ? "selected" : "not-selected"
                    }
                  >
                    <input type="checkbox" defaultChecked={item.mark} onChange={()=>dispatch(markTodo(item.id))} />
                    {index + 1}.{item.title}
                    <Button text={item.status?"True" : "False"} onClick={()=>dispatch(toggleTodo(item.id))}/>
                    <Button text="delete" onClick={()=>dispatch(deleteTodo(item.id))}/>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            </ul>
        )
           
        }
    </Droppable>
    </DragDropContext>
    </div>
}



// data.data.map((e,i)=>
// <ul key={e.id}>
//     <Draggable
//     key={e.id}
//     draggableId={e.id.toString()}
//     index={i}>
//     <li>
//     <div style={{display: 'flex'}}>
//     <input type="checkbox" defaultChecked={e.mark} onChange={()=>dispatch(markTodo(e.id))} />
//     <div>
//     {e.title}
//     </div>
//     </div>
//     <div onClick={()=>dispatch(toggleTodo(e.id))}>
//         status:{e.status?"  True":"  False"}
//     </div>
//     <Button text="delete" onClick={()=>dispatch(deleteTodo(e.id))}/>
//     </li>
//     </Draggable>
    
// </ul>    
// )