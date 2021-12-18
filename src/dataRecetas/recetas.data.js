export const RECETAS_DATA = [
      {
        id: 0,
        name: 'Paella',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25,
        tiempo: 45,
        porciones: 5,
        tipo: 'Española',
        etiquetas: [
         "#española", "#almuerzo", "#salado"
        ],
        descripcion: "Te traemos esta rica preparación que puedes disfrutar cuando no tienes tanto tiempo para estar cocinando pero quieres darte un gustito.",
        receta: {"INGREDIENTES": ["Arroz 200gr", "Agua 400ml", "Arvejas congeladas 150gr", "Tarro de mariscos 1un", "Sal 9gr", "Cebolla 100gr", "Morrón verde 1un", "Morrón rojo 1un", "Morrón amarillo 1un", "Salsa de tomate 200ml", "Choritos 500gr", "Curry 1gr", "Cúrcuma", "Tira de longaniza 1un."],
          "RELLENO":[],
          "TOPPING":[],
          "MASA":[]
          },
          prep: "Primero cortar la cebolla y pimentones en cubitos, sofreír en un sartén con aceite y sal. Luego agregar las longanizad en trozos y revolver. En una olla sofreír el arroz con un poco de aceite hasta que empiece a tomar un tono blanco, en ese momento agregamos el tarro de mariscos sin el caldo(reservar), junto con la salsa de tomates. Mezclar el sofrito con el arroz, agregar las arvejas, el caldo de la lata de mariscos y 200ml de agua hirviendo. Sazonar con curry, cúrcuma y sal. Colocar los choritos sobre el arroz y dejar cocinar por 25 minutos a fuego bajo por 25 minutos. Servir caliente y a disfrutar!",
              url: "https://mui.com/static/images/cards/paella.jpg"
        },
      {
        id: 1,
        name: 'Pollo Mariscal',
        tiempo: 60,
        porciones: 4,
        tipo: 'Chilena',
        etiquetas: [
         "#chilena", "#almuerzo", "#salado"
        ],
        descripcion: "Deliciosa preparación chilena para tus domingos en casa.",
        receta: {"INGREDIENTES": ["Trutro de pollo 2 un", "Agua 700ml", "zanahoria 50gr", "Morrón 30gr", "Sal 20gr", "Cebolla 80gr", "Diente de ajo 1un", "Vino blanco 500ml", "Almejas 1000gr", "Choritos 1000gr", "Mata de cilantro 1un", "Tira de longaniza 1un."],
          "RELLENO":[],
          "TOPPING":[],
          "MASA":[]
          },
        prep: "Trozar el pollo en 4 partes y colocar junto con las longanizas en una olla para dar un breve sellado a las carnes, luego agregar la cebolla en pluma, la zanahoria en metades de rodajas, el morrón en cubitos y el ajo picado fino.  En una olla aparte dar cocción a los mariscos con agua hasta que casi queden todos cubiertos, dejar que hierva por 5 minutos. Colar el caldo y agregarlo a la olla con las carnes, dejar hervir por 30 minutos y luego agregar el vino blanco y el agua junto con los mariscos. Dejar hervir por 10 minutos. Por último decorar con cilantro y a la mesa a disfrutar!",
        url: "https://t2.rg.ltmcdn.com/es/images/3/1/5/mariscal_caliente_46513_600.jpg"
      },
      
      {
        id: 2,
        name: 'Pizza Napolitana',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        tiempo: 150,
        porciones: 8,
        tipo: 'Italiana',
        etiquetas: [
         "#italiana", "#snack", "#salado"
        ],
        descripcion: "Ideal para una junta y tan versátil como nuestra imaginación lo permita. Aprende a preparar una pizza con todo el sabor de la masa y salsa italiana.",
        receta: {
          "MASA":["Harina 375gr", "Agua 250ml", "Levadura inst. 7gr", "Azúcar 20gr", "Sal 9gr"], "RELLENO":["Tomate 150gr", "Salsa de tomate 200gr", "Aceite de oliva 5ml", "Sal 3gr", "Azúcar 5gr", "Jamón rallado  100gr", "Queso rallado 100gr", "Aceitunas descarozadas 20gr", "Tomate cherry 80gr", "Orégano 1gr", "Laurel 1un."],
          "TOPPING": ["orégano"],
          "INGREDIENTES":[],
          "RELLENO:": []
        },
        prep: "Para la masa primero mezclar agua, azúcar, levadura instantánea y dejar leudar por 10 min. Deja el harina en un bowl y haz un hueco al centro, luego vierte la mezcla de la levadura y comienza a amasar con las manos hasta que tengas una masa lisa y suave. Deja la masa obillada en un bowl ligeramente aceitado cubierto con alusa por 1 hora. Transcurrido el tiempo se desgacifica la masa presionando sobre ella con los dedos, vuelve a obillar y deja fermentar por 30 minutos más. Finalmente precalienta el horno a 250 °C por 10 minutos, retira la masa del bowl y con las manos con harina dale forma circular de aproximadamente 35cm dejando el anillo de masa al rededor sin aplastarlo. Coloca la masa estirada en una base para horno enharinada y pre-horneamos por 5 minutos. La salsa  la realizaremos en un sartén a fuego alto, se agrega el aceite de oliva, el laurel y los tomates previamente pelados y cortados en gajos, sin pepas, por 5 minutos revolviendo constantemente, luego se agrega la salsa de tomate al sartén junto con la sal y el azúcar. Revolvemos por 3 minutos, dejar entiviar y estará lista la salsa. Para terminar de armar la pizza debes cubrir el fondo de la masa con la salsa, luego agregar el queso rallado asegurandose de cubrir toda la base, encima coloca el jamón, las aceitunas, tomates cherry en mitades, cubre con un poco más de queso y agrega orégano sobre toda la pizza. Hornea hasta que se derrita el queso, retira del horno y corta en 8 trozos. Disfrútala caliente !",
        url: "https://t2.rg.ltmcdn.com/es/images/5/2/6/pizza_napolitana_32625_600.jpg"
      },
      {
        id: 3,
        name: 'Arroz chaufan',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        tiempo: 30,
        porciones: 4,
        tipo: 'China',
        etiquetas: [
         "#china", "#acompañamiento", "#salado"
        ],
        descripcion: "Acompañamiento de carnes o pollo, perfecto para acompañar una carne mongoliana en un almuerzo especial.",
        receta: {
          "INGREDIENTES":["Arroz 180gr","Agua 360ml", "Sal 2gr", "Diente de ajo 1un", "Aceite 20ml", "Sal 9gr", "Zanahoria 60gr", "Huevos 2un", "Tallos de cebollín 1un", "Vienesa 1 un"], 
          "RELLENO":[],
          "TOPPING": [],
          "MASA":[]
        },
        prep: "Precalienta tu olla por unos segundos con el aceite, luego agrega el ajo y las zanahorias finamente picados. Lavar el arroz con abundante agua hasta que salga cristalina y agregar a la olla. poner el agua dentro de la olla y cocinar tapado a a fuego bajo por 20 minutos. Mientras cocer la vienesa en agua y cortar en cuadritos pequeños, sofreir junto con el cebollín. Batir los huevos aparte y cocinar en un sartén a fuego medio hasta que estén secos, sacar del fuego y cortar en cuadritos pequeños. Agrega la mezcla de vienesas y cebollín junto con los huevos a la olla del arroz y mezcla todo. Disfruta con tu carne favorita!",
        url: "https://micomidaperuana.com/wp-content/uploads/2019/05/Arroz-chaufa-1024x683.jpg",
      }  
]

export default RECETAS_DATA;
