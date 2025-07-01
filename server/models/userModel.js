let userData = null;

export const saveUser = (data) =>{
  userData = data;
}

export const getUser =() => {
  return userData;
}

