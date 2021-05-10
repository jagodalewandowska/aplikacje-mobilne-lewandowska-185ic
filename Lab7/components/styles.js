import { StyleSheet } from 'react-native';

const styles = {}

// ------------ Nawigacja - Home ------------ //

styles.home = StyleSheet.create({
    nav: {
        flex: 1,
    },
    panels: {   
        flex: 1,
        backgroundColor: '#ecf5fd',
    },
    button: {
        marginTop: 10,
        elevation: 6,
        backgroundColor: "#006164",
        paddingVertical: 20
    },
    text: {
        fontSize: 12,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    img: {
        height: 160,
    }
});

// ----------- Baza danych ----------- //

styles.db = StyleSheet.create({    
    container: {
        backgroundColor: "white",
        flex: 1,
        paddingTop: 12,
        borderRightWidth: 1
    },
    col: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    shopping: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: '2%'
    },
    flexRow: {
        flexDirection: 'row',
    },
    input: {
        borderColor: "#006164",
        borderWidth: 3,
        flex: 1,
        height: 50,
        margin: 10,
        padding: 15,
        marginBottom: '5%'
    },
    shoppingList: {
        backgroundColor: "#B5DFDF",
        flex: 1,
        paddingTop: 16,
    },
    con: {    
        marginBottom: 20,
        marginHorizontal: 20,
    },
    txt: {
        fontSize: 12,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        marginBottom: 20
    }
});

export default styles;