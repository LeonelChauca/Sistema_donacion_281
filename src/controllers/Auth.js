import { create } from 'zustand'

let useStore = create((set) => ({
  user:"", 
  token:"",  
  rol:"",
  logged:false,
  setUser: (user) => set({ user: user }),
  setToken: (token) => set({ token: token}),
  setRol:(rol)=>set({rol:rol}), 
  setLogged:(login)=>set({logged:login})
}))

export  {useStore}; 