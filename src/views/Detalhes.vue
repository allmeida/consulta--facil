<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Sobre o atendimento</h1>
                <h3>Detalhes do atendimento</h3>
            </div>
            <form>
                <div class="row">
                    <div class="col">
                        <div class="form-group col-sm-12 mb-4">
                            <label for="especialidade" class="form-label">Especialidade principal*</label>
                            <select v-model="especialidade" class="form-select" id="especialidade">
                                <option>Selecione a especialidade</option>
                                <option>Cardiologia</option>
                                <option>Dermatologia</option>
                                <option>Neurologia</option>
                                <option>Oftalmologia</option>
                                <option>Psiquiatria</option>
                                <option>Urologia</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="box">
                            <img src="/img/desktop-pagina-2.png" alt="">
                        </div>
                    </div>
                </div>         
                <div class="row">
                    <div class="col">
                        <div class="form-group col-sm-4 mb-4">
                            <label for="valor">Informe o preco da consulta*</label>
                            <div class="input-group mb-2 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">R$</div>
                                </div>
                                <input type="number" class="form-control" id="valor" v-model="valor" placeholder="Valor">
                            </div>
                        </div>
                        <div class="col">
                            <p>Formas de pagamento da consulta*</p>
                        </div>
                    </div>                
                </div>
                <div class="row"> 
                    <div class="cards-list">
                        <div id="card">
                            <div class="card-box mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="dinheiro" id="flexCheckDefaultDinheiro" v-model="pagamento">
                                    <label class="form-check-label" for="flexCheckDefaultDinheiro">
                                    Em dinheiro
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div id="card">
                            <div class="card-box mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="pix" id="flexCheckDefaultPix" v-model="pagamento">
                                    <label class="form-check-label" for="flexCheckDefaultPix">
                                        Pix
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div id="card">
                            <div class="card-box mb-3">
                                <div class="form-check">
                                    <input v-model="pagamento" type="checkbox" class="form-check-input">
                                    <label class="form-check-label" for="cartao">Cartao de credito</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button class="w-50 btn" type="submit" @click.prevent="">PROXIMO</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Detalhes",

  data() {
    return {
        especialidade: '',
        valor: '',
        pagamento: [],
    };
  },
  methods: {
    detalhes(){
      this.$router.push({name: 'detalhes'});
    }
  },
};
</script>

<style scoped>
h1 {
    color: #483698;
    margin-bottom: 30px;
    font-family: Arial, Helvetica, sans-serif;
}

h3 {
    margin-bottom: 0px;
    font-family: Arial, Helvetica, sans-serif; 
}

.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.card {
    background: #fff;
    border-radius: 25px;
    display: inline-block;
    height: 700px;
    margin: 1rem;
    position: center;
    width: 800px;
    padding: 30px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

#card .card-box {
    background: #F9F9F9;
    width: 350px;
    padding: 10px;
    align-items: center;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.10), 6px 6px 6px 6px rgba(0,0,0,0.10);
}

.box img {
    float: right;
    position: absolute;
    width: 400px;
    height: 300px;
    margin-left: -15px;
}

.btn {
    background-color: #483698;
    border: none;
    border-radius: 25px;
    color: white;
    padding: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin-top: 20px;
    cursor: pointer;
}

.input-group-text {
    background-color: #483698;
    border: none;
    color: white;
}

form {
    margin: 1rem;
}

input, select {
    padding: 5px 10px;
    margin-bottom: 10px;
    display: flex;
    border: 2px solid #483698;
    background-color: transparent;
    font-size: 1rem;
}

label, p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    
}
</style>