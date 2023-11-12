import React from "react";
import NavigationBar from "./NavigationBar";
import { Typography } from '@mui/material';
import './HomePage.css';

export default function HomePage() {
    return (
        <fragment>
            <div>
                <NavigationBar isLoggedIn={false} isAdmin={false}></NavigationBar> <br></br> <br></br> <br></br> <br></br><br></br> <br></br><br></br> <br></br>
            </div>
            <div>
                <Typography className='homeText' variant="h1">Welcome to upGrad Eshop..! Please login to continue shopping..!</Typography>
            </div>
        </fragment>
    )
}