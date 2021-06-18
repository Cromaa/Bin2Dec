import React, { useState } from 'react'
import {
    SafeAreaView, 
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'

export default props => {
    const [result, setResult] = useState(0)
    const [binary, setBinary] = useState(0)

    const Calculate = () => {
        let aux = 0
        let aux1 = []

        let j = 0

        for(let i = binary.length - 1; i >= 0 ; i--){
            aux = binary[j] * Math.pow(2,i)
            aux1.push(aux)
            j = j + 1
        }

        setResult(aux1.reduce((total, num) => {return total + num}))
    }

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
                    onChangeText = {x => setBinary(x)}
                />
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity onPress = {Calculate} style = {styles.button}>
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
                <View style = {styles.resultContainer}>
                    <Text style = {styles.resultText}>
                        {result}
                    </Text>
                </View>
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
        fontSize: 20
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
    },
    resultContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '60%',
        height: 120,
        borderBottomWidth: 1,
        borderColor: 'slategray',
        marginVertical: 20,
    },
    resultText: {
        fontSize: 55,
        color: 'darkred'
    }
})