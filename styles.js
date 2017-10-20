import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container: {
      paddingTop:24,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'flex-end'
      
    },
    stats: {
      height: 30,
      width:Dimensions.get('window').width,
      flexWrap:'nowrap',
      backgroundColor: '#011a42',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignSelf: 'stretch',
      paddingTop: 5,
      paddingLeft: 10,
      paddingRight:10,
      
    },
    statsText: {
      color: '#fff'
    },
    current: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'transparent',
      alignSelf: 'stretch',
      resizeMode: 'contain'
    },
    text: {
      alignSelf: 'center',
      fontSize: 300,
      color:'#2752c6'
    },
    listPanel: {
      height : 180,
      flexDirection:'row',
      backgroundColor: '#234987',
      flexWrap: 'wrap',
      
    },
    letter :  {
      color: '#b3b3b3',
      fontSize: 39
    },
    letterAppeared :  {
      color: '#f28b04',
      fontSize: 39
    }
  });

  export default styles;