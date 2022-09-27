const vm = Vue.createApp({
    data() {
        return {
            firstName: "Arif",
            lastName: "Siregar",
            url: "https://google.com"
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName}`
        }
    }
}).mount('#app')

setTimeout(() => {
    vm.lastName = "Fadly"
}, 2000)