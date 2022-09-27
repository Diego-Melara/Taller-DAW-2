var i = 0;
function iniciar(){
    var btnCombo = document.getElementById("seleccombo");
    var total = document.getElementById('agregarO');

    if(btnCombo.addEventListener){
        btnCombo.addEventListener("change",realizarPedido,false);

    }
    
    if(total.addEventListener){
       total.addEventListener("click",  calcularSubTotal,false);
    }
  
}

class Pedido{
    constructor(combo, cantCombos, precioSelec){
        //PROPIEDADES DEL MENU
        this.combo = combo;
        this.cantCombos = cantCombos;
        this.precioSelec = precioSelec;
    }

    //METODOS DEL MENU
    imprimirCombo(){
        var impresionMenu = document.getElementById("detalle");
        var infoMenu ="";

        if(this.combo == "Super combo"){
           infoMenu += "<ul>";
           infoMenu += "<li>tres piezas de pollo</li>";
           infoMenu += "<li> ensalada</li>";
           infoMenu += "<li>papas fritas </li>";
           infoMenu += "<li>bebida grande</li>";
           infoMenu +="</ul>";
            impresionMenu.innerHTML = infoMenu;
            var selecCombo = document.getElementById("seleccombo"); 
            var miTotal = selecCombo.options[selecCombo.selectedIndex].value;
            var valor = document.getElementById("tot");
            valor.value=this.precioSelec ;

        }else if(this.combo == "Combo personal"){
            infoMenu += "<ul>";
            infoMenu += "<li>dos piezas  de pollo</li>";
            infoMenu += "<li>papa frita</li>";
            infoMenu += "<li>bebida mediana</li>";
            infoMenu +="</ul>";
            impresionMenu.innerHTML = infoMenu;
            var selecCombo = document.getElementById("seleccombo"); 
            var miTotal = selecCombo.options[selecCombo.selectedIndex].value;
            var valor = document.getElementById("tot");
            valor.value= this.precioSelec ;
           

        }else if(this.combo == "Combo infantil"){
            infoMenu += "<ul>";
            infoMenu += "<li>1 pieza de pollo</li>";
            infoMenu += "<li> papas  fritas </li>";
            infoMenu += "<li>una bebida pequeña</li>";
            infoMenu +="</ul>";
            impresionMenu.innerHTML = infoMenu;
            var selecCombo = document.getElementById("seleccombo"); 
            var miTotal = selecCombo.options[selecCombo.selectedIndex].value;
            var valor = document.getElementById("tot");
            valor.value= this.precioSelec ;


        }else{
            var infoMenu ="";
            impresionMenu.innerHTML = infoMenu;
            var valor = document.getElementById("tot");
            valor.value= "0.00";

        }
    }

   sumarCombos(){
       var valorSum = document.getElementById("tot");
       valorSum.value = this. precioSelec * this.cantCombos;
   }


}

function realizarPedido(){

    //Obtenes el menu que desea pedir el usuario
    var selecCombo = document.getElementById("seleccombo"); 
    var totalito = document.getElementById('cantidaP').value;
    var miSeleccion = selecCombo.options[selecCombo.selectedIndex].text;
    var miSeleccionValor = selecCombo.options[selecCombo.selectedIndex].value; 
    const pedido = new Pedido(miSeleccion,totalito,miSeleccionValor);//creamos el objeto Pedido
    
    pedido.imprimirCombo();//imprimimos el menu inicial al usuario
    //Obtenemos la cantidad de combos que desea

}

function calcularSubTotal(){
    var totalito = document.getElementById('cantidaP').value;
    var selecCombo = document.getElementById("seleccombo"); 
    var miSeleccion = selecCombo.options[selecCombo.selectedIndex].text;
    var miSeleccionValor = selecCombo.options[selecCombo.selectedIndex].value; 
    const pedido = new Pedido(miSeleccion, totalito, miSeleccionValor);
    pedido.sumarCombos();
}

if(window.addEventListener){
    if(window.addEventListener){

        window.addEventListener("load",iniciar,false);
    
    }
}
//Incrementa valores de comentarios
function increment(){
    i += 1;
    }
//Funcion para añadir comentarios
function comentario(){
    var r = document.createElement("span");
    var y = document.createElement("textarea");
    var h = document.createElement("input");

    y.setAttribute("cols", "18");
    y.setAttribute("id", "txt");

    y.setAttribute("placeholder", "Comentario");
    increment();
    h.setAttribute("type", "submit");
    h.setAttribute("id", "enviar")
    y.setAttribute("name", "textelement_" + i);
    r.appendChild(y);
    r.setAttribute("id", "id_" + i);
    document.getElementById("comentario").appendChild(r);
    document.getElementById("comentario").appendChild(h);
    var coment = document.getElementById("enviar").onclick = function(){
         var text = document.getElementById("txt").value;
         console.log(text);
         var x = document.createElement("p");
         x.setAttribute("id", "texto");
         var newContent = document.createTextNode(text);
         x.appendChild(newContent);
         document.getElementById("comentario").appendChild(x);

    };
coment();
    }