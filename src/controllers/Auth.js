import { create } from 'zustand'
const getLogged=()=>{
   if(localStorage.getItem("logged")){
    return localStorage.getItem("logged")==="true"
   }
   //Deveria ser falso , si no esta logeado , 
   //Solo para el desarrollo se lo considera de esta logeado
   return false ; 
}
let useStore = create((set) => ({
  id_user: localStorage.getItem("id_user")??"",
  user:localStorage.getItem("user")??"", 
  token:localStorage.getItem("token")??"",  
  rol:localStorage.getItem("rol")??"",
  logged:getLogged(),

  setidUser: (iduser) => set({ id_user: iduser }),
  setUser: (user) => set({ user: user }),
  setToken: (token) => set({ token: token}),
  setRol:(rol)=>set({rol:rol}), 
  setLogged:(login)=>set({logged:login}),

  //login:false,
  //setUser: (user) => set({ user: user }),
  //setToken: (token) => set({ token: token}),
  //setRol:(rol)=>set({rol:rol}), 
  //setLogin:(login)=>set({login:login})
}))

export  {useStore}; 