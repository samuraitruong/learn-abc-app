import React from 'react';
import RNShakeEvent from 'react-native-shake-event';
import { Text, View, TouchableOpacity , Dimensions, ImageBackground} from 'react-native';
import Images from './images'
import Styles from './styles'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const letters = [];
    for(let i =0;i <26; i ++) {
      letters.push({
        letter: String.fromCharCode(65 +i),
        appear : false
      })
    }
    
    this.state = {
      current: '',
      letters, 
      count :0, 
      time: 0,
      number:0,
    }
    this.startTimer();
  }
  startTimer() {
    setTimeout(()=> {
      this.setState({time: this.state.time + 1});
      this.startTimer();
    }, 1000)
  }
  next() {
    const  number = Math.round((Math.random() *1000),0) % 26  + 65;
    current = String.fromCharCode(number);
    const letters = this.state.letters.map(x=> { 
      x.appear = x.appear || x.letter === current;
      return x;
    });

    this.setState({current, letters, count: this.state.count + 1, number})
  }
  componentWillMount() {
    this.next();
  }
  componentDidMount = () => {
    RNShakeEvent.addEventListener('shake', () => {
      this.next();
    });
  }
  componentWillUnmount = () => {
    RNShakeEvent.removeEventListener('shake');
  }
  reset() {
    const letters = this.state.letters.map(x=> {x.appear = false; return x});
    this.setState({letters, count: 0}, this.next);
  }
  render() {
    const {time, current} = this.state;

    const sec = time % 60;
    const min = (time-sec )/60;
    const imageSource =Images[current];
    
    return (
      <View style={Styles.container}>
      <View style={Styles.stats}>
        <Text style={Styles.statsText}>Count: {this.state.count}</Text>
        <TouchableOpacity onPress={this.reset.bind(this)}><Text style={Styles.statsText}>Reset</Text></TouchableOpacity>
        <Text style={Styles.statsText}>Time : {min<10 ?"0"+min: min}:{sec<10 ?"0"+sec: sec}</Text>
      </View>
        <ImageBackground style= {Styles.current} source={ imageSource}>
          <TouchableOpacity onPress={this.next.bind(this)} >
            <View>
              <Text style={Styles.text}>{current}</Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
        <View style={Styles.listPanel}>
        { this.state.letters.map(letter => <Text key={letter.letter} style={letter.appear === true?Styles.letterAppeared : Styles.letter}> {letter.letter} </Text>) }
        </View>
      </View>
    );
  }
}


