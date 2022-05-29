const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500; //si el statusCode no esta definido, se le asigna 500 por defecto (Internal Server Error) 

  res.status(statusCode).json({
    message: err.message, 
    stack: process.env.NODE_ENV === 'production' ? null : err.stack, //si estamos en produccion, no mostramos el stack 
  });
};

module.exports = {
  errorHandler
}