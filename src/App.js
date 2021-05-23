import React from 'react';
import './App.css';

class Form extends React.Component {

  constructor() {
    super()

    this.state = {
      name:'',
      age:'',
      sex:'',
      petType:'',
      service:'',

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = input => (event) => {
    this.setState({[input]: event.target.value});
    
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("El nombre de su mascota: " + (this.state.name)+ "\n" +
          "La edad de su mascota: " + (this.state.age)+ "\n" +
          "El sexo de su mascota: " + (this.state.sex)+ "\n" +
          "Tipo de mascota: " + (this.state.petType)+ "\n" +
          "Tipo de servicio: " + (this.state.service)
    )

  }

  

  render() {
    return (
      <form >
        <label>
        Ingresa el nombre
            <input onChange={this.handleChange("name")} type="text"></input>
        </label>
        <br></br>

        <label>
        Ingrese la edad
            <input onChange={this.handleChange("age")} type="text"></input>
        </label>
        <br></br>

        <label>
        Seleccione el sexo 
          <select onChange={this.handleChange("sex")}>
          <option disabled selected value> selecione una opcion </option>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </select>
        </label>
        
        <br></br>

        <label>
        Seleccione el tipo de mascota
          <select  onChange={this.handleChange("petType")}>
          <option disabled selected value> selecione una opcion </option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Hamster">Hamster</option>
            <option value="Ave">Ave</option>
          </select>
        </label>
        
        <br></br>

        <label>
        Seleccione el tipo de servicio
          <select  onChange={this.handleChange("service")}>
            <option disabled selected value> selecione una opcion </option>
            <option value="Valoracion">Valoracion</option>
            <option value="Urgencias">Urgencias</option>
            <option value="Hospitalizacion">Hospitalizacion</option>
          </select>
        </label>
        
        <br></br>
        
        
        <button type="button" onClick={this.handleSubmit} >Agregar</button>
    </form>
    );
  }
}



export default Form;
