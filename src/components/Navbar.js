import React from 'react';
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav>
            <h1 className='job-name'>Wildlife Survillance</h1>
            <div className='flex-container'>
                <Link to="/home">Home</Link>
                <Link to="/record">Record</Link>
                <Link to="/contact">Contact</Link>
                
            </div>
        </nav>
    )
}
export default Navbar;
