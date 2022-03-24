
export const Button=(prop)=>{
    return <button onClick={prop.onClick}>
       {prop.text}
    </button>
}