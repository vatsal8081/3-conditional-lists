const app = Vue.createApp({

    data(){
        return {
            counter: 0,
            isShow: true
        };
    },

    computed:{

        showByComputing(){
            console.log('in computed 1');
            return Math.random() > 0.5 ? true : false
        },    

        randomFromListComputed(){
            console.log('in computed 2');
            let numList = [1, 2, 3];
            return numList[Math.floor(Math.random() * numList.length)];
        }

    },

    methods:{

        showByMethod(){
            console.log('in method 1');
            return Math.random() > 0.5 ? true : false
        },

        randomFromListMethod(){
            console.log('in method 2');
            let numList = [1, 2, 3];
            return numList[Math.floor(Math.random() * numList.length)];
        }
    }

});


app.mount('#app');