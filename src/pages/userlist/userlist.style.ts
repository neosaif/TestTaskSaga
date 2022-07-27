import {StyleSheet,Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window')

export const UsersStyles = StyleSheet.create({
    container: {flex:1, backgroundColor:'#FFF',padding:10},
    centerBox: {padding:10,width:'100%',backgroundColor: '#FFFFFF', marginVertical: 5, elevation: 2, borderWidth: width*0.002, borderColor: '#E5E5E5', flexDirection:'row',alignSelf:'center',justifyContent:"space-between"},
    imageWrap: {width:'30%', justifyContent:'center', alignItems:'center',backgroundColor:'#E5E5E5'},
    image: {width:'100%', height: 60, resizeMode:'cover'},
    ageText: {fontWeight:'bold',fontSize:width*0.03,paddingVertical:10,color:'#000'},
    contentBox: {width:"67%",justifyContent:"center",alignItems:'center'},
    nameText: {fontSize:width*0.04,fontWeight:'bold',textAlign:"center",color:'#000'},
    subText: {fontSize:width*0.03,fontWeight:'bold',textAlign:'center',color:'#000',paddingVertical:3},
    search: {height: height*.06,padding:10,backgroundColor:"#E5E5E5",marginVertical:5,justifyContent:"center",alignItems:'center',width:'100%'},
    picker: {height: height*.06,borderWidth: 0.5,backgroundColor:"#FFF",justifyContent:"center",marginBottom:5},
    filter: {width:'100%',flexDirection:"row",justifyContent:"space-between"},
    pagination: {padding:5,width:'98%',backgroundColor: '#FFFFFF', flexDirection:'row',alignSelf:'center',justifyContent:"space-between"},
    paginate: {height: height*.06,padding:10,backgroundColor:"#E5E5E5",justifyContent:"center",alignItems:"center",margin:5},
    footer: {height:height*0.05}
})