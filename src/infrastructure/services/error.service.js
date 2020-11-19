import MESSAGES from "@domain/constants/messages";

const errorHandler = (error) => {
  let { status, message } = error.response;
  const debug = "console";

  switch (status) {
  case 401:
    message = MESSAGES[401];
    break;
  case 403:
    message = MESSAGES[403];
    break;
  case 404:
    message = MESSAGES[404];
    break;
  case 500:
    message = MESSAGES[500];
    break;
  default:
    debug.log("default");
  }

  return message;
};

export default errorHandler;
