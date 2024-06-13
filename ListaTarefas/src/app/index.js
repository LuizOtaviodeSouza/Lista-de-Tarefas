import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image 
          source={require('../assets/avatar.gif')} 
          style={styles.logo}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          Panter List
        </Text>
        <Text style={styles.text}>
          Monte sua lista de Tarefas!
        </Text>
        <Link style={styles.button} href={"/home"}>
          <Text style={styles.buttonText}>Montar</Text>
        </Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  containerImage: {
    flex: 2,
    justifyContent:'center',
    alignItems:"center",
  },
  logo:{
    width: 297,
    height: 230,
    borderRadius: 115,
    resizeMode: "cover",
  },
  content: {
    flex: 1,
    backgroundColor: "#ff69b4",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: "5%",
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 20,
    textAlign: 'center'
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#000',
    bottom: '15%',
    alignSelf: 'center',
    borderRadius: 30,
    paddingVertical: 15,
    width: "60%",
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  }
});