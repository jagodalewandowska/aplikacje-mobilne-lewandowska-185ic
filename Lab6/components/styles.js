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
        margin: '1%'
    },
    input: {
        margin: 5,
        height: 37,
        borderColor: '#006164',
        borderWidth: 1,
        padding: '3%',
        fontSize: 13,
        width: '49%'       
    },
    input2: {
        marginTop: '2%',
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

// -------------------------------------------- //

styles.first = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    ctr: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginTop: 20
    },
    about: {
        width: '49%'     
    },
    txt: {
        margin: 10,
        marginTop: 0,
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'justify'
    },
    mid: {
        backgroundColor: '#B5DFDF',
        padding: '4%',
        textAlign: 'justify',
        marginBottom: '3%'
    },
    img: {
        width: '100%',
        height: 200,
        aspectRatio: 1.9,
        borderColor: '#003768',
        borderWidth: 2,
        margin: '2%'
    },
    img2: {
        width: '100%',
        height: 250,
        borderColor: '#003768',
        borderWidth: 2,
        margin: '2%'
    },
    image: {
        flex: 1,
        height: 400,
        width: '100%'
    },
    icons: {
        flexDirection: 'row',
        margin: '2%',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    txt2: {
        padding: '3%',
        margin: '2%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    }
});

export default styles;