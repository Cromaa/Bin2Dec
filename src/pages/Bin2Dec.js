import React from 'react'
import {
    SafeAreaView, 
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'

export default props => {
    return (
        <SafeAreaView style = {styles.container}>
            <View style = {styles.titleContainer}>
                <Text style = {styles.title}>
                    Binary to Decimal
                </Text>
                <Text style = {styles.subtitle}>
                    Converter
                </Text>
            </View>
            <View style = {styles.form}>
                <Text style = {styles.description}>
                    Enter your binary number of up to 8 digits
                </Text>
                <View style = {styles.separator}/>
                <Text style = {styles.emoji}>
                    🧐
                </Text>
                <TextInput 
                    placeholder = 'Binary number here...' 
                    keyboardType = 'numeric' 
                    style = {styles.input}
                />
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.txtButton}>
                            Convert
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.txtButton}>
                            Reset
                        </Text>
                    </TouchableOpacity>
                </View>
                <TextInput 
                    placeholder = 'Decimal number here...'
                    keyboardType = 'numeric'  
                    style = {styles.input}
                    editable = {false}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 15,
    },
    title: {
        fontSize: 45,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 30,
        textAlign: 'right',
        marginTop: -20,
        marginBottom: 20
    },
    description: {
        fontSize: 15,
        color: 'dimgrey',
        marginBottom: 30
    },
    button: {
        width: 120,
        height: 50,
        borderRadius: 8,
        marginHorizontal: 5,
        backgroundColor: 'slategray',
        justifyContent: 'center'
    }, 
    txtButton: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }, 
    form: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderBottomWidth: 1,
        marginVertical: 40,
        borderColor: 'slategray',
        width: 300, 
    },
    emoji: {
        fontSize: 25,
        marginTop: -15,
        paddingHorizontal: 10,
        backgroundColor: 'whitesmoke'
    },
    separator: {
        borderWidth: 0.5,
        borderColor: 'grey',
        width: '80%',
    }
})