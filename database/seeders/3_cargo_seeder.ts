import Cargo from '#models/cargo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Cargo.createMany([
      { "nome": "Gerente" },
      { "nome": "Chef" },
      { "nome": "Cozinheiro" },
      { "nome": "Auxiliar de Cozinha" },
      { "nome": "Garçom" },
      { "nome": "Atendente" },
      { "nome": "Caixa" },
      { "nome": "Barista" },
      { "nome": "Padeiro" },
      { "nome": "Chapeiro" },
      { "nome": "Entregador" },
      { "nome": "Sommelier" },
      { "nome": "Supervisor de Salão" },
      { "nome": "Hostess" },
      { "nome": "Garçonete" },
      { "nome": "Estoquista" },
      { "nome": "Lavador de Pratos" },
      { "nome": "Maitre" },
      { "nome": "Barman" },
      { "nome": "Auxiliar de Limpeza" }
    ])
  }
}
