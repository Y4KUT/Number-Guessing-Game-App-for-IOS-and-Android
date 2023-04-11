import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";
function Card({children}){
    return(
        <View style={styles.card}>{children}</View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card:{
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal: 24,
        marginTop: 36,
        padding: 16,
        borderRadius:8,
        backgroundColor: Colors.primary800,
        elevation:4,
    }
});