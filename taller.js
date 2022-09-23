let nombres1 =  ['Ensalada de ', 'Menjurge de ', 'Papas con ','Arroz con ','Pan de ','Enpaquetado de ','Bebida de ','Panqueques de','Salchipapa con','Especial de' ];
let nombres2 = ['papas','manzana','espinaca','brocoli','ajo','tomate','cebolla','zanahoria','aguacate'];
let nombres3 = ['cucaracha','mosca','araña','mosquito','claris','teofilo','juamsquito','rana'];
let nombres4 = ['lechona','salchichon','salchica ranchera','pierna de tiranosaurio rex','ala de peteranodon','muslo de dientes de sable','costillas de yeti','patas de pie grande'];
let tipos = ['vegetal','insecto','carne'];

let alimentos = [];

function GenerarAlimentos(){
    for (let i = 1; i <= 50; i++) {
        let nombre1_random = nombres1[Math.floor(Math.random()*nombres1.length)];
        let tipoAl =  tipos[Math.floor(Math.random()*tipos.length)];
        let nombre2_random;
        if (tipoAl == "vegetal") {
            nombre2_random = nombres2[Math.floor(Math.random()*nombres2.length)];
        }else if(tipoAl == "insecto"){
            nombre2_random = nombres3[Math.floor(Math.random()*nombres3.length)];
        }else if(tipoAl == "carne"){
            nombre2_random = nombres4[Math.floor(Math.random()*nombres4.length)];

        }
        let nombreAl = `${nombre1_random} ${nombre2_random}`;
        let energi = Math.floor(Math.random() * (500 - 100 +1) + 100);
        let obj = {
            nombre: nombreAl,
            tipo: tipoAl,
            energia: energi
        }
        alimentos.push(obj)
    }
}

function BusquedaAlimentos(tipo_al,energi_al,retorno){
    GenerarAlimentos()
    let buscados = [];
    let suma_energias = 0;
    setTimeout(function(){
        buscados = alimentos.filter(alimento => alimento.tipo == tipo_al && alimento.energia >= energi_al);
        
        buscados.forEach(function(buscado){
            suma_energias = suma_energias + buscado.energia;
            console.log(buscado);
        })

        retorno(suma_energias);
    },1000)

}
BusquedaAlimentos("vegetal",200,function(suma_energi){
    console.log(`La suma de la energia de los alimentos consumidos por Grogu es: ${suma_energi} `);
});