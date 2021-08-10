const vm = new Vue({
    el:'#app',
    data:{
        items:[
        ],
        newItemTitle:''
    },
    methods:{
        addTodo:function(){
            this.items.push({
                title:this.newItemTitle,
                isChecked:false
            });
        },
        deleteComplete:function(){
            this.items=this.items.filter(function (item){
                return item.isChecked===false;
            });
        },
    }
})