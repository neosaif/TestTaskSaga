
import React from 'react';
import {View} from 'react-native';
import {DetailsStyle} from './userdetails.style';
import {userEditForm} from './userdetails.component';

interface Props {}
const UserDetails = (props: Props) => {

  return (
    <View style={DetailsStyle.container}>
        {userEditForm()}
    </View>
  );
};

export default UserDetails;
