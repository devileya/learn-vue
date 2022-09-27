const vm = Vue.createApp({
    data() {
        return {
            firstName: "Arif",
            lastName: "Siregar",
            url: "https://google.com",
            raw_html: "<a href='https://medium.com' target='_blank'>Go To Medium</a>"
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