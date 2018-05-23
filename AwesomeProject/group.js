import React, { Component } from 'react';
import {ListView,View,Image,Text,AlertIOS,StyleSheet} from 'react-native';

var carData = require('./Car.json')

export default class GroupScreen extends Component {
  static navigationOptions = {
    title: '头部悬浮',
  };
    constructor(props) {
        super(props)
        var getSectionData = (dataBlob, sectionID) =>{
              return dataBlob[sectionID];
            };

        var getRowData = (dataBlob,sectionID,rowID) =>{
              return dataBlob[sectionID + ':'+rowID];
            };
        var ds = new ListView.DataSource({
                getSectionData:getSectionData,
                getRowData:getRowData,
                rowHasChanged:(r1,r2) => r1 !== r2,
                sectionHeaderHasChanged:(s1,s2) => s1 !== s2,
              });

        this.state = {
          dataSource:ds,
        }
    }

    render(){
      return(
        <ListView
          dataSource = {this.state.dataSource}
          renderRow = {this.rendeRow}
          renderSectionHeader = {this.renderSectionHeader}
          style = {{backgroundColor :'white'}}
        />
      );
    }

    renderSectionHeader(sectionData,sectionID){
      return(
        <View style = {styles.header}>
          <Text style = {{marginLeft :10 ,marginTop:5,color:'red'}}>{sectionData}</Text>
        </View>
      );
    }

    rendeRow(rowData){
      return(
        <View style = {styles.row}>
          <Image source = {{uri:rowData.icon}} style ={{width: 80,height:80}}/>
          <Text style = {{marginLeft :10}}>{rowData.name}</Text>
        </View>
      );
    }

    componentDidMount(){
      this.loadData();
    }

    loadData(){
      // AlertIOS.alert('执行load');
      var jsonData = carData.data;
      var dataBlob ={},
          sectionIDs=[],
          rowIDs=[],
          cars=[];

      for (var i = 0; i < jsonData.length; i++) {
          sectionIDs.push(i);
          dataBlob[i] = jsonData[i].title;
          cars = jsonData[i].cars;
          rowIDs[i] = [];
          for (var j = 0; j < cars.length; j++) {
            rowIDs[i].push(j);
            dataBlob[i+':'+j] = cars[j];
          }
      }

      this.setState({
        dataSource : this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs),
      })
  }
}

const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    alignItems:'center',
    padding:15,
    borderBottomColor :'#e8e8e8',
    borderBottomWidth :0.3,
  },
  header:{
    backgroundColor:'#e8e8e8',
    height:25,
    justifyContent:'center'
  }
})
