import React from 'react';
import{ View, Text, ImageBackground, TouchableOpacity, } from 'react-native';

import styles from './styles';

const produtos = [
    {
        nome: "Shrek",
    },
    {
        nome: "Burro"
    },
    {
        nome: "Fiona"
    },
    {
        nome: "Gato de botas"
    },
]

function Personagens({navigation}) {
    function Login() {
        navigation.navigate("Login")
    }
    function home(){
        navigation.navigate("Home")
    }
    return(  
        <View style={styles.caixa}>
            <ImageBackground source={require("../../../assets/favoritos.jpg")} style={styles.fundo}>
                <View style={styles.caixa}>

                    <Text style={styles.titulo}>
                        Os favoritos
                    </Text>
                            {
                                produtos.map((produto) => <Text style={styles.produto}>{produto.nome}</Text>)
                            }

                    <TouchableOpacity style={styles.btn}
                        onPress={home} >
                        <Text style={styles.texto}>Principal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}
                        onPress={Login} >
                        <Text style={styles.texto}>Fooraaaa Burrooooo</Text>
                    </TouchableOpacity>
                </View>     

            </ImageBackground>
        </View>
    )
}

export default Personagens;