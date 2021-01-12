import React from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Platform,
  StyleSheet,
} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';

import Card from './Card';

const Rate = ({navigation}) => {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.headingContainer}>
        <Text style={styles.titleText}>Rate My Coffee</Text>
        <Text style={styles.subtitleText}>Did you enjoy your coffee? 🥳</Text>
      </View>
      <ScrollView style={styles.flex} contentContainerStyle={styles.center}>
        <Card title="WITH RATING" containerStyle={styles.card}>
          <AirbnbRating
            type="heart"
            showRating={true}
            defaultRating={3}
            reviews={[
              'Ridi',
              'Ah ah',
              'Bad nabood',
              'Okayeee',
              'Awwwwllllliiii!',
            ]}
            onFinishRating={() => navigation.navigate('Salar')}
          />
        </Card>
        {/* <Card title="CUSTOM RATING" containerStyle={styles.card}>
          <AirbnbRating
            count={10}
            reviews={[
              'Terrible',
              'Bad',
              'Meh',
              'OK',
              'Good',
              'Very Good',
              'Wow',
              'Amazing',
              'Unbelievable',
              'Jesus',
            ]}
            defaultRating={5}
            size={20}
            onFinishRating={ratingCompleted}
          />
        </Card> */}
        {/* <Card title="DISABLED" containerStyle={styles.card}>
          <AirbnbRating
            isDisabled={true}
            showRating={false}
            defaultRating={4}
          />
        </Card> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingContainer: {
    paddingBottom: 30,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : null,
    color: '#27ae60',
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : null,
    color: '#34495e',
  },
  card: {
    // backgroundColor: 'red',
    width: '85%',
    marginBottom: 20,
  },
});

export default Rate;
