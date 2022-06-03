<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h1>Sobre o profissional</h1>
                <h3>Dados do profissional</h3>
            </div>
            <form>
                <div class="row">
                    <div class="col">
                        <div class="form-group col-sm-12 mb-4">
                            <label for="nome">Nome Completo*</label>
                            <input id="nome" class="form-control" name="nome" type="text" v-model="nome" placeholder="Digite o nome completo" />
                        </div>
                        <div class="form-group col-sm-8 mb-4">
                            <label for="cpf">CPF*</label>
                            <input id="cpf" class="form-control" name="cpf" type="text" v-model="cpf" placeholder="Digite um cpf" />
                        </div>
                        <div class="form-group col-sm-8 mb-4">
                            <label for="telefone">Número do celular*</label>
                            <input id="telefone" class="form-control" name="telefone" type="text" v-model="telefone" placeholder="(00) 0 0000-0000" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="box">
                            <img src="/img/desktop-pagina-1.png" alt="">
                        </div>
                    </div>
                </div>  

                <div class="row">
                    <div class="col-md-3">
                        <label for="inputEstados" class="form-label" >Estado*</label>
                        <select id="inputEstados" v-model="estadoSelecionado" class="form-select" >
                            <option v-for="estado in estados" :key="estado.index" v-bind:value="estado"> {{ estado }} </option>
                        </select>
                    </div>
                    
                    <div class="col-md-3">
                        <label for="cidades" class="form-label">Cidade*</label>
                        <select id="cidades" class="form-select">
                            <option selected v-for="cidade in cidadeSelecionada" :key="cidade.index"> {{ cidade }} </option>
                        </select>
                    </div>
                </div>
                <div>
                    <button class="w-50 btn" type="submit" @click.prevent="detalhes">PROXIMO</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: "Usuario",

  data: function(){
    return {
    nome: "",
    cpf: "",
    telefone: "",
    inputEspecialidades: "",
    inputEstados: "",
    cidadeSelecionada: "",    
    
    estadoSelecionado: '',
    estados: [
    	'Paraná', 'Rio Grande do Sul', 'Santa Catarina'
    ],
    cidades: {
    	Paraná:[
    		'Londrina', 'Maringá'
    	],
    	'Rio Grande do Sul':[
    		'Pelotas', 'Porto Alegre'
    	],
    	'Santa Catarina':[
    		'Florianópolis', 'Joinville'
    	]
    },
    }
    },
  methods: {
    detalhes(){
      this.$router.push({name: 'detalhes'});
    }
  },
  computed: {
      cidadeSelecionada() {
          return this.cidades[this.estadoSelecionado]
      }
  }
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

form {
    margin: 1rem;
}

input, select {
    padding: 5px 10px;
    margin-bottom: 10px;
    display: flex;
    border: 2px solid #483698;
    border-radius: 5px;
    background-color: transparent;
    font-size: 1rem;
}

label {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
}
</style>