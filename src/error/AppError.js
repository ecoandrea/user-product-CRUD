class AppError extends Error {
    constructor(message, statusCode, details) {
        super(message); //hereda 
        this.statusCode = statusCode;
        this.details = details
    }
}

export default AppError

//AppError hereda de Error sus propiedades
// la clase para errores es  Error
//throw es el return , new , es la nueva instancia Error es la clase