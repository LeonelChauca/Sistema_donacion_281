import { create } from 'zustand'

let useStore = create((set) => ({
  user:"", 
  token:"",  
  rol:"",
  login:false,
  setUser: (user) => set({ user: user }),
  setToken: (token) => set({ token: token}),
  setRol:(rol)=>set({rol:rol}), 
  setLogin:(login)=>set({login:login})
}))

export  {useStore}; 