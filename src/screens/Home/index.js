import React from 'react';
// import { View, Text, ImageBackground, TouchableOpacity,} from 'react-native';
import { View, Text, ImageBackground, TouchableOpacity, } from 'react-native';

import styles from './styles';

function Home({navigation}) {
    function personagens() {
        navigation.navigate("Personagens")
    }
    function login() {
        navigation.navigate("Login")
    }
    return(
        <View style={styles.caixa}>  
            <ImageBackground source={require("../../../assets/Shrek-3.jpg")} style={styles.fundo}>
                <View>
                    <Text style={styles.titulo}>
                        Galeria de personagens
                    </Text>

                    <TouchableOpacity style={styles.btn} onPress={personagens} >
                        <Text style={styles.texto}>
                            Personagens
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={login} >
                        <Text style={styles.texto}>
                            Login
                        </Text>
                    </TouchableOpacity>                    
                </View>
            </ImageBackground>    
        </View>
    )
}

export default Home;