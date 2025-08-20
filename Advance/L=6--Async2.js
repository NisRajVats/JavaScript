
    // <h1>Hey Nishant </h1>
    // <button id="stop"> STOP </button>

        const sayMyName = function(){
        console.log('Nishant Rajput');
        } 

        const changeText = function(){
            document.getElementsByTagName('h1').innerHTML = 'Hello World';
        }

        const timeoutId = setTimeout( changeText , 2000)
        

        document.getElementById('stop').addEventListener('click',function(){
            clearTimeout(timeoutId);
        })



        const changeColor = function(str){
            document.body.style.backgroundColor = "red";
            console.log(`${str} is a good boy!`);
        }
        

        const interval = setInterval(changeColor,2000 , "Nishant");

        clearInterval(interval);
