import React from 'react';
import  { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Personagens from '../screens/Personagens';
const Rotas = {

    Login: {
        name: "Login",
        screen: Login
    },
    
    Home: {
        name: "Home",
        screen: Home
    },
    
    Personagens: {
        name: "Personagens",
        screen: Personagens
    },

}

const Navegacao = createSwitchNavigator(Rotas);

export default createAppContainer(Navegacao);