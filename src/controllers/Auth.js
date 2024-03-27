import { create } from 'zustand'
const getLogged=()=>{
   if(localStorage.getItem("logged")){
    return localStorage.getItem("logged")==="true"
   }
   //Deveria ser falso , si no esta logeado , 
   //Solo para el desarrollo se lo considera de esta logeado
   return true ; 
}
let useStore = create((set) => ({
  user:localStorage.getItem("user")??"Leo", 
  token:localStorage.getItem("token")??"",  
  rol:localStorage.getItem("rol")??"admin",
  logged:getLogged(),

  setUser: (user) => set({ user: user }),
  setToken: (token) => set({ token: token}),
  setRol:(rol)=>set({rol:rol}), 
  setLogged:(login)=>set({logged:login}),

  login:false,
  setUser: (user) => set({ user: user }),
  setToken: (token) => set({ token: token}),
  setRol:(rol)=>set({rol:rol}), 
  setLogin:(login)=>set({login:login})
}))

export  {useStore}; 