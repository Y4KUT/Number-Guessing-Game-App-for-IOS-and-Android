import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/userInterface/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/userInterface/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}){
    return(
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image 
                style={styles.image} 
                source={require('../assets/images/success.png')}
                /> 
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber} </Text>  
                rounds to guess your number <Text style={styles.highlight}>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer:{
        width: 320,
        height: 320,
        borderRadius: 160,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image:{
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 24,
        textAlign:'center',
        marginBottom: 24
    },
    highlight:{
        fontWeight: 'bold',
        color: Colors.primary500
    }
});