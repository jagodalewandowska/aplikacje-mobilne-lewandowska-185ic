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
        paddingVertical: 25
    },
    text: {
        fontSize: 12,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    img: {
        height: 255,
    }
});

// ----------- Nawigacja - Screens ----------- //

styles.con = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        marginTop: 10,
        elevation: 6,
        backgroundColor: "#006164",
        borderRadius: 15,
        paddingVertical: 7,
        paddingHorizontal: 12
    },
    text: {
        fontSize: 12,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    },
    home: {
        marginTop: 10,
        elevation: 6,
        backgroundColor: "#41A7A7",
        borderRadius: 15,
        paddingVertical: 7,
        paddingHorizontal: 12,
    }
});

// ----------- Zawartość ----------- //

styles.body = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    ex: {        
        flexDirection: 'column',
        margin: '2%'
    },
    txt: {        
        fontWeight: 'bold',
        fontSize: 15,
        margin: '1%',  
    },
    input: {
        margin: 5,
        height: 35,
        borderColor: '#006164',
        borderWidth: 1,
        padding: '3%',
        fontSize: 13,
        width: '49%'       
    },
    input2: {
        margin: 5,
        borderColor: '#006164',
        borderWidth: 1,
        padding: '3%',
        fontSize: 13,
        width: '100%'
    },
    byside: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btn: {
        marginTop: 10,
        elevation: 6,
        backgroundColor: "#006164",
        paddingVertical: 10
    }
});

// ----------- Switch - Modal ----------- //

styles.modal = StyleSheet.create({
    center: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',        
    },
    centered: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 30,
        backgroundColor: '#006164',
        padding: '5%',
        borderRadius: 15,    },
    switch: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',   
        width: '100%' ,
        marginTop: 20
    },
    modal: {
        transform: [{ scaleX: 1.2 }, 
            { scaleY: 1.2 }],
    }
});

export default styles;