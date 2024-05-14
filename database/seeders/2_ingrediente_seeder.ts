import Ingrediente from '#models/ingrediente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Ingrediente.createMany([
      { "nome": "Tomate", "descricao": "Ingrediente ideal para saladas e molhos." },
      { "nome": "Alface", "descricao": "Folha verde crocante para suas saladas." },
      { "nome": "Queijo", "descricao": "Ótimo para pizzas, sanduíches e pratos." },
      { "nome": "Frango", "descricao": "Proteína versátil para várias receitas." },
      { "nome": "Bacon", "descricao": "Adiciona textura crocante e sabor." },
      { "nome": "Cenoura", "descricao": "Raiz doce e crocante para saladas." },
      { "nome": "Batata", "descricao": "Versátil, perfeita para fritar ou assar." },
      { "nome": "Cebola", "descricao": "Aromático essencial em muitos pratos." },
      { "nome": "Pimenta", "descricao": "Adiciona um toque picante aos pratos." },
      { "nome": "Sal", "descricao": "Realça o sabor de qualquer preparação." },
      { "nome": "Azeite", "descricao": "Óleo saudável para cozinhar ou temperar." },
      { "nome": "Vinagre", "descricao": "Acidez para marinadas e molhos." },
      { "nome": "Maionese", "descricao": "Condimento cremoso para sanduíches." },
      { "nome": "Mostarda", "descricao": "Condimento picante para molhos." },
      { "nome": "Ketchup", "descricao": "Molho doce para hambúrgueres e fritas." },
      { "nome": "Pão", "descricao": "Base para sanduíches, torrado ou fresco." },
      { "nome": "Massa", "descricao": "Fundamental na cozinha italiana." },
      { "nome": "Arroz", "descricao": "Acompanha uma infinidade de pratos." },
      { "nome": "Feijão", "descricao": "Fonte de proteína em sopas e guisados." },
      { "nome": "Peixe", "descricao": "Proteína magra, grelhado ou assado." }
    ])
  }
}
