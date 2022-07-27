
import React from 'react';
import {View} from 'react-native';
import {CreateStyle} from './createuser.style';
import {userCreateForm} from './createuser.component';

interface Props {}
const CreateUser = (props: Props) => {
  return (
    <View style={CreateStyle.container}>
        {userCreateForm()}
    </View>
  );
};

export default CreateUser;
