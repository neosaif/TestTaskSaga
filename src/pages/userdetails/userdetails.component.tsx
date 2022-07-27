import React from "react";
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import CustomTextInput from '../../components/TextInput/TextInput.component';
import {RootState} from '../../redux/store/root.reducer';
import {DetailsStyle} from './userdetails.style';
import {useDispatch,useSelector} from 'react-redux';
import { setUserSlice } from '../../redux/slice/user.slice';
import {UPDATE_USER, ENABLE_LOADING } from '../../redux/actions';

const dispatch = useDispatch()
const navigation = useNavigation()

export const userEditForm = () => {
    const user = useSelector((state: RootState) => state.user)
    const handleChange = (value: any,key: string) => {        
        dispatch(setUserSlice({ ...user, [key]: value }))
    }
    const handleSubmit = () => {
        dispatch({ type: ENABLE_LOADING })
        dispatch({ type: UPDATE_USER, user })
        dispatch(setUserSlice({
            id: 0,
            name: '',
            email: '',
            age: '',
            bio : '',
            avatarUrl:'https://i.pravatar.cc/150?u=17436',
            color : '#FFFFFF',
            createdAt: new Date().toLocaleDateString(),
            isPublic: true,
            statusMessage: 'working from home',
        }))
        navigation.navigate('Users')
    }
    return(
        <View>
            <View style={DetailsStyle.centerBox}>
                <View style={DetailsStyle.imageWrap}>
                    <Image source={{uri: user.avatarUrl}} style={DetailsStyle.image}/>
                </View>
                <View style={DetailsStyle.contentBox}>
                    <CustomTextInput value={user.name} placeholder={'Name'} onchange={(value:any)=>handleChange(value,'name')}/> 
                    <CustomTextInput value={user.email} placeholder={'Email'} onchange={(value:any)=>handleChange(value,'email')}/>
                    <CustomTextInput value={user.age.toString()} placeholder={'Age'} onchange={(value:any)=>handleChange(value,'age')} keybored={"numeric"}/>
                    <CustomTextInput value={user.bio} placeholder={'Bio'} onchange={(value:any)=>handleChange(value,'bio')}/>
                </View>
            </View>
            <TouchableOpacity style={DetailsStyle.search} onPress={handleSubmit}>
                <Text>Save</Text>
            </TouchableOpacity>
        </View>
    )
  }
