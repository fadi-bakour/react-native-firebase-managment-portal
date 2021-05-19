import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

const PreviewSignupInfo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text>
            Back to Sign up
        </Text>
        </TouchableOpacity>
      </ScrollView>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: '10%',
    paddingBottom: '10%',
    flex: 1
  }
});

export default PreviewSignupInfo;

