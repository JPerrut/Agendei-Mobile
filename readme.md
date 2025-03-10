# 🏥 Agendei - Sistema de Agendamento Médico (Mobile) [![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/) [![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

### 🚀 Visão Geral

Sistema completo para agendamento de consultas médicas, composto por:

- 📱 **Aplicativo Mobile** (Pacientes)
- 🖥️ **Painel Admin** (Gestores)
- 🚀 **Backend** (API RESTful)

Este repositório contém o **Mobile** do sistema, que permite que os usuários se cadastrem, escolham médicos e marquem consultas..

## ✨ Características do Projeto

✅✔ Cadastro e Login de Usuários – Permite que os usuários se cadastrem e acessem o sistema.
<br>
✅✔ Agendamento de Consultas – Interface para marcar, editar e cancelar consultas.
<br>
✅✔ Visualização de Médicos – Lista de médicos disponíveis para agendamento.
<br>
✅✔ Calendário Integrado – Utilização de react-native-calendars para facilitar a escolha de datas.
<br>
✅✔ Navegação Intuitiva – Navegação entre telas com @react-navigation.
<br>
✅✔ Design Responsivo – Interface adaptada para diferentes tamanhos de tela.

## 🛠️ Tecnologias Utilizadas

### Mobile

- **React Native** – Framework para desenvolvimento de aplicativos móveis multiplataforma.

- **Expo** – Plataforma que facilita o desenvolvimento e a publicação de aplicativos React Native.

- **Axios** – Cliente HTTP para comunicação com o backend.

- **React Navigation** – Biblioteca para gerenciamento de navegação entre telas.

- **React Native Calendars** – Componente para exibição e seleção de datas.

- **React Native Picker** – Componente para seleção de opções em formulários.

## 🛠️ Ferramentas de Desenvolvimento

- **Expo CLI** – Ferramenta para desenvolvimento e build de aplicativos Expo.

- **Babel** – Transpilador para JavaScript moderno.

## Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn (gerenciadores de pacotes)

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/JPerrut/agendei-mobile.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd agendei-mobile
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npx expo start
   ```

## 🖥️ Telas do Aplicativo

### Abaixo estão as principais telas disponíveis no aplicativo:

<div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
  <div style="width: 33%;">
    <img src="assets/readme/register.png" alt="Tela de Cadastro" style="width: 100%;"/>
    <p style="text-align: center;"><strong>Tela de Cadastro</strong></p>
  </div>
  <div style="width: 33%;">
    <img src="assets/readme/login.png" alt="Tela de Login" style="width: 100%;"/>
    <p style="text-align: center;"><strong>Tela de Login</strong></p>
  </div>
    <div style="width: 33%;">
    <img src="assets/readme/screenDoctors.png" alt="Tela de Consultas" style="width: 100%;"/>
    <p style="text-align: center;"><strong>Tela de Consultas</strong></p>
  </div>
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
  <div style="width: 33%;">
    <img src="assets/readme/appointment.png" alt="Tela de Agendamento" style="width: 100%;"/>
    <p style="text-align: center;"><strong>Tela de Agendamento</strong></p>
  </div>
    <div style="width: 33%;">
    <img src="assets/readme/scheduleAppointment.png" alt="Tela de Agendamento de horário" style="width: 100%;"/>
    <p style="text-align: center;"><strong>Tela de Agendamento de horário</strong></p>
  </div>
  <div style="width: 33%;">
    <img src="assets/readme/cancelAppointment.png" alt="Tela de Agendamento concluído" style="width: 100%;"/>
    <p style="text-align: center;"><strong>Tela de Agendamento concluído</strong></p>
  </div>
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
  <div style="width: 33%;">
    <img src="assets/readme/user.png" alt="Tela de Usuário" style="width: 100%;"/>
    <p style="text-align: center;"><strong>Tela de Usuário</strong></p>
  </div>
</div>

## Contribuição

### Contribuições são bem-vindas! Siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a <a href="https://opensource.org/license/mit">MIT License</a>.

## Contato

### Se tiver dúvidas ou sugestões, entre em contato:

Nome: João Perrut <br>
Email: joaoperrutc@gmail.com <br>
Linkedin: https://www.linkedin.com/in/perrut/
