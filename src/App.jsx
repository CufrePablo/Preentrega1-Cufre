
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './Components/ItemListContainerComponente';

function App() {
    return (
        <>
            <NavBar></NavBar>
            <ItemListContainer greeting={"Bienvenidos a mi ecommerce de cortinas"}></ItemListContainer>
            
            </>
    );
}

export default App;
