const app = Vue.createApp({

    data(){
        return {
            tasks: [],
            inputData: '',
            isShowList: true
        };
    },

    methods: {

        addTask(){
            this.tasks.push(this.inputData);
            this.inputData = '';
        }
    }

});



app.mount('#app')