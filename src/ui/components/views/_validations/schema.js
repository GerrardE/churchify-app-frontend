const emailSchema = {
  required: "email is required",
  pattern: {
    value: new RegExp("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"),
    message: "email is invalid",
  },
};

const urlSchema = {
  required: "url is required",
  pattern: {
    // eslint-disable-next-line no-useless-escape
    value: new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/),
    message: "url is invalid",
  },
};

const passwordSchema = {
  required: "password is required",
  minLength: { value: 5, message: "min. of 5 characters required" },
};

const textFieldSchema = {
  required: "field is required",
  minLength: { value: 5, message: "min. of 5 characters required" },
};

const numberFieldSchema = {
  required: "field is required",
  minLength: { value: 3, message: "min. of 3 numbers required" },
  maxLength: { value: 20, message: "min. of 20 numbers required" },
};

const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

const accountNumberSchema = {
  required: "account number is required",
  minLength: { value: 10, message: "min. of 10 numbers required" },
  maxLength: { value: 10, message: "max. of 10 numbers required" },
};

export {
  emailSchema,
  urlSchema,
  passwordSchema,
  textFieldSchema,
  isEmpty,
  accountNumberSchema,
  numberFieldSchema,
};
