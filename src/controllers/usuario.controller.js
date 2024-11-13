import { Usuario } from "../models/Usuario.model.js"

export const crearNuevoUsuario = async(req, res) => {
    try {
        const data = req.body
        const usuario = await Usuario.crear(data)

        res.status(201).json({
            message: 'Usuario Creado con éxito',
            status: 201,
            data: usuario
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error al creare al usuario',
            status: 500,
            error
        })
    }
}