//Validar email:
        // Que empiece por letra o número, y tenga al menos un carácter Para el dominio (ej. @hotmail @gmail):
        // Que tenga @
        // Que tenga solo letras, y al menos tres caracteres. Para el dominio padre (ej. .es .com .org)
        // Podrá tener dos (.es, .fr, .it,…) o tres letras (.com, .net, .org,..) o cuatro (.mobi, info,…)
        // Debe ir al final, detrás de un punto
        // *La expresión regular sería algo como: expresionregular@expresionregular.expresionregular. Ej: elena@gmail.com; pepe03@hotmail.es Crearemos un formulario que llamará a la función checkEmail. Esta función será la que ejecute la expresión regular. Se le pasará como argumento el valor del email recogido.
        // Patrón RegExp: expresionregular@expresionregular.expresionregular

    const validateEmail = ()=>{

        const emailValue = document.getElementById("email").value

        // /[a-z]/.test(emailValue)
        
        if (/'hola'/.test(emailValue)){

            console.log("El email es válido")

        }else{

            console.log("El email no es válido")
        }
        

    
        // pattern=".+@globex\.com"
    }

    document.getElementById("submit").addEventListener('click',validateEmail)