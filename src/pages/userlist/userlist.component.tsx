import React from "react";
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {UsersStyles} from './userlist.style';
import {User} from '../../interfaces/user.interface';
import {useDispatch,useSelector} from 'react-redux';
import { setUserSlice } from '../../redux/slice/user.slice';
import {DELETE_USER,GET_USERS_LIST} from '../../redux/actions';
import {RootState} from '../../redux/store/root.reducer';
import { setFilterSlice } from '../../redux/slice/filter.slice';
import CustomTextInput from '../../components/TextInput/TextInput.component';
import { Picker } from '@react-native-picker/picker';


const dispatch = useDispatch()
const navigation = useNavigation()
export const renderUsersList = (item:User) => {
    let data = item.item
    let dt = new Date(data.createdAt);
    const editUser = (data: User) => {
        dispatch(setUserSlice(data))
        navigation.navigate('User Details')
    }
    const deleteUser = (data: User) => {
        dispatch({ type: DELETE_USER, id: data.id })
    }
    return(
        <TouchableOpacity style={UsersStyles.centerBox} onPress={()=>editUser(data)}>
            <View style={UsersStyles.imageWrap}>
                <Image source={{uri: data.avatarUrl}} style={UsersStyles.image}/>
                <Text style={UsersStyles.ageText}>Age: {data.age}</Text>
            </View>
            <View style={UsersStyles.contentBox}>
                <Text style={UsersStyles.nameText}>{data.name}</Text>
                <Text style={UsersStyles.subText}>{data.statusMessage}</Text>
                <Text style={UsersStyles.subText}>{dt.toLocaleString()}</Text>
                <TouchableOpacity style={{padding:5,backgroundColor:"#E5E5E5",width:"100%"}}
                    onPress={() =>deleteUser(data)}>
                    <Text style={UsersStyles.subText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
  }

export const renderFooter = () => {
    return(
        <View style={UsersStyles.footer}/>
    )
} 

export const addUser = () => {
    const createUser = () => {
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
        navigation.navigate('Create User')
    }
    return (
        <TouchableOpacity style={[UsersStyles.search,{width:"25%"}]} onPress={createUser}>
            <Text style={UsersStyles.nameText}>+</Text>
        </TouchableOpacity>
    )
}

export const pagination = () => {
    const filter = useSelector((state : RootState) => state.filter)    
    const count = useSelector((state : RootState) => state.count)
    const totalPages = Math.ceil(count/10)
    const pageButton = (label:string,value:number) => {
        return(
            <TouchableOpacity style={UsersStyles.paginate} onPress={()=>paginatedData(value)}>
                <Text>{label}</Text>
            </TouchableOpacity>
        )
    }

    const paginatedData = (value:number) => {        
        if(value <= totalPages && value >= 1){
            dispatch(setFilterSlice({ ...filter, ['page']: value }))
            let query = `_page=${value}`
            if (filter.name){
                query+= `&name=${filter.name}`
              }
              if (filter._sort){
                query+= `&_sort=${filter._sort}`
              }
              if (filter._order){
                query+= `&_order=${filter._order}`
              }
            dispatch({ type: GET_USERS_LIST, query })
        } 
    }

    return(
        <View style={{flexDirection:"row"}}>
            {pageButton('<<<',1)}
            {pageButton('<',filter.page-1)}
            {pageButton(filter.page.toString(),filter.page)}
            {pageButton('>',filter.page+1)}
            {pageButton('>>>',totalPages)}
        </View> 
    )
}


export const filterSection = () => {
    const filter = useSelector((state : RootState) => state.filter)

    const searchByName = (name:string) => {
        dispatch(setFilterSlice({ ...filter, ['name']: name, ['page']: 1 }))
      }
    
      const sortData = (value:string) => {
        dispatch(setFilterSlice({ ...filter, ['_sort']: value }))
      }
    
      const orderData = (value:string) => {
        dispatch(setFilterSlice({ ...filter, ['_order']: value }))
      }
    
      const clearsearch = () => {
        dispatch(setFilterSlice({
          page: 1,
          name: '',
          _sort: 0,
          _order: 0
        }))
    }
    return(
        <View style={UsersStyles.centerBox}>
        <View style={{width:"48%"}}>
          <CustomTextInput value={filter.name} placeholder={'Search by name'} onchange={(text:string)=>searchByName(text)} keybored={"default"}/> 
          <TouchableOpacity style={UsersStyles.search} onPress={clearsearch}>
              <Text>Clear</Text>
          </TouchableOpacity>
        </View>
        <View style={{width:'48.5%'}}>
          <View style={UsersStyles.picker}>
              <Picker
                  key={(index) => index}
                  selectedValue={filter._sort}
                  onValueChange={(itemValue, itemIndex) => sortData(itemValue)}
              >
                  <Picker.Item label="Sort by" value='0'/>
                  <Picker.Item label="Age" value='age'/>
                  <Picker.Item label="Created at" value='createdAt'/>
              </Picker>
          </View>
          <View style={UsersStyles.picker}>
              <Picker
                  key={(index) => index}
                  selectedValue={filter._order}
                  onValueChange={(itemValue, itemIndex) => orderData(itemValue)}
              >
                  <Picker.Item label="Sort order" value='0'/>
                  <Picker.Item label="Asc" value='asc'/>
                  <Picker.Item label="Desc" value='desc'/>
              </Picker>
          </View>
        </View>
  </View>
    )
}