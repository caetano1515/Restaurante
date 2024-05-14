import Produto from '#models/produto'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {

    await Produto.createMany([
      { nome: "Coca-cola lata", preco: 6.5, tamanho: "330 ml", tipoId: 1 },
      { nome: "Coca-cola 2l", preco: 10, tamanho: "2 l", tipoId: 1 },
      { nome: "Coca-cola 600", preco: 8, tamanho: "600 ml", tipoId: 1 },
      { nome: "Coca-cola ks", preco: 6.5, tamanho: "290 ml", tipoId: 1 },
      { nome: "Sprite", "preco": 5.0, "tamanho": "250 ml", "tipoId": 1 },
      { nome: "Guaraná Antarctica", "preco": 7.0, "tamanho": "350 ml", "tipoId": 1 },
      { nome: "Fanta Laranja", "preco": 6.0, "tamanho": "300 ml", "tipoId": 1 },
      { nome: "Pepsi Twist", "preco": 6.5, "tamanho": "290 ml", "tipoId": 1 },
      { nome: "Schweppes Citrus", "preco": 6.0, "tamanho": "310 ml", "tipoId": 1 },
      { nome: "Kuat", "preco": 5.5, "tamanho": "270 ml", "tipoId": 1 },
      { nome: "Soda Limonada", "preco": 6.2, "tamanho": "280 ml", "tipoId": 1 },
      { nome: "Fanta Uva", "preco": 5.8, "tamanho": "320 ml", "tipoId": 1 },
      { nome: "Tubaína", "preco": 6.3, "tamanho": "300 ml", "tipoId": 1 },
      { nome: "Sukita", "preco": 5.7, "tamanho": "330 ml", "tipoId": 1 },
      { nome: "X-miseria", "preco": 4, "tamanho": "200 gm", "tipoId": 2 },
      { nome: "X-sabores", "preco": 6.5, "tamanho": "250 gm", "tipoId": 2 },
      { nome: "X-gourmet", "preco": 8.0, "tamanho": "300 gm", "tipoId": 2 },
      { nome: "X-frango", "preco": 7.0, "tamanho": "280 gm", "tipoId": 2 },
      { nome: "X-vegetariano", "preco": 7.5, "tamanho": "270 gm", "tipoId": 2 },
      { nome: "X-bacon", "preco": 7.2, "tamanho": "290 gm", "tipoId": 2 },
      { nome: "X-sabores", "preco": 6.5, "tamanho": "250 gm", "tipoId": 2 },
      { nome: "X-gourmet", "preco": 8.0, "tamanho": "300 gm", "tipoId": 2 },
      { nome: "X-frango", "preco": 7.0, "tamanho": "280 gm", "tipoId": 2 },
      { nome: "X-vegetariano", "preco": 7.5, "tamanho": "270 gm", "tipoId": 2 },
      { nome: "X-bacon", "preco": 7.2, "tamanho": "290 gm", "tipoId": 2 },
      { nome: "X-picante", "preco": 7.8, "tamanho": "310 gm", "tipoId": 2 },
      { nome: "X-queijo", "preco": 7.3, "tamanho": "280 gm", "tipoId": 2 },
      { nome: "X-churrasco", "preco": 8.2, "tamanho": "320 gm", "tipoId": 2 },
      { nome: "X-ovo", "preco": 7.1, "tamanho": "270 gm", "tipoId": 2 },
      { nome: "X-temperado", "preco": 7.4, "tamanho": "300 gm", "tipoId": 2 },
      { nome: "Porção de Batata Frita", "preco": 12.0, "tamanho": "300 g", "tipoId": 3 },
      { nome: "Porção de Mandioca Frita", "preco": 10.5, "tamanho": "250 g", "tipoId": 3 },
      { nome: "Porção de Onion Rings", "preco": 11.0, "tamanho": "200 g", "tipoId": 3 },
      { nome: "Porção de Isca de Peixe", "preco": 14.0, "tamanho": "280 g", "tipoId": 3 },
      { nome: "Porção de Coxinha", "preco": 9.0, "tamanho": "220 g", "tipoId": 3 },
      { nome: "Porção de Bolinho de Bacalhau", "preco": 13.5, "tamanho": "270 g", "tipoId": 3 },
      { nome: "Porção de Calabresa Acebolada", "preco": 11.5, "tamanho": "300 g", "tipoId": 3 },
      { nome: "Porção de Pastel", "preco": 10.0, "tamanho": "240 g", "tipoId": 3 },
      { nome: "Porção de Frango à Passarinho", "preco": 12.5, "tamanho": "320 g", "tipoId": 3 },
      { nome: "Porção de Polenta Frita", "preco": 10.8, "tamanho": "260 g", "tipoId": 3 }
    ])

  }
}
