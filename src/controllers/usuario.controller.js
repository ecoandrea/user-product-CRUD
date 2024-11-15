import { Usuario } from "../models/Usuario.model.js"

export const crearNuevoUsuario = async(req, res) => {
    try {
        const data = req.body
        const usuario = await Usuario.crear(data);

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

export const obtenerTodosLosUsuarios = async(req, res) => {
    try {
        const data = await Usuario.encontrarTodos();

        if(!data) throw new Error('No existen los datos')

        res.status(200).json({
            message: 'Usuarios Encontrados!',
            status: 200,
            data
        })
    } catch (error) {
        res.status(500).json({
          message: "Error al obtener los usuarios",
          status: 500,
          error,
        });
    }
}


export const obtenerUsuarioPorId = async(req, res) => {
    try {
        const { id } = req.params;
        const data = await Usuario.encontrarPorId(id);

        res.status(200).json({
            messsage: 'Usuario Encontrado',
            status: 200,
            data
        })
    } catch (error) {
         res.status(500).json({
           message: "Error al obtener el usuario",
           status: 500,
           error,
         });
    }
}