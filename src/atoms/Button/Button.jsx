export const Button=(prop)=>{
    const btn={
        // margin: "1%",
        padding:"1%",
        backgroundColor: "rgb(17, 17, 70)",
        color:"white",
        borderRadius:"4px"
    }
    return <button style={btn} onClick={prop.onClick}>
       {prop.text}
    </button>
}