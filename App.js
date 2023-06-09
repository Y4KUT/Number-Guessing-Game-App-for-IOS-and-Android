import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreenn from './screens/StartGameScreenn';
import {LinearGradient} from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  

  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }

  function pickedNumberHandler(pickedNumber){
      setUserNumber(pickedNumber);
      setGameIsOver(false);
  }

  let screen = <StartGameScreenn onPickNumber={pickedNumberHandler}/>

  if(userNumber){
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
    );
  }

  if(gameIsOver && userNumber){
    screen = (
      <GameOverScreen 
        userNumber={userNumber} 
        roundsNumber={guessRounds} 
        onStartNewGame={startNewGameHandler}
    />
    );
  }

  return (  
    <LinearGradient colors={[Colors.primary700,Colors.accent600]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} 
      resizeMode="cover" 
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    rootScreen:{
      flex: 1,
    },
    backgroundImage:{
      opacity: 0.30
    }
});
