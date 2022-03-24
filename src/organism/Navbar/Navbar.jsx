import {Link} from "react-router-dom";
export const Navbar=()=>{

    const divStyle={
        display: "flex",      
        justifyContent:"space-evenly"
    }

    const atagStyle={
        textDecoration: "none",
        
    }

    return <div style={divStyle}>
        <Link style={atagStyle} to="/">Home</Link>
        <Link style={atagStyle} to="/res">Result</Link>
    </div>
}