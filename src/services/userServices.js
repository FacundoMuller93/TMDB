import axios from "axios"

export const userRegisterService = async ({
  nombre,
  apellido,
  edad,
  email,
  contraseña,
}) => {
  const register = await axios.post("http://localhost:3001/api/user/register", { nombre: nombre, apellido: apellido, edad: edad, email: email, contraseña: contraseña })
  return register.data
}

export const userLoginService = async ({ email, contraseña }) => {
  const loginUser = await axios.post("http://localhost:3001/api/user/login", { email, contraseña })
  return loginUser.data
}

export const userLogoutService = async () => {
  const logoutUser = await axios.post("http://localhost:3001/api/user/logout")
  return logoutUser.data
}

export const userInfoService = async id => {
  const userInfo = await axios.get(`http://localhost:3001/api/user/${id}`
  )
  return userInfo.data
}