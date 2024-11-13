import { v4 as uuidv4 } from "uuid";

export class Usuario {
  #id;
  #name;
  #lastname;
  #email;
  #active;
  #rol;

  constructor(name, lastname, email, rol) {
    this.#id = uuidv4()
    this.#name = name; //Tenemos que validar esto
    this.#lastname = lastname;
    this.#email = email;
    this.#rol = rol;
    this.#active = true;
  }

  get id() {
    return this.#id
  }

  get nameComplete() {
    return `${this.#name} ${this.#lastname}`
  }

  get name() {
    return this.#name
  }

  get lastname() {
    return this.#lastname
  }

  get email() {
    return this.#email
  }

  get rol() {
    return this.#rol
  }

  get active() {
    return this.#active
  }


  setName(newName) {
    //validar name
    this.#name = newName
  }

  setLastname(newLastname) {
    //validar lastname
    this.#lastname = newLastname
  }

  setEmail(newEmail) {
    this.#email = newEmail
  }

  setActive() {
    this.#active = !this.#active
  }

  getAllProperties() {
    return {
        id: this.#id,
        name: this.#name,
        lastname: this.#lastname,
        email: this.#email,
        rol: this.#rol,
        active: this.#active
    }
  }

}


