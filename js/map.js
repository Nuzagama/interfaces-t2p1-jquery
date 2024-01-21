document.addEventListener("DOMContentLoaded", (event) =>{
    //    en el iframe le elimino la parte de estilos que me traigo al copiar el enlace de maps
    //    y le añado a conveniencia frameborder="0" scrolling="no" marginheiht="0" marginwidth="0"
    
    // genero un efecto de carga mediante un TimeOut 
    setTimeout(() =>{
        // Le cambie el Iframe para que apunte al Muelle Uno
       document.querySelector("#load-iframe-map").innerHTML=`
       <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheiht="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7390.197008932465!2d-4.426731156047148!3d36.71673523396297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7ebd78daba9%3A0xf83e10e0ff2963d1!2sAmigos%20Muelle%20Uno!5e0!3m2!1ses!2ses!4v1705784454861!5m2!1ses!2ses"></iframe>
    `; 
    }, 500);
    
});