
const texto={exp:"^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ ]{2,}$", msg:"Solo letras #caracteres >= 2"} 
const user={exp:"[a-zA-Z][a-zA-Z0-9_]{3,15}", msg:"Usuario Invalido #caracteres>3 que comience con caracteres"}
const pass={exp:"[a-zA-Z0-9_]{8,}", msg:"Password Invalido #>= 8"}
const number={exp:"^[0-9]{5,10}$", msg:"Solo números #>=5 y =<10"}
const nit={exp:"^[0-9]{5}$", msg:"Nit invalido"}
const tel ={exp:"^(7|6)[0-9]{7}$", msg:"Numero de teléfono invalido  tiene que ser de 7 dígitos "}
const correo={exp:"[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}", msg:"Email invalido"}
const direccion={exp: "^[a-zA-Z][a-zA-Z0-9 ]{3,}$", msg:"La dirección invalida #caracteres>3 "}
const expReg = {
    texto,
    user,
    pass,
    number,
    tel,
    correo, 
    direccion, 
    nit
}
export default expReg 