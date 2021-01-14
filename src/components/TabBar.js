import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import colors from '../config/colors';

function TabBar({state, descriptors, navigation}) {
  const tabBarHeight = 55;
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  const renderIcon = (label, isFocused) => {
    let type, iconName;
    if (label === 'Overal') {
      iconName = !isFocused ? '500px' : '500px-with-circle';
      type = isFocused ? 'entypo' : 'entypo';
    } else if (label === 'Rate') {
      iconName = isFocused ? 'star' : 'staro';
      type = 'ant-design';
    } else if (label === 'Salar') {
      iconName = isFocused ? 'people-circle' : 'people-circle-outline';
      type = 'ionicon';
    }
    return (
      <Icon
        type={type}
        name={iconName}
        size={isFocused ? 30 : 24}
        color={isFocused ? 'blue' : '#222'}
        style={styles.iconStyle}
        containerStyle={styles.iconContainer}
      />
    );
  };
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.touchStyle, {height: tabBarHeight}]}>
            {renderIcon(label, isFocused)}
            <Text
              style={[
                styles.textStyle,
                {color: isFocused ? colors.blue : colors.gray},
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: 'center',
    fontSize: 12,
  },
  touchStyle: {flex: 1, justifyContent: 'center'},
  container: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
    backgroundColor: 'white',
    elevation: 15,
    borderRadius: 20,
  },
  iconStyle: {height: 30, justifyContent: 'center', alignItems: 'center'},
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabBar;
