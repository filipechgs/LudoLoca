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
                <input type="tel" name="cpf" id="cpf" placeholder="Código Pessoa Física)" required>
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
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Repita o ultimo passo" required>
            </div>
            <input type="submit" value="Cadastrar">
            <p>Já tem uma conta? <a href="#" id="switchForm">Fazer login!</a></p>
        </form>
        `;
    }
}

customElements.define('auth-form', AuthForm);