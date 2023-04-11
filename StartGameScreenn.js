import { TextInput, View, StyleSheet, Alert, KeyboardAvoidingView, ScrollView } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/userInterface/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/userInterface/Title";
import Card from "../components/userInterface/Card";
import InstructionText from "../components/userInterface/InstructionText";

function StartGameScreenn({onPickNumber}){
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }
    
    function resetInputHandler(){
        setEnteredNumber('');
    }
    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);
        
        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber >99){
            Alert.alert('Invalid Number!',
            'Number has to be a number between 1 to 99.',
            [{ text: 'Okay', style:'destructive', onPress: resetInputHandler}])
            return;
        }
        onPickNumber(chosenNumber);
    }

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={styles.rootContainer}>
                    <Title>Guess My Number</Title>
                    <Card>
                        <InstructionText>Enter a Number</InstructionText>
                        <TextInput 
                        style={styles.numberInput} 
                        maxLength={2}
                        keyboardType="number-pad"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={numberInputHandler}
                        value={enteredNumber}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreenn;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer:{
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    numberInput:{
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight:'bold',
        textAlign: 'center'
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1,
    }
})