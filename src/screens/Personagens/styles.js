import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   
    caixa: {
        height: "100%"
    },
    
    fundo: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo: {
        color: "white",
        fontWeight: "bold",
        fontSize: 35,
        textAlign: 'center'        
    },

    btn: {
        backgroundColor: "#9ACD32",
        marginTop: 50,
        paddingTop: 15,
        borderRadius: 10,
        alignContent: "center"
        
    },

    texto: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: 'center',
        paddingBottom: 8,
        
    },

    produto:{
        color: "white",
        fontWeight: "bold",
        fontSize: 27,
        padding: 10,
        paddingTop: 50
    },

})

export default styles;