import { StyleSheet } from 'react-native';

const styles = {}

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
        paddingVertical: 30
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

styles.spread = StyleSheet.create({
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
        width: '50%'     
    },
    txt: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'justify'
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    button: {
        marginTop: 10,
        elevation: 6,
        backgroundColor: "#006164",
        borderRadius: 15,
        paddingVertical: 7,
        paddingHorizontal: 12,
    },
    text: {
        fontSize: 12,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    home: {
        marginTop: 10,
        elevation: 6,
        backgroundColor: "#41A7A7",
        borderRadius: 15,
        paddingVertical: 7,
        paddingHorizontal: 12
    }
});

styles.rest = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',        
    },
    txt: {
        marginTop: '5%',
        marginLeft: 15,
        marginRight: 15,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'justify'
    },
    code: {
        color: 'white',
        backgroundColor: '#68ABAC',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        fontSize: 12,        
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'black'
    },
    nav: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    button: {
        elevation: 6,
        backgroundColor: "#006164",
        borderRadius: 15,
        paddingVertical: 7,
        paddingHorizontal: 12
    },
    text: {
        fontSize: 12,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    home: {
        elevation: 6,
        backgroundColor: "#41A7A7",
        borderRadius: 15,
        paddingVertical: 7,
        paddingHorizontal: 12
    }
});

styles.state = StyleSheet.create({
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
        paddingVertical: 30
    },
    text: {
        fontSize: 12,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        marginLeft: 10,
        marginRight: 10,        
        textTransform: "uppercase"
    },
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
    btn: {
        width: '40%'     
    },
    about: {
        width: '60%'
    },
    txt: {
        color: "black",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        fontWeight: 'bold'
    },
    code: {
        color: 'white',
        backgroundColor: '#68ABAC',        
        fontSize: 12,        
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'black',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    img: {
        height: 180
    }
});

export default styles;