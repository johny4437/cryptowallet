import React from 'react';
import { View, Animated} from 'react-native';

import {IconTextButton} from '../components'
import icons  from '../constants/icons';
import Colors from '../constants/colors';
import {SIZES} from '../constants/theme'


import { connect } from 'react-redux';
const MainLayout = ({children, isTradeModalVisible}) => {
    return (
        <View
        style={{
            flex: 1,
        }}
        >
            {children}
            {/* MODAL */}
            <Animated.View 
            style={{
                position: 'absolute',
                left: 0,
                width: "100%",
                padding: SIZES.padding, 
                backgroundColor:Colors.primary

            }}>
                <IconTextButton
                label="Transferir"
                icon={icons.send}
                onPress={() =>console.log("@##$")}
                />
                <IconTextButton
                label="Sacar"
                icon={icons.withdraw}
                onPress={() =>console.log("@##$")}
                />
            </Animated.View>
        </View>
    )
}

// export default MainLayout

function mapStateToProps(state){
    return {
      isTradeModalVisible: state.tabReducer.isTradeModalVisible
    }
}

function mapDispatchToProps(dispatch){
   return{

   }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainLayout)