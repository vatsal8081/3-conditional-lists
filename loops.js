const app = Vue.createApp({

    data(){
        return {
            fruits: ['apple', 'banana'],
            user: {name: 'vatsal', age: 23},
            counter: 0,
            todo: [],
            todoInput: ""
        };
    },

    computed: {

        getNames(){
            console.log('in computed');
            return ['vatsal', 'sarvesh', 'shivam']
        }

    },


    methods: {
        getNamesMethod(){
            console.log('in method');
            return ['vatsal', 'sarvesh', 'shivam']
        },

        addTodo(){
            if (!this.todoInput) {
                return;
            }
            this.todo.push(this.todoInput)
            this.todoInput = ""
        },

        removeTodo(i){
            this.todo.splice(i,1);
        }
    }
});



app.mount('#app')