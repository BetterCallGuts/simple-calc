

let btn = document.querySelectorAll(".btn")
let monitor = document.querySelector('.monitor textarea')
let i = 0
let is_dot = false
let z

for(i ;  i < btn.length; i++ ){
        btn[i].addEventListener('click', Add);
}


function Add(){

    if (this.innerHTML == "." && is_dot==true){
        return
    }

    if( this.innerHTML == "." ){
        is_dot = true
    }

    


    if (  
    (monitor.innerHTML == '')
    &&
    (
    this.innerHTML == "+"||
    this.innerHTML == "/"||
    this.innerHTML == "-"||
    this.innerHTML == "*"
    )
    
    
    ){
        return
    }

    if (this.innerHTML == "AC"){
        monitor.innerHTML = ""
        is_dot = false
        return
    }

    if(this.innerHTML == "="){
        if (
            monitor.innerHTML.slice(-1) == "+"||
            monitor.innerHTML.slice(-1) == "/"||
            monitor.innerHTML.slice(-1) == "*"||
            monitor.innerHTML.slice(-1) == "-"||
            monitor.innerHTML == ""
            
            ){
                return
            }
        
        if (monitor.innerHTML.includes(".")){
            console.log(monitor.innerHTML.search("."))
            is_dot = true
        }
        monitor.innerHTML = eval(monitor.innerHTML)
        return
    }
    if( (
        this.innerHTML == "+" ||
        this.innerHTML == "-" ||
        this.innerHTML == "*" ||
        this.innerHTML == "/"  
        )
        && 
        (
        monitor.innerHTML.slice(-1)  == "+"||
        monitor.innerHTML.slice(-1)  == "-"||
        monitor.innerHTML.slice(-1)  == "*"||
        monitor.innerHTML.slice(-1)  == "/"
        )
        ){ 
        monitor.innerHTML = monitor.innerHTML.slice(0,-1)
        monitor.innerHTML += this.innerHTML
        return
    }
    if (
        this.innerHTML == "+" ||
        this.innerHTML == "-" ||
        this.innerHTML == "*" ||
        this.innerHTML == "/"  
    ){
        is_dot = false
        z = monitor.innerHTML.length
        
    }

        
    if (this.innerHTML == "DEL"){
        let x = monitor.innerHTML.slice(0,-1)
        let y = monitor.innerHTML.slice(-1)
        if (y == "."){
            is_dot = false
        }
        if (monitor.innerHTML.length + 1 == z){
            is_dot = false
            console.log("acepted")
        }
      

            monitor.innerHTML = x
        return
    }

    monitor.innerHTML += this.innerHTML;
}