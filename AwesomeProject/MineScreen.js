import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  AlertIOS
} from 'react-native';

var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;
//不可改变
// type Props ={
//   data :[],
// }

// type State ={
//   text:'登录',
// }

export default class  MineScreen extends Component {
  static navigationOptions = {
    title : '个人中心'
    // headerBackTitle:null,
  }

  static defaultProps = {
    time:2000,
  }
  // getInitialState(){
  //   return{
  //     title:'登录'
  //   }
  // }
  constructor(props){
    super(props);
    this.state = {text:'登录'};
  }

  render(){
    return(
      <View style = {styles.container} >
        <Image source = {require('./img/favicon.png')} style = {styles.icon} ref= 'imageView'/>
        <TextInput placeholder = {'请输入账号'} style = {styles.textInput}/>
        <TextInput placeholder = {'请输入密码'} password = {true} style = {styles.textInput}/>
        <TouchableOpacity activOpacity = {0.5}
          // onPress={()=>this.sendMessage('正在登录...')}
          // onPressIn={()=>this.sendMessage('登录中...')}
          // onPressOut={()=>this.sendMessage('登录完成...')}
          onPress={() =>{
            this.props.navigation.navigate('scroll');
          }}
        >
        <View style = {styles.button}>
          <Text style = {{color:'red'}}>{this.state.text}</Text>
        </View>
        </TouchableOpacity>

        <View style = {styles.foot}>
          <Text style = {{color:'gray'}}>无法登录</Text>
          <Text style = {{color:'gray'}}>新用户</Text>
        </View>

        <View style = {styles.other}>
          <Text>其他登录方式</Text>
          <Image source = {require('./img/favicon.png') } style = {styles.icon2}/>
          <Image source = {require('./img/favicon.png')} style = {styles.icon2}/>
        </View>


      </View>
    )
  }

  sendMessage(event){
    // AlertIOS.alert(event);
    this.setState({
      text : event
    })
    this.refs.imageView
  }

  componentDidMount(){
    this.requst()
  }

  requst(){
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center"
  },
  icon:{
    marginTop:20,
    width:80,
    height:80,
    borderRadius:40,
    borderWidth:2,
    borderColor:'white',
    marginBottom:30,
  },
  textInput:{
    width:ScreenWidth*0.9,
    height:38,
    backgroundColor:'white',
    marginBottom:1,
    textAlign:'center',
    // borderRadius:4,
  },
  button:{
    width:ScreenWidth*0.9,
    height:38,
    backgroundColor:'yellow',
    borderRadius:6,
    marginTop:20,
    justifyContent: 'center',
    alignItems:'center',
    marginBottom:10,
  },
  foot:{
    width:ScreenWidth*0.9 ,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  other:{
    // width:300,
    flexDirection:'row',
    alignItems:'center',
    position:'absolute',
    bottom:10,
    left:40,
  },
  icon2:{
    width:40,
    height:40,
    borderRadius:20,
    borderWidth:2,
    borderColor:'white',
    marginLeft:10,
  },
})
