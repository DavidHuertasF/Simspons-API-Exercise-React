import {Link} from "react-router-dom";


const Nav = () => {
    return (<div>
    <Link to={`/`}>Home</Link>
        <br/>
        <br/>
    <Link to={`/category/ninos`}>ninos</Link>
    <br/>
    <br/>

    <Link to={`/category/adulto`}>Adultos</Link>
    <br/>
    <br/>
            
    </div>)
}

export default Nav;