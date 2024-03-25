import { create } from 'zustand'

let useStore = create((set) => ({
  user:"", 
  token:"",  
  rol:"",
<<<<<<< HEAD
  logged:false,
  setUser: (user) => set({ user: user }),
  setToken: (token) => set({ token: token}),
  setRol:(rol)=>set({rol:rol}), 
  setLogged:(login)=>set({logged:login})
=======
  login:false,
  setUser: (user) => set({ user: user }),
  setToken: (token) => set({ token: token}),
  setRol:(rol)=>set({rol:rol}), 
  setLogin:(login)=>set({login:login})
>>>>>>> parent of f385083 (Intentando solucionar)
}))

export  {useStore}; 