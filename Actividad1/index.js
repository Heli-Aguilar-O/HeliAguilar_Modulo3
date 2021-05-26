class Pokemon {
    constructor(nombre, naturaleza = ('Audaz','Osada','Cauta','Alegre'), nivel, vida=10, tipo, ataque=10, defensa=10, velocidad=10){
        this.nombre = nombre;
        this.naturaleza = naturaleza;
        this.tipo = tipo;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.nivel = nivel;
    }
    subirnivel()
    {
        if(this.nivel <=0 || this.ataque <=0 || this.defensa <=0 || this.vida <=0 || this.velocidad <=0)
        {
            console.log('Los nivieles o valores no pueden ser valores negativos o "0"');
        }
        else
        {
            this.nivel=this.nivel+1;
            if (this.nivel >= 100)
            {
                console.log('Oh no! Su pókemon ya es nivel 100 y no puede subir de nivel');
            }

            else{
                console.log('Su pokémon ha subido de nivel. Se encuentra en: '+ this.nivel +' lvl.');
                switch(naturaleza)
                {
                    case 'Audaz':
                        this.ataque=this.ataque+4;
                        console.log('Su pokémon ha subido de nivel. Su ataque ha aumentado a: '+ this.ataque +'.');
                        break;
                    case 'Osada':
                        this.defensa=this.defensa+4;
                        console.log('Su pokémon ha subido de nivel. Su defensa ha aumentado a: '+ this.defensa +'.');
                        break;
                    case 'Cauta':
                        this.vida=this.vida+4;
                        console.log('Su pokémon ha subido de nivel. Su vida ha aumentado a: '+ this.vida +'.');
                        break;
                    case 'Alegre':
                        this.velocidad=this.velocidad+4;
                        console.log('Su pokémon ha subido de nivel. Su velocidad ha aumentado a: '+ this.velocidad +'.');
                        break;
                }
            }
        }


    }
    presentarse(){
        console.log('Hola me llamo '+ this.nombre +' soy tipo '+ this.tipo +' y estoy al nivel '+ this.nivel +'');
    }
    promestadisticas(){
        this.suma=this.velocidad+this.vida+this.ataque+this.defensa;
        this.prom=this.suma/4;
        console.log('El promedio de estadísticas de su pokémon es: '+ this.prom +' pts.');
    }
    sumestadisticas(){
        this.suma=this.velocidad+this.vida+this.ataque+this.defensa;
        console.log('La suma de estadísticas de su pokémon es: '+ this.suma +' pts.');
    }
}

//Case: subir nivel error
const KIKI = new Pokemon (nombre='Kiki',naturaleza='Cauta',nivel=0,vida=-1, tipo='Dios',ataque=10,defensa=10,velocidad=10);

//Case: subir nivel normal
const GARDEVOIR = new Pokemon (nombre='Airalin',naturaleza='Alegre',nivel=50,vida=80, tipo='Psíquico',ataque=70,defensa=60,velocidad=50);

//Case: suma de estadísticas
const FENNEKIN = new Pokemon (nombre='Polka',naturaleza='Osada',nivel=10,vida=10, tipo='Fuego',ataque=10,defensa=10,velocidad=10);

//Case: prom de estadísticas
const LITTEN = new Pokemon (nombre='Kao',naturaleza='Alegre',nivel=10,vida=10, tipo='Fuego',ataque=10,defensa=10,velocidad=10);

//Case: General/Presentación y Pruebas
const ARCEUS = new Pokemon (nombre='Arceus',naturaleza='Audaz',nivel=100,vida=100, tipo='Dios rival de Kiki',ataque=100,defensa=100,velocidad=100);