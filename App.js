import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        numero: 0,
        botao: 'GO',
        time: null
    };

    this.timer = null // variavel do timer

    this.start = this.start.bind(this);
    this.end = this.end.bind(this);
  }

  start(){
    if(this.timer != null){ // pausando o timer no tempo corrido
      clearInterval(this.timer)
      this.timer = null;
      this.setState({botao: "GO"});
    }else{    this.timer = setInterval( ()=> { // iniciando o timer
      this.setState({numero: this.state.numero + 0.1})
    }, 100);

    this.state.botao = 'PAUSE'
  }

  }
  end(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
    time: this.state.numero,
    numero: 0,
    botao: 'GO'
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Image
        source={require('./src/cronometro.png')}
        style={styles.cronometro}
        />

        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.botaoArea}>

          <TouchableOpacity style={styles.botao} onPress={this.start}>
            <Text style={styles.botaoTexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={this.end}>
            <Text style={styles.botaoTexto}>STOP</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.botaoTime}>
            <Text style={styles.textoTime}>
            {this.state.time > 0 ? 'Ultimo tempo: ' + this.state.time.toFixed(2): ''}
            </Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  timer:{
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  botaoArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  botao:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 60,
    margin: 25,
    borderRadius: 10
  },
  botaoTexto: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25
  },
  textoTime:{
    fontSize: 25,
    color: 'white',
    fontStyle: 'bold'
  },
  botaoTime:{
    marginTop: 80
  }
})

export default App;