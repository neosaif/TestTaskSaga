import React from "react";
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import CustomTextInput from '../../components/TextInput/TextInput.component';
import {RootState} from '../../redux/store/root.reducer';
import {CreateStyle} from './createuser.style';
import {useDispatch,useSelector} from 'react-redux';
import { setUserSlice } from '../../redux/slice/user.slice';
import {CREATE_USER, ENABLE_LOADING } from '../../redux/actions';

export const userCreateForm = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const user = useSelector((state: RootState) => state.user)
    const handleChange = (value: any,key: string) => {        
        dispatch(setUserSlice({ ...user, [key]: value }))
    }
    const handleSubmit = () => {
        // dispatch({ type: ENABLE_LOADING })
        dispatch({ type: CREATE_USER, user: { ...user }})
        navigation.navigate('Users')
    }
    return(
        <View>
            <View style={CreateStyle.centerBox}>
                <View style={CreateStyle.contentBox}>
                    <CustomTextInput value={user.name} placeholder={'Name'} onchange={(value:any)=>handleChange(value,'name')}/> 
                    <CustomTextInput value={user.email} placeholder={'Email'} onchange={(value:any)=>handleChange(value,'email')}/>
                    <CustomTextInput value={user.age.toString()} placeholder={'Age'} onchange={(value:any)=>handleChange(value,'age')} keybored={"numeric"}/>
                    <CustomTextInput value={user.bio} placeholder={'Bio'} onchange={(value:any)=>handleChange(value,'bio')}/>
                </View>
            </View>
            <TouchableOpacity style={CreateStyle.search} onPress={handleSubmit}>
                <Text>Create</Text>
            </TouchableOpacity>
        </View>
    )
  }
