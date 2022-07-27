
import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux/store/root.reducer';
import {StyleSheet, Dimensions, View} from 'react-native';
import { DISABLE_LOADING} from '../../redux/actions';

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    height,
    width,
    position: 'absolute',
    zIndex: 100,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 70,
    height: 70,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
});
const Spinner = () => {
  const enable = useSelector((state: RootState) => state.loader.loader.enable);

  const dispatch = useDispatch();

  useEffect(() => {
    if (enable) {
      setTimeout(() => {
        dispatch({ type: DISABLE_LOADING })
      }, 1000);
    }
  }, [enable]);

  return enable ? (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <ActivityIndicator size={'large'} color={'#1F87C9'} />
      </View>
    </View>
  ) : null;
};

export default Spinner;
