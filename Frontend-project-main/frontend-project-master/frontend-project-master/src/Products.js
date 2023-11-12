import React from 'react';
import NavigationBar from './NavigationBar';
import UserContext, {useUserContext} from './userContext';


export default function ProductsPage() {
  const { isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin } = useUserContext();

    return (
        <div>
            <NavigationBar isLoggedIn={isLoggedIn} isAdmin={isAdmin}></NavigationBar>
            <h3>Products page</h3>
        </div>
    );
}