import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet
} from 'react-native';

import { TimerMixin } from 'react-timer-mixin';

//
// type Props ={
//   time:2000,
// }

var ScreenWidth = Dimensions.get('window').width;

export default class scroll extends Component {

  static defaultProps = {
    time:2000,
  }
  // this.props.time = 200;
  mixins:[TimerMixin];

  static navigationOptions = {
    title: 'scrollView',
  }

constructor(props){
  super(props)
  this.state = {
    currentIndex:0,
  }
}

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View  style = {{width: ScreenWidth},{marginTop:0}}>
        <ScrollView
          horizontal = {true}
          showsHorizontalScrollIndicator = {false}
          pagingEnabled = {true}
          onMomentumScrollEnd = {(e)=>this.onAnimationEnd(e)}
          ref = 'scrollView'
          onScrollBeginDrag = {this.onScrollBeginDrag()}
          >
          {this.renderImage()}
        </ScrollView>

        <View style = {styles.foot}>
          {this.renderCicl()}
        </View>
      </View>
    );
  }
  renderImage(){
    var allImage = [];
    for (var i = 0; i < 5; i++) {
      allImage.push(
        <Image key={i} source = {require('./img/favicon.png')} style = {styles.icon}/>
      );
    }
    return allImage;
  }

  renderCicl(){
    var style;
    var allImage = [];
    for (var i = 0; i < 5; i++) {
      style =(i == this.state.currentIndex) ? {color :'green'} :{color:'white'};
      allImage.push(
        <Text style = {[styles.icon2,style]}>&bull;</Text>
      );
    }
    return allImage;
  }

  onAnimationEnd(e){
    var offsetX = e.nativeEvent.contentOffset.x;
    var currentIndex = Math.floor(offsetX/ScreenWidth);
    this.setState({
      currentIndex:currentIndex,
    });
  }

  componentDidMount(){
    this.starTime();
  }

  onScrollBeginDrag(){
    // clearInterval(this.timmer);
  }

  starTime(){
    var scrollView = this.refs.scrollView;
    this.timmer = setInterval(()=>{
      var activPage = 0;
      var acPage = (this.state.currentIndex +1);
      if(acPage >= 5){
        activPage = 0;
      }else {
        activPage = acPage;
      }
      this.setState({
        currentIndex:activPage,
      });

      var offsetX = activPage *ScreenWidth;
      scrollView.scrollResponderScrollTo({x:offsetX,y:0,animated:true});
    },this.props.time)
  }


}

const styles = StyleSheet.create({
    icon:{
      width:ScreenWidth,
      height:200,
    },
    icon2:{
      fontSize:25,
      color:'white'
    },
    foot:{
      width:ScreenWidth,
      height:30,
      backgroundColor:'rgba(0,0,0,0.2)',
      position:'absolute',
      bottom:0,
      flexDirection:'row',
      alignItems:'center',
    }

})
