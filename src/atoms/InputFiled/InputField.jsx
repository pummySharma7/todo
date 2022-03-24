export const InputField=({placeholder,type,onChange})=>{
    const style={
        padding:"1%",
        color:"rgb(17, 17, 70)",
        border: "none",
        borderTopLeftRadius:"4px",
        borderBottomLeftRadius:"4px",
        outline:"none"
    }
    
    return <input style={style} onChange={onChange} placeholder={placeholder} type={type} />
}