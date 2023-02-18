const { createApp } = Vue;

const app = createApp({
 
  data() {
    return {
      emails: [],
    };
  },
 
  mounted() {
    this.generaEmail();
    this.stampa();
  },
 
  methods: {
    async generaEmail() { // [async] Istruzione che definisce la funzione come asincrona.
      for (let i = 0; i < 10; i++) {
        const result = await axios.get("https://flynn.boolean.careers/exercises/api/random/mail"); //[await] Operatore che attende una risposta da [axios.get] prima di eseguire ulteriore codice.
        this.emails.push(result.data.response);
      }

      const lista = Object.assign({}, this.emails); //[Object.assign] Consente di copiare tutte le proprietà di uno o più oggetti in un altro oggetto, in questo caso utilizzato per avere una copia dell'oggetto "Emails" non proxy.
      console.log(lista);
    },

    stampa() {
      console.log("Vengo stampato prima io in quanto la funzione generaEmail() è asicrona, quindi richiede del tempo affinchè il server risponda e venga completata.")
    } 
  },
}).mount("#app");