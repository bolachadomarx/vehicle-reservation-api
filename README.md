# Happmobi - API para reserva de veículos

## Abaixo seguem as instruções para rodar o projeto em sua máquina

### 1. Instalar as dependências necessárias

    npm install

### 2. Para garantir que tudo está funcionando corretamente, rode os testes unitários

    npm run test

Existem ao todo 9 testes unitários que testam a integridade das rotas desenvolvidas. É importante que todos os casos implementados passem nos testes.

### 3. Agora que o projeto já foi testado, inicie a API

    npm start

#### O servidor estará disponível em http://localhost:3000

#### Para entender melhor como estão estruturados os endpoints acesse a documentação fornecida pelo Postman

[Documentação online das rotas](https://documenter.getpostman.com/view/4447131/TWDWJcEc)

## Caso prefira, poderá rodar o projeto utilizando o Docker seguindo as intruções abaixo

### 1. Você precisa ter o Docker instalado em sua máquina

### 2. Após a instalação do Docker você deverá acessar o diretório do projeto em seu computador e rodar o seguinte comando

    docker-compose -f "docker-compose.yml" up -d --build

#### O servidor estará disponível em http://localhost:3000
