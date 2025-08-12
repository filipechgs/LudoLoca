# Rotas

- GET "/" 
    - Página do login e criar-conta;

- POST "/login"
    - Envia dados do login para autenticação
    - Recebe a página inicial do usuário

- POST "/criar-conta"
    - Envia dados para a criação da nova conta
    - Recebe confirmação da criação da conta com redirecionamento para login: "/"