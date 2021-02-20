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

    titulo1: {
        color: "white",
        fontWeight: "bold",
        fontSize: 35,
        textAlign: 'center',
        marginTop: 5
            
        },
   
    titulo: {
        color: "white",
        fontSize: 35,
        textAlign: 'center',
        
    },
    inputs:{
        width: "90%",
        padding: 8,
        alignItems: 'center'
    },
    input: {
        backgroundColor: "white",
        width: "90%",
        padding: 8,
        marginTop: 13,
        borderRadius: 10
    },
    btn: {
        backgroundColor: "#9ACD32",
        width: "90%",
        padding: 8,
        marginTop: 8,
        borderRadius: 10
    },
    
    texto: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: 'center'

    }
})

export default styles;