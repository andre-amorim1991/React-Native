import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';

const user = {
    id: 1,
    email: "teste@teste.com",
    senha: "12345"    
    }    


function Login({navigation}) {

    function autenticacao() {

        if (user.email === usuario && user.senha === senha) {
            navigation.navigate("Home");
        }else {
        Alert.alert("Falha de login", "Email e senhas são personagens do Shrek!")
    }
}

    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");

    return(
        <View style={styles.caixa}>
            <ImageBackground source={require("../../../assets/Shrek-1.jpg")} style={styles.fundo}>           
                <View>
                    <Text style={styles.titulo1}>
                        Shrek
                    </Text>

                    <Text style={styles.titulo}>
                        Faça seu login:
                    </Text>
                </View>

                <View style={styles.inputs}>

                    <TextInput placeholder="Personagens Shrek..." style={styles.input} 
                        value={usuario} onChangeText={(text) => setUsuario(text)} />  
                
                    <TextInput placeholder="Senha numérica super dificil " style={styles.input} 
                        secureTextEntry={true} value={senha}
                        onChangeText={(text) => setSenha(text)} /> 

                    <TouchableOpacity style={styles.btn} onPress={autenticacao}>
                        <Text style={styles.texto}>
                            Entrar
                        </Text>
                    </TouchableOpacity>            
                </View>            
            </ImageBackground>
        </View>
    )
}

export default Login;