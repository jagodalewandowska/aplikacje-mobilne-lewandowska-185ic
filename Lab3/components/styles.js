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
        paddingVertical: 37
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

styles.sort = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    ctr: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        justifyContent: 'space-around'
    },
    txt: {        
        fontWeight: 'bold',
        fontSize: 15,
        alignSelf: "center",
        margin: '2%',
        padding: '2%',        
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
    },
    btn: {
        marginTop: 10,
        elevation: 6,
        backgroundColor: '#17868F',
        paddingVertical: 15,
        paddingHorizontal: 10,  
        color: 'white'      
    },
    nums: {
        flex:1,
        padding: 2,
        margin: 2,
        backgroundColor: '#41A7A7',
        paddingVertical: 15,
        paddingHorizontal: '40%',
        alignSelf: "center",
    },
    loaded: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '3%',
        padding: '5%',
        justifyContent: 'space-around',
        backgroundColor: '#41A7A7',
        color: 'white'
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
        color: "white",
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
        marginLeft: 10
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
    },
    steps: {
        color:'#17868F',
    }
});

export default styles;