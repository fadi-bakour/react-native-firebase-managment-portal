import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity, StatusBar
} from 'react-native';
import { LogOut } from '../../actions/AuthActions';
import { connect } from 'react-redux';


const mapDispatchToProps = (dispatch) => {
  return {
    reduxLogOut: () => dispatch(LogOut()),
  }
}

const ProfileScreen = ({ reduxLogOut }) => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor='white' />
      <View style={{ flex: 0.88 }}>
      </View>
      <View style={{ flex: 0.12 }}>
        <TouchableOpacity style={styles.btnDiv} onPress={() => reduxLogOut()}>
          <Text style={styles.btn}>
            Log Out
        </Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  btnDiv: { width: '50%', alignItems: 'center', backgroundColor: '#041e42', alignSelf: 'center', height: 50, justifyContent: 'center', borderRadius: 5, margin: '2%', },
  btn: { color: 'white', fontSize: 18, fontWeight: '700' },
});

export default connect(null, mapDispatchToProps)(ProfileScreen);

