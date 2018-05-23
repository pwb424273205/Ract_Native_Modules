import React, { Component } from 'react';
import {ListView,Image,View,StyleSheet,Text,Dimensions,TouchableOpacity,AlertIOS} from 'react-native';

var ScreenWidth = Dimensions.get('window').width;

export default class ListScreen extends Component{
  static navigationOptions = {
    title: '商品列表',
  };
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
    this.state = {
      data:ds.cloneWithRows([
      {key: '香蕉 啤酒 饮料',Image:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',price:'10'},
      {key: '炸鸡 汉堡 (套餐)',Image:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',price:'11'},
      {key: '香蕉酒,饮料',Image:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',price:'12'},
      {key: '香啤酒饮料',Image:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',price:'13'},
      {key: '香,饮料',Image:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',price:'14'},
      {key: '香蕉,啤酒,饮料',Image:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',price:'15'},
      {key: '香蕉一个,饮料 (大杯)',Image:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',price:'16'},
      {key: '香蕉一个,啤酒 (500ml),饮料 (大杯),香蕉一个,啤酒 (500ml),饮料 (大杯)',Image:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',price:'20'},])
    }
  }

  render(){
    return(
      <ListView
        dataSource = {this.state.data}
        renderRow = {this.renderRow}
      />
    );
  }

  renderRow(rowData,sectionID,rowID,highlightRow){
    return(
      <TouchableOpacity  activOpacity = {0.5}
        onPress={() =>{
          AlertIOS.alert('点击了第'+ rowID +'行')
        }}>
      <View style = {styles.cell}>
        <Image source = {{uri: rowData.Image}} style ={styles.img}/>
        <View style = {styles.view}>
          <Text style ={styles.top}>{rowData.key}</Text>
          <Text style ={styles.botom}>{'¥' +rowData.price}</Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cell:{
    flexDirection:'row',
    // alignItems:'center',
    borderBottomWidth:0.2,
    borderBottomColor:'gray',
    padding:10,
    // marginTop :10,
  },
  view:{
    justifyContent:'center'
  },
  img:{
    width:60,
    height:60,
    marginRight:10
  },
  botom:{
    marginTop :10,
    color:'red',
    marginBottom:8,
  },
  top:{
    fontSize:15,
    width :ScreenWidth *0.7
  }
})
