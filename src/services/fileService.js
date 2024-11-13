import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const createFile = async(data, pathData) => {
    try {
        const datafilePath = path.join(__dirname, `../data/${pathData}`)
        
        await fs.mkdir(path.dirname(datafilePath) , { recursive: true })

        await fs.writeFile(datafilePath, JSON.stringify(data, null, 4), 'urf8', (err) => {
            throw new Error(`Error al crear al archivo: ${err}`);
        });
    } catch (error) {
        throw new Error(`Error al crear o guardar el archivo ${error}`)
    }
}