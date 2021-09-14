const app = new Vue ({
    el: "#root",
    data : {
        newTask: '',
        tasks: ['Spesa', 'Meccanico', 'Coding'], 
    },
    methods: {
        addTask(){
                this.tasks.push(this.newTask);
                this.newTask = '';
        },
        removeTask(index){
            this.tasks.splice(index,1);

        }
    }
})