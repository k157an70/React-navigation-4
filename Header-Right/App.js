import React, { useState } from 'react';
import { View, Text, Button, Picker } from 'react-native';
import { createAppContainer, withNavigation  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = props => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button title="GO TO PROFILE SCREEN" onPress={() => props.navigation.navigate('Profile')} />
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

const PickerHeaderRight = withNavigation(({ navigation }) => {
   const [menu, setMenu] = useState('java')
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center'
    }}>
     <Icon name="refresh" size={20} color="grey" style={{ }} />
      <Picker
        selectedValue={menu}
        style={{ width: '100%', backgroundColor:'transparent', marginHorizontal: 10 }}
        onValueChange={(itemValue, itemIndex) => {
            setMenu(itemValue);
            navigation.navigate('Profile')
        }}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
  
    <Icon name="ellipsis-v" size={30} color="grey" style={{ position: 'absolute', right: 15 }} />
  </View>
  )
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "React Navigation V.4.x",
      headerRight: <PickerHeaderRight />
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'Profile'
    }
  },
});

export default createAppContainer(AppNavigator);