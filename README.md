# GeoFlux
 📊 Sistema de Validação de Estados e Municípios

Este projeto é um **site desenvolvido em Vue.js utilizando Vite** que dispara uma requisição para uma **API backend** responsável por validar se os **estados e municípios** registrados em uma **tabela de clientes industriais** estão corretos, utilizando como referência a **API de Municípios do IBGE**.

Caso os dados **não estejam correspondentes**, a tabela do banco de dados é **atualizada automaticamente** com as informações corretas.  
Independentemente do resultado, os dados da validação são **registrados em uma tabela de Log** no banco de dados.

---

## 🚀 Funcionalidades

- 🔍 **Validação de Estados e Municípios**
  - Verificação dos dados cadastrais utilizando a API oficial do IBGE
  - Correção automática de dados inconsistentes no banco de dados

- 🗂 **Registro de Logs**
  - Todas as validações são salvas em uma tabela de Log
  - Cada registro contém informações como data, status e mensagem

- 📧 **Envio de E-mails**
  - ✅ E-mail de sucesso enviado ao destinatário quando o fluxo é concluído corretamente
  - ❌ E-mail de falha enviado ao destinatário em caso de erro no processo

- 📜 **Histórico de Validações**
  - Exibição dos registros da tabela de Log
  - Possibilidade de:
    - 🔄 Atualizar o histórico
    - 🧹 Limpar a tabela exibida
  - Exibe também o **status da response da API** do histórico

---

## 🛠 Tecnologias Utilizadas

### Frontend
- Vue.js 3
- Vite
- TypeScript
- Tailwind CSS

### Backend (consumido pela aplicação)
- API REST
- Integração com a API de Municípios do IBGE
- Banco de dados relacional
- Serviço de envio de e-mails

---

## 📦 Estrutura do Projeto


src/
├── components/
│   ├── AcionamentoButton.vue
│   ├── HistoricoTable.vue
│   └── LogStatus.vue
├── services/
│   └── api.ts
├── types/
│   └── index.ts
├── App.vue




## ▶️ Como Executar o Projeto

### Pré-requisitos
- Node.js (versão recomendada: **18+**)
- npm ou yarn

### Instalação
```bash
npm install

### Execução em ambiente de desenvolvimento

npm run dev

### Após iniciar o servidor de desenvolvimento, a aplicação estará disponível em:

http://localhost:5173


## 🔗 Integrações

### 🏛 API de Municípios do IBGE
- Utilizada para validação oficial de estados e municípios
- Fonte de dados confiável para conferência das informações geográficas
- Garante que os dados cadastrados estejam alinhados com os registros oficiais do IBGE

### 🔧 API Backend
Responsável por:
- Receber a requisição disparada pelo frontend
- Validar estados e municípios utilizando a API do IBGE
- Corrigir automaticamente dados inconsistentes no banco de dados
- Registrar todas as validações em uma tabela de Log
- Disponibilizar o histórico de validações para consumo pelo frontend
- Enviar notificações por e-mail:
  - ✅ E-mail de sucesso quando o fluxo é concluído corretamente
  - ❌ E-mail de falha quando ocorre algum erro no processamento
