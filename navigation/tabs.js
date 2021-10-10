import React from 'react';
import {TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { setTradeModalVisibility} from '../store/tab/tabActions';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import icons from '../constants/icons';
import Colors from '../constants/colors';
import {Home, Market, Profile, Portfolio} from '../screens/index';
import TabIcon from '../components/TabIcon';


const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({children, onPress}) =>{
  return(
    <TouchableOpacity
    style={{
      flex:1,
      justifyContent:"center",
      alignItems:'center',
    }}
    onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  )
}

const Tabs=({setTradeModalVisibility, isTradeModalVisible}) => {

  function tradeTabButtonOnClickHandler(){
    setTradeModalVisibility(!isTradeModalVisible)
  }
  return (
    <Tab.Navigator
   screenOptions={
    {
      "tabBarShowLabel": false,
      "headerShown":false,
      "tabBarStyle": [
        {
          "height": 70,
          "backgroundColor":Colors.carbonDark,
          "borderTopColor":"transparent"
        },
        null
      ]
    }
    
    }
    >
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{
        tabBarIcon:({focused})=>{
          if(!isTradeModalVisible){

            return(
              <TabIcon
              focused={focused}
              icon={icons.home}
              label="Home"
              
              />
              )
          }
        }
      }}
      listeners={{
        tabPress:e=>{
          if(isTradeModalVisible){
            e.preventDefault();
          }
        }
      }}
      />
        <Tab.Screen 
      name="Portfolio" 
      component={Portfolio} 
      options={{
        tabBarIcon:({focused})=>{
          if(!isTradeModalVisible){

            return(
              <TabIcon
              focused={focused}
              icon={icons.briefcase}
              label="Portifólio"
              
              />
              )
          }
        }
      }}
      listeners={{
        tabPress:e=>{
          if(isTradeModalVisible){
            e.preventDefault();
          }
        }
      }}
      />
        <Tab.Screen 
      name="Trade" 
      component={Portfolio} 
      options={{
        tabBarIcon:({focused})=>{
          
          return(
            <TabIcon
            focused={focused}
            icon={isTradeModalVisible? icons.close : icons.trade}
            iconStyle={isTradeModalVisible ? {
              width:15, 
              height:15,
            }:null}
            label="Trade"
            isTrade={true}
            />
          )
        },
        tabBarButton:(props) =>(
          <TabBarCustomButton
          {...props}
          onPress={()=> tradeTabButtonOnClickHandler()}
          />
        )
      }}
      />
      <Tab.Screen 
      name="Mercado" 
      component={Market} 
      options={{
        tabBarIcon:({focused})=>{
          if(!isTradeModalVisible){

            return(
              <TabIcon
              focused={focused}
              icon={icons.market}
              label="Mercado"
              
              />
              )
            }
        }
      }}
      listeners={{
        tabPress:e=>{
          if(isTradeModalVisible){
            e.preventDefault();
          }
        }
      }}
      />
      <Tab.Screen 
      name="Perfil" 
      component={Profile} 
      options={{
        tabBarIcon:({focused})=>{
          if(!isTradeModalVisible){

            return(
              <TabIcon
              focused={focused}
              icon={icons.profile}
              label="Perfil"
              
              />
              )
            }
        }
      }}
      listeners={{
        tabPress:e=>{
          if(isTradeModalVisible){
            e.preventDefault();
          }
        }
      }}
      />
    
    </Tab.Navigator>
  );
}

// export default Tabs;

function mapStateToProps(state){
    return {
      isTradeModalVisible: state.tabReducer.isTradeModalVisible
    }
}

function mapDispatchToProps(dispatch){
    return{
      setTradeModalVisibility: (isVisible) =>{
        return dispatch(setTradeModalVisibility(isVisible))
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tabs)