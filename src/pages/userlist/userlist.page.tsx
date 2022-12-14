import React, {useEffect} from "react";
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { GET_USERS_LIST, ENABLE_LOADING} from '../../redux/actions';
import {RootState} from '../../redux/store/root.reducer';
import {UsersStyles} from './userlist.style';
import {User} from '../../interfaces/user.interface';
import Spinner from '../../components/Loader/Loader.component';
import {renderUsersList, renderFooter, addUser, pagination, filterSection} from './userlist.component';
import {filterQuery} from '../../utils/functions/func';

interface Props {}

const Users = (props: Props) => {
  const dispatch = useDispatch()
  const users = useSelector((state : RootState) => state.users)
  const filter = useSelector((state : RootState) => state.filter)
  
  useEffect(() => {
    let query = filterQuery(filter)
    console.warn(query);
    dispatch({ type: GET_USERS_LIST, query })
    // dispatch({ type: ENABLE_LOADING })
  }, [filter]);

  return (
      <View style={UsersStyles.container}>
          <Spinner/>
          {filterSection()}
          <FlatList
            data={users}
            keyExtractor={(item: User) => item.id}
            renderItem={renderUsersList}
            ListFooterComponent={renderFooter}
          />
          <View style={UsersStyles.pagination}>
            {pagination()}
            {addUser()}
          </View>
      </View>
     
  );
};

export default Users;
