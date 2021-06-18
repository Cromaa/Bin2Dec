import React, { useState } from 'react'
import {
    SafeAreaView, 
    View, 
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native'

export default props => {
    const [result, setResult] = useState(0)
    const [binary, setBinary] = useState(0)
    const [reaction, setReaction] = useState('🤔')
    const [warningMsg, setWarningMsg] = useState('')

    const Calculate = () => {     
        let aux = 0
        let aux1 = []
        let j = 0

        if(binary == ''){
            setWarningMsg('Please enter the number to convert')
            setReaction('😥')
            setResult(0)
        } else if(binary.includes(2 || 3 || 4 || 5 || 6 || 7 || 8 || 9)){
            setWarningMsg("A binary number can only contain 0's or 1's ")
            setReaction('😮')
            setResult(0)
        } else {
            setWarningMsg('Congrats! Check the result down there')
            setReaction('🥳')
            for(let i = binary.length - 1; i >= 0 ; i--){
                aux = binary[j] * Math.pow(2,i)
                aux1.push(aux)
                j = j + 1
            }
            setResult(aux1.reduce((total, num) => {return total + num}))
        }
    }

    return (
        <SafeAreaView style = {styles.container}>
            <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
                <View style = {styles.content}>
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
                            Enter your binary number of up to 24 digits {'\n'} without spaces
                        </Text>
                        <View style = {styles.separator}/>
                        <Text style = {styles.emoji}>
                            {reaction}
                        </Text>
                        <Text style = {styles.warningMsg}>
                            {warningMsg}
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
                        </View>
                        <View style = {styles.resultContainer}>
                            <Text style = {styles.resultText}>
                                {result}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
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
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 30,
        textAlign: 'right',
        marginTop: -20,
        marginRight: 25
    },
    description: {
        fontSize: 15,
        color: 'dimgrey',
        marginBottom: 30,
        textAlign: 'center'
    },
    button: {
        width: 220,
        height: 50,
        borderRadius: 8,
        marginHorizontal: 5,
        backgroundColor: '#00adef',
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
        width: 300,
        height: 120,
        borderBottomWidth: 1,
        borderColor: 'slategray',
        marginVertical: 20,
    },
    resultText: {
        fontSize: 55,
        color: 'darkred'
    },
    warningMsg: {
        fontSize: 15,
        color: 'darkred'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    titleContainer: {
        marginVertical: 35
    }
})