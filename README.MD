# 🏎️ Formula 1 API

Uma API simples para consultar informações sobre equipes e pilotos da Fórmula 1, desenvolvida com Fastify e TypeScript.

## 📋 Requisitos

- Node.js v20+
- npm v9+
- TypeScript

## 🚀 Como executar

```bash
git clone https://github.com/seu-usuario/formula1-api.git
cd formula1-api
npm install
npm run start:dev
```

## 🔧 Scripts disponíveis
- Comando	Descrição
- start:dev	Inicia o servidor em desenvolvimento
- start:watch	Inicia com hot-reload
- build	Compila o projeto TypeScript
- start	Inicia em produção

## 🌐 Endpoints

### 🏁 Equipes

**GET /teams**
Retorna todas as equipes

### 🧑‍🏭 Pilotos

**GET /drivers**
Retorna todos os pilotos

**GET /drivers/:id**
Retorna um piloto específico

##🛠️ Tecnologias utilizadas

- Fastify
- TypeScript
- dotenv 
- tsx

## 📌 Exemplo de respostas

**Lista de equipes:** 
```json

{
  "teams": [
    {"id": 1, "name": "Ferrari"},
    {"id": 2, "name": "Red Bull Racing"}
  ]
}
```

**Detalhes de piloto:**

```json

{
  "driver": {
    "id": 1,
    "name": "Charles Leclerc",
    "teamId": 1,
    "teamName": "Ferrari"
  }
}
```

## 🤝 Como contribuir

- Faça um fork do projeto
- Crie sua branch (git checkout -b feature/incrivel)
- Commit suas mudanças (git commit -m 'Adiciona feature incrível')
- Push para a branch (git push origin feature/incrivel)
- Abra um Pull Request

## 📄 Licença

ISC

## Desenvolvido por Paulo Lima a partir do boilerplate do Felipão 
[@felipeAguiarCode](https://github.com/felipeAguiarCode/felipeAguiarCode)