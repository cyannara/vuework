    //data : input 태크, todo list

    // 닫기버튼 추가
    // 닫기 이벤트
    // 체크 - toggle
    // 추가
    const app = Vue.createApp({
        data() {
            return {
                inputTodo : '',
                todos : [     ]
            }
        }
        ,
        computed: {
            remaining(){
                return this.todos.filter(function(todo){
                    if (todo.todoyn == 0) return 1
                }).length;
            }
        }
        , 
        methods :{
            todoDelete(idx){
                //ajax
                fetch("../todoDelete?no="+no)
                .then(response=>response.text)
                .then(result=>{
                    this.todos.splice(idx,1);
                })
            },
            todoInsert(){
                //ajax
                fetch("../todoInsert",{
                    method:'POST',
                    headers: {
                          /* 'Content-Type': 'application/json' */
                           'Content-Type': 'application/x-www-form-urlencoded',
                            },
                    body : "contents=" + this.inputTodo
                })
                .then(response=>response.json())
                .then(result=>{
                    this.todos.push(result);         
                    this.inputTodo = '';  
                })
     
            },
            todoChange(idx){
                //ajax
                fetch("../todoUpdate",{
                    method:'POST',
				    headers: { 'Content-Type': 'application/x-www-form-urlencoded',   },
		    	    body:"no="+no+"&todoyn="+todoyn    	
                })
                .then(response=>response.text())
                .then(result=>{ this.todos[idx].todoyn = this.todos[idx].todoyn == 1 ? 0 : 1; });
                
            },
            todoDoneDelete(){
                this.todos.forEach(function(todo, idx){
                    this.todos.splice(idx,1);
                })
            }
        }
        ,
        beforeCreate : function(){
            fetch("http://localhost/prj/todoSelect")
            .then(response => response.json())
            .then(result => { this.todos = result; })
        }
    })    
    //mount vue
    const mountedApp = app.mount('#app')