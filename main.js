// Classe Abstrata
class Veiculo {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    detalhes() {
      return `${this.marca} ${this.modelo}`;
    }
  }
  
  // Classe Carro herda de Veiculo
  class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
      super(marca, modelo); // Chama o construtor da classe pai
      this.portas = portas;
    }
  
    detalhes() {
      return `${super.detalhes()} com ${this.portas} portas`;
    }
  }
  
  // Classe Moto herda de Veiculo
  class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
      super(marca, modelo);
      this.cilindradas = cilindradas;
    }
  
    detalhes() {
      return `${super.detalhes()} com ${this.cilindradas} cilindradas`;
    }
  }
  
  // Criar instâncias de objetos
  const carro1 = new Carro("Toyota", "Corolla", 4);
  const carro2 = new Carro("Honda", "Civic", 4);
  const moto1 = new Moto("Yamaha", "XJ6", 600);
  
  console.log(carro1.detalhes()); // Toyota Corolla com 4 portas
  console.log(carro2.detalhes()); // Honda Civic com 4 portas
  console.log(moto1.detalhes());  // Yamaha XJ6 com 600 cilindradas
  