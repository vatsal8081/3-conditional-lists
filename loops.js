const app = Vue.createApp({

    data(){
        return {
            fruits: ['apple', 'banana'],
            user: {name: 'vatsal', age: 23}
        };
    }
});



app.mount('#app')