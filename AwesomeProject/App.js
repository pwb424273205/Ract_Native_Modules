/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  SectionList,
  Button,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

import{
  StackNavigator,TabNavigator
}from 'react-navigation';
import FadeInView from './FadeInView';

import MineScreen from './MineScreen';
import scroll from './scroll';
import ListScreen from './list'
import JggScreen from './jgg'
import GroupScreen from './group'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//导航一级页面 导航里面的页面要用React.Component申明
class MainScreen extends Component {
  static navigationOptions = {
    title: '首页',
    headerBackTitle:'返回',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {{flex :1}}>
        <Button
        onPress={() =>{
          this.props.navigation.navigate('Profile');
        }}title={'To Profile'}
        />
        <Button
          onPress={() =>{
            this.props.navigation.navigate('group');
          }}title={'To 分组'}
        />
      </View>
    );
  }
}

//导航二级页面
class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: '二级页面',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {StyleSheet.container}>
        //按钮
        <Button  onPress={() =>{
                     this.props.navigation.navigate('List');
                   }}
        title={'商品列表'}/>
        //触摸事件自定义按钮
        <TouchableHighlight onPress={() =>{
                       this.props.navigation.navigate('jgg');
                     }}>
        <Text style= {{alignItems :'center',textAlign :'center',color:'blue'}}>九宫格</Text>
        </TouchableHighlight>
        <IScrolledDownAndWhatHappenedNextShockedMe/>
        <SectionListDemo/>
        <FlatListDemo/>
      </View>
    );
  }
}

// 导航三级页面
class ApprunScreen extends React.Component {
  static navigationOptions = {
    title: '发现',
  };
 render() {
   return (
     <View style={styles.container}>
       <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
         <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in!</Text>
       </FadeInView>
       <Wordchange/>
       <Bananas />
       <Blink text='I love to blink' />
       <Text style={styles.welcome}>
         hello word!
       </Text>
       <Greting name='Rexxar'/>
     </View>
   );
 }
}

//分组列表组件
class SectionListDemo extends Component {
  render(){
    return(
      <SectionList style = {{width :345, height : 200}}
        //数据
        sections={[
                    {title: '玩游戏', data: ['Devin']},
                    {title: '学习', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                  ]}
        //单个Item组件
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        //单个header组件
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
      />
    );
  }
}

//单列表
class FlatListDemo extends Component{
  render(){
    return(
      <FlatList style = {{width : 345, height : 200,backgroundColor :'red'}}
        //数据源
             data={[
               {key: 'Devin'},
               {key: 'Jackson'},
               {key: 'James'},
               {key: 'Joel'},
               {key: 'John'},
               {key: 'Jillian'},
               {key: 'Jimmy'},
               {key: 'Julie'},
             ]}
             //单行样式
             renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
    />
    );
  }
}

//输入框获取
class Wordchange extends Component{
  //stat属性声明(text)
  constructor(props){
    super(props);
    this.state = {text:''};
  }

  render(){
    return(
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          //占位字符
          placeholder="Type here to translate!"
          //文字改变调用  this.setState({text})函数参数为text
          onChangeText={(text) => this.setState({text})}
        />

        <Text style={{padding: 10, fontSize: 42}}>
          {/* 将输入的文字按 " "分割得到map数组,调用 word && '🍕'方法参数为每个单词,然后拼接 */}
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}
//ScrollView组件
class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render(){
    return(
      <ScrollView style = {{width: 345,height :200}} >
        <Text style ={{fontSize :20}}  > Scrollview me</Text>
        <Image source = {require('./img/favicon.png')}/>
        <Image source = {require('./img/favicon.png')}/>
        <Image source = {require('./img/favicon.png')}/>
        <Image source = {require('./img/favicon.png')}/>
        <Text style ={{fontSize :20}}  > If you like </Text>

        <Text style ={{fontSize :20}}  > Scrolling down</Text>
        <Image source = {require('./img/favicon.png')}/>
        <Image source = {require('./img/favicon.png')}/>
        <Image source = {require('./img/favicon.png')}/>
        <Image source = {require('./img/favicon.png')}/>
        <Text style ={{fontSize :20}}  > What's the best </Text>
      </ScrollView>

    );
  }
}
//state状态属性声明(showTex)
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showTex : true};
  // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
     this.setState(previousState => {
        return { showTex: !previousState.showTex };
      });
    }, 1000);
  }

  render(){
    let dispaly = this.state.showTex ? this.props.text :' ';
    return (
      <Text style = {[styles.great,styles.blink]}>{dispaly}</Text>
    );
  }
}
//Text组件
class Greting extends Component{
  render(){
    return(
      <Text style = {styles.great}> hello {this.props.name}</Text>
    );
  }
}
// 图片组件
class Bananas extends Component {
 render(){
   let pic = {
     uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
   };
   return(
     <View>
       {/* 混合开发时候加载xcode里xcassets文件图片资源 */}
      <Image source = {{uri:'timg2'}} style = {{ width :193, height: 110}}/>
       {/* 加载本地图片 */}
      <Image source = {require('./img/favicon.png')} style = {{ width :193, height: 110}}/>
      {/* 网络加载图片 */}
      <Image source = {pic} style = {{ width :193, height: 110}}/>
     </View>
   );
}
}


//样式集 StyleSheet
const styles = StyleSheet.create({
  container: {
    //弹性宽高
    flex:1,
    //设置主轴为y轴
    flexDirection: 'column',
    //主轴对齐样式(y轴:头,尾,居中,均匀分布)
    // justifyContent: 'space-around',
    //次轴对齐样式()
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    // flex:1,
    backgroundColor:'green',
    fontSize: 30,
    textAlign: 'center',
    // margin: {marginTop:10,marginLeft:0,marginBottom:40,marginRight:0},
    marginTop:40,
    marginLeft:30,
    marginBottom:10,
  },
  great: {
    // flex:2,
    color:'blue',
    fontSize: 30,
    textAlign: 'center',
    marginRight:10
  },
  blink: {
    // flex:3,
    color:'red',
  },
  item: {
  padding: 10,
  fontSize: 10,
  height: 44,
  color:'blue'
  // textAlign:'center'
  },
});

const Tab = TabNavigator({
  Home:{
    screen :MainScreen,
    navigationOptions: ({navigation}) => ({
        tabBarLabel: '附近2',
        // tabBarIcon: ({focused, tintColor}) => (
        //     <TabBarItem
        //         tintColor={tintColor}
        //         focused={focused}
        //         normalImage={require('./img/tabbar/tabbar_merchant.png')}
        //         selectedImage={require('./img/tabbar/tabbar_merchant_selected.png')}
        //     />
        // )
    }),
  },
  AppRun:{screen: ApprunScreen},
  Mine:{screen :MineScreen},

});




//export 导出组件 (名为app 的导航组件,里面包含Main)
export default App = StackNavigator({
  // Main: {screen: MainScreen},
  Tab:{screen : Tab},
  Profile: {screen: ProfileScreen},
  scroll:{screen:scroll},
  List:{screen:ListScreen},
  jgg:{screen:JggScreen},
  group:{screen:GroupScreen},
  // AppRun:{screen: ApprunScreen}
},
{
    navigationOptions:{
      headerBackTitle:null,
     //  headerTintColor:'#333333',
     //  showIcon:true,
     // swipeEnabled:false,
     // animationEnabled:false,
   }
 }
);
