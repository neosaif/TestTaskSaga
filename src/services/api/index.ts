import {request} from "./request"
import {User} from "../../interfaces/user.interface";

export const getUsersList = async (query:string) => request.get(`/users?${query}`)

export const getUserDetails = async (id:number) => request.get(`/users/${id}`)

export const createUser = async (user:User) => request.post(`/users`, user)

export const updateUser = async (user:User) => request.put(`/users/${user.id}`, user)

export const deleteUser = async (id:number) => request.delete(`/users/${id}`)