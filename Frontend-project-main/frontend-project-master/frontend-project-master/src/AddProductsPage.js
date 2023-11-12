import React from 'react';
import  {useUserContext} from './userContext';
import NavigationBar from './NavigationBar';


export default function AddProductsPage() {
  const { isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin } = useUserContext();

    return (
        <div>
            <NavigationBar isLoggedIn={isLoggedIn} isAdmin={isAdmin}></NavigationBar>
            <input type='text' placeholder='Enter product Name'></input>
        </div>
    )
}