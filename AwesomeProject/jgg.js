import React, { Component } from 'react';
import{Icon, Dimensions,View ,ListView,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'

var ScreenWidth = Dimensions.get('window').width;
var shareData = require('./shareData.json');
var cols = 3;
var cellH = 100;
var Vmargin = (ScreenWidth - cols*cellH) /(cols + 1)

export default class  JggScreen extends Component{
  static navigationOptions = {
    title: '九宫格',
    headerBackTitle:'返回',
 //    headerLeft:(
 //      <TouchableOpacity activOpacity = {0.5}
 //           onPress={() =>{
 //             this.props.navigation.goBack();
 //               }}>
 //        <Text style ={{marginTop: 8}} > &lt;</Text>
 //      </TouchableOpacity>
 // )
  };

  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
    this.state = {
      data:ds.cloneWithRows(shareData.data)
    }
  }

  render(){
    return(
      <ListView
        dataSource = {this.state.data}
        renderRow = {this.renderRow}
        contentContainerStyle = {styles.List}
      />
    );
  }

    renderRow(rowData,sectionID,rowID,highlightRow){
      return(
        <TouchableOpacity activOpacity = {0.5} >
        <View style ={styles.Item}>
          <Image source = {{uri:rowData.icon}} style ={{width :80, height :80}}/>
          <Text style ={{marginTop: 8}} >{rowData.title}</Text>
        </View>
        </TouchableOpacity>
      )
    }

}

const styles = StyleSheet.create({
  List:{
    flexDirection :'row',
    flexWrap:'wrap',
  },
  Item:{
    width:cellH,
    height:cellH,
    marginLeft:Vmargin,
    marginTop :15,
    alignItems:'center',
  }
})
