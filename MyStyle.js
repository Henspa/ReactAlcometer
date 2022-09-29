import { StyleSheet } from "react-native";

export const BasicTheme = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#4d004d',
        fontFamily: 'LatoRegular',
        fontSize: 50,
        fontWeight: 'bold',
    },
    switch: {
        marginBottom: 10,
        marginTop: 30,
        transform: [{scale:2}],
    },
    myThumbColor: '#990099',
    text: {
        color: '#4d004d',
        fontFamily: 'LatoRegular',
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 5,
        fontSize: 20,
        fontWeight: 'bold',
    },
    field: {
        margin: 10,
    },
    input: {
        width: 200,
        backgroundColor: '#ffe6ff',
        marginLeft: 10,

    },
    myInputStyleRounded: true,
    myInputColor: '#990099',
    myInputColor2: {
        color: '#ffffff',
    },    
    radio: {
        buttonSize: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    myRadioColor: '#990099',
    myLabelStyle: {
        fontWeight: 'bold',
        color: '#990099',
    },
    result: {
        //color: '#134d00',
        marginTop: 10,
        marginBottom: 20,
        fontSize: 50,
        fontWeight: 'bold',
    },
    result2: {
        //color: '#4d3900',
        marginTop: 10,
        marginBottom: 20,
        fontSize: 50,
        fontWeight: 'bold',
    },
    result3: {
        //color: '#4d1300',
        marginTop: 10,
        marginBottom: 20,
        fontSize: 50,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#990099',
        borderRadius: 10,
        margin: 20,
        padding: 20,
    },
    buttonText: {
        color: '#ffe6ff',
        fontWeight: 'bold',
        fontSize: 20
    },
});

export const FancyTheme = StyleSheet.create({
    container: {
        ...BasicTheme.container,
        backgroundColor: '#ffe6ff',
    },
    title: {
        ...BasicTheme.title,
    },
    switch: {
        ...BasicTheme.switch,
    },
    myThumbColor:{
        ...BasicTheme.MyThumbColor,
    },
    text: {
        ...BasicTheme.text,
    },
    field: {
        margin: 10,
    },
    input: {
        ...BasicTheme.input,
        backgroundColor: 'lightgray',
    },
    myInputColor: '#990099',
    myInputColor2: {
        ...BasicTheme.myInputColor2,
    },
    radio: {
        ...BasicTheme.radio,
    },
    myRadioColor: {
        ...BasicTheme.myRadioColor,
    },
    myLabelStyle: {
        ...BasicTheme.myLabelStyle,
    },
    result: {
        ...BasicTheme.result,
    },
    result2: {
        ...BasicTheme.result2,
    },
    result3: {
        ...BasicTheme.result3,
    },
    button: {
        ...BasicTheme.button,
    },
    buttonText: {
        ...BasicTheme.buttonText,
    }
});