class AuthForm extends HTMLElement {
    constructor() {
        super();
        this.isLogin = true;
    }

    connectedCallback() {
        this.render();
        this.addEventListener('click', e => {
            if (e.target.id === 'switchForm') {
                e.preventDefault();
                this.isLogin = !this.isLogin;
                this.render();
            }
        });
    }

    render() {
        this.innerHTML = this.isLogin ? this.loginTemplate : this.registerTemplate;
    }

    get loginTemplate() {
        /* html */
        return `
        <section id="login" >
            <h2 class="form-box">Login</h2>
            <form class="form-box" method="post" action="/login">
                <div class="form-input-field">
                    <!-- <label for="email" hidden>Email</label><br> -->
                    <input type="email" name="email" id="email" placeholder="Email"><br>
                </div>

                <div class="form-input-field">
                    <!-- <label for="senha" hidden>Senha</label><br> -->
                    <input type="password" name="senha" id="senha" placeholder="Senha"><br>
                </div>

                <div class="form-input-field">
                    <input type="submit" value="Logar">
                </div>
            </form>
            
            <form class="form-box" action="" method="post">
                <div class="form-input-field">
                    <input type="submit" value="Entrar com Google">
                </div>
            </form>

            <p class="form-box">Não tem uma conta?</p>
            <a class="form-box" a href="#" id="switchForm">★ Criar conta!</a>

        </section>
        `;
    }

    get registerTemplate() {
        /* html */
        return `
        <form id="register" class="form-box" method="post" action="/criar-conta">
            <h2 class="form-input-field">Criar conta!</h2>
            <p>Já tem uma conta? <a href="#" id="switchForm">Fazer login!</a></p>

            <div class="form-input-field">
                <label for="name">Nome completo</label>
                <input type="text" name="name" id="name" placeholder="Nome e sobrenome" required>
            </div>
            <div class="form-input-field">
                <label for="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="Seu e-mail preferido" required>
            </div>
            <div class="form-input-field">
                <label for="CPF">CPF</label>
                <input type="tel" name="cpf" id="cpf" placeholder="Código Pessoa Física" required>
            </div>
            <div class="form-input-field">
                <label for="cep">CEP</label>
                <input type="tel" name="cep" id="cep" placeholder="Código postal" required>
            </div>
            <div class="form-input-field">
                <label for="password">Senha</label>
                <input type="password" name="password" id="password" placeholder="Segredo..." required>
            </div>
            <div class="form-input-field">
                <label for="confirmPassword">Confirmar senha</label>
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Repita o ultimo passo"
                    required>
            </div>

            <hr>
            <h2>Preferências</h2>
            <fieldset>
                <legend>Tipos de Jogos de Mesa</legend>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="rpg" value="rpg">
                    <label for="rpg">RPG (Role-Playing Game)</label>
                </div>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="card-rpg" value="card-rpg">
                    <label for="card-rpg">RPG de Cartas</label>
                </div>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="puzzle" value="puzzle">
                    <label for="puzzle">Quebra-Cabeça</label>
                </div>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="board" value="board">
                    <label for="board">Trilha/Tabuleiro</label>
                </div>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="guessing" value="guessing">
                    <label for="guessing">Adivinhação</label>
                </div>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="strategy" value="strategy">
                    <label for="strategy">Estratégia</label>
                </div>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="cards" value="cards">
                    <label for="cards">Cartas (Deck Building)</label>
                </div>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="dice" value="dice">
                    <label for="dice">Dados</label>
                </div>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="cooperative" value="cooperative">
                    <label for="cooperative">Cooperativo</label>
                </div>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="party" value="party">
                    <label for="party">Party Games</label>
                </div>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="miniatures" value="miniatures">
                    <label for="miniatures">Miniaturas</label>
                </div>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="war" value="war">
                    <label for="war">Guerra</label>
                </div>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="euro" value="euro">
                    <label for="euro">Eurogames</label>
                </div>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="abstract" value="abstract">
                    <label for="abstract">Abstrato</label>
                </div>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="family" value="family">
                    <label for="family">Família</label>
                </div>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="thematic" value="thematic">
                    <label for="thematic">Temático</label>
                </div>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="negotiation" value="negotiation">
                    <label for="negotiation">Negociação</label>
                </div>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="tile" value="tile">
                    <label for="tile">Colocação de Peças</label>
                </div>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="memory" value="memory">
                    <label for="memory">Memória</label>
                </div>

                <div class="checkbox-option">
                    <input type="checkbox" name="game-types" id="trivia" value="trivia">
                    <label for="trivia">Trivia/Quiz</label>
                </div>
            </fieldset>
            
            <input type="submit" value="Cadastrar">
        </form>
        `;
    }
}

customElements.define('auth-form', AuthForm);