import React from 'react';
import Beautiful from './beautiful image.jpg';

export default function Body() {
    return (
        <div className="container">
            <img src={Beautiful} alt="Beautiful" className="background-image" />
            <p className="text">Love, Preserve and Conserve Wildlife.</p>
            <style>
            {`
                .container {
                    position: relative;
                    width: 100%;
                    height: 100vh; 
                    overflow: hidden; 
                }

                .background-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 90%;
                    object-fit: cover;
                    opacity:6; /* Ensure the image covers the whole container */
                }

                .text {
                    text-align:center;
                    transform: translate(-50%, -50%);
                    font-size: 30px;
                    color: revert-layer;
                    margin-left:550px;
                    margin-bottom:500px;
                }
            `}
            </style>
        </div>
    );
}
