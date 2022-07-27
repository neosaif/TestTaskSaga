import axios from 'axios'

import {Appconfig} from "../../config/config";
import {User} from "../../interfaces/user.interface";

axios.defaults.baseURL = Appconfig.BASE_URL

export const getUsersList = async (query:string) => axios.get(`/users?${query}`)

export const getUserDetails = async (id:number) => axios.get(`/users/${id}`)

export const createUser = async (user:User) => axios.post(`/users`, user)

export const updateUser = async (user:User) => axios.put(`/users/${user.id}`, user)

export const deleteUser = async (id:number) => axios.delete(`/users/${id}`)