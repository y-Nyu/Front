export const validateProduct = (data) => {
  const errors = {
    name: "",
    brand: "",
    category: "",
    description: "",
    price: "",
    stock: "",
  };

  console.log("DATA IMAGE VALIDATE: " + data.image);
  if (data.name === "" || data.name.length > 20 || data.name.length < 3) {
    errors.name = "Ingese nombre menor a 20 caracteres";
  }
  if (!/https?:\/\/.*\.(?:png|jpg|gif|bmp|svg|jpeg)/i.test(data.image)) {
    errors.image = "Escribe la URL de la imagen con formato valido";
  }
  if (data.brand === "" || data.brand.length > 20) {
    errors.brand = "Ingese marca menor a 20 caracteres";
  }
  if (data.category === "Seleccione") {
    errors.category = "Seleccione una categoria";
  }
  if (data.description === "" || data.description.length < 10) {
    errors.description = "Ingese detalle de producto mayor a 10 caracteres";
    if (data.price.trim() === "") {
      errors.price = "Ingrese precio";
    } else if (isNaN(Number(data.price))) {
      errors.price = "Stock debe ser un número";
    }
    /*
    if (data.stock.trim() === "") {
      errors.stock = "Ingrese stock";
    } else if (isNaN(Number(data.stock))) {
      errors.stock = "Stock debe ser un número";
    }
    */
    if (/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(data.email)) {
      errors.email = "Ingrese una email valido";
    }
    if (errors.cellphone === "") {
      errors.cellphone = "Ingrese una numero celular";
    }
    if (!/(?=.*[a-z])/.test(errors.password)) {
      errors.password = "Requiere una letra minuscula";
    } else if (!/(?=.*[A-Z])/.test(errors.password)) {
      errors.password = "Requiere una letra mayuscula";
    } else if (errors.password.length < 6 || errors.password.length > 10) {
      errors.password = "Requiere entre 6 y 10 caracteres";
    }
 
  }

  return new Object(errors);
};

export const validateUser = (data) => {
  let errors = {};
  if (data.name === "" || data.name.length > 20 || data.name.length < 3) {
    errors.name = "Ingresa un nombre de mínimo 3 y máximo 20 caracteres";
  }
  if (/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(data.email)) {
    errors.email = "Ingresa un email valido - ejemplo@correo.com";
  }
  if (errors.celular === "") {
    errors.celular = "Ingresa un número celular de 11 dígitos";
  }
  if (!/(?=.*[a-z])/.test(errors.password)) {
    errors.password = "Requiere una letra minuscula";
  } else if (!/(?=.*[A-Z])/.test(errors.password)) {
    errors.password = "Requiere una letra mayuscula";
  } else if (errors.password.length < 6 || errors.password.length > 10) {
    errors.password = "Requiere entre 6 y 10 caracteres";
  }

  return errors;
};

export const validateRegister = (data) => {
  let errors = {};

  if (data.name === "" || data.name.length > 20 || data.name.length < 3) {
    errors.name = "Ingresa un nombre de mínimo 3 y máximo 20 caracteres";
  }

  if (!/(?=.*[a-z])/.test(data.password)) {
    errors.password = "Requiere una letra minúscula";
  } else if (!/(?=.*[A-Z])/.test(data.password)) {
    errors.password = "Requiere una letra mayúscula";
  } else if (data.password.length < 6 || data.password.length > 10) {
    errors.password = "Requiere entre 6 y 10 caracteres";
  } 

  if( data.password !== data.passwordConfirmation) {
    errors.passwordConfirmation = 'Las contraseñas no coinciden'
  }

  if (data.address === "" || data.address.length > 30 || data.address.length < 3) {
    errors.address = "La dirección debe tener mínimo 3 y máximo 30 caracteres";
  }

  if (!/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(data.email)) {
    errors.email = "Ingresa un email valido - ejemplo@correo.com";
  }

  if (data.celular === "" || isNaN(Number(data.celular)) || data.celular.length < 11 || data.celular.length > 11) {
    errors.celular = "Ingresa un número celular válido de 11 dígitos";
  }
  

   return errors;
};

export const validateLogin = (data) => {
  let errors = {};

  // if (!/(?=.*[a-z])/.test(data.password)) {
  //   errors.password = "Requiere una letra minúscula";
  // } else if (!/(?=.*[A-Z])/.test(data.password)) {
  //   errors.password = "Requiere una letra mayúscula";
  // } else if (data.password.length < 6 || data.password.length > 10) {
  //   errors.password = "Requiere entre 6 y 10 caracteres";
  // } 

  if( data.password !== data.passwordConfirmation) {
    errors.passwordConfirmation = 'Las contraseñas no coinciden'
  }

  if (!/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(data.email)) {
    errors.email = "Ingresa un email valido - ejemplo@correo.com";
  }

   return errors;
};

export const validateAccountDetail = (data) => {
  let errors = {};

  if (data.name.length < 2 || data.name.length > 25) {
    errors.name = "El nombre debe tener mínimo 2 y máximo 25 caracteres";
  }

  if (!data.celular || !/^\d{11}$/.test(data.celular)) {
    errors.celular = "El número celular debe tener 11 dígitos numéricos";
  }

  if (data.address === "" || data.address.length > 30 || data.address.length < 3) {
    errors.address = "La dirección debe tener mínimo 3 y máximo 30 caracteres";
  }

  if (!/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(data.email)) {
    errors.email = "El formato de email valido es ejemplo@correo.com";
  }

  if (!/(?=.*[a-z])/.test(data.newPassword)) {
    errors.newPassword = "Requiere una letra minúscula";
  } else if (!/(?=.*[A-Z])/.test(data.newPassword)) {
    errors.newPassword = "Requiere una letra mayúscula";
  } else if (data.newPassword.length < 6 || data.newPassword.length > 10) {
    errors.newPassword = "Requiere entre 6 y 10 caracteres";
  } 

  if( data.newPassword !== data.passwordConfirmation) {
    errors.passwordConfirmation = 'Las contraseñas no coinciden'
  }

   return errors;
};