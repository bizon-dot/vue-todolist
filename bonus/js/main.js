const app = new Vue ({
    el: "#root",
    data : {
        newTask: '',
        tasks: [{
            task: `Consegnare il 730`,
            status: true
        },
        {
            task: `Fare la spesa`,
            status: false
        },
        {
            task: `Andare dal meccanico`,
            status: true
        }
    
    ], 
    },
    methods: {
        addTask(){
                this.tasks.push(this.newTask);
                this.newTask = '';
        },
        removeTask(index){
            this.tasks.splice(index,1);

        },
        changeStatus(index){
            console.log(this.tasks[index]);
            this.tasks[index].status = !(this.tasks[index].status);
            console.log(this.tasks[index].status);
        }
    }
})