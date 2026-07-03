/* ==========================================================================
   SCRIPT DE LÓGICA INTERACTIVA: PÉTALOS, SOBRE Y MULTIPÁGINAS (BUCLE)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // --- VARIABLES GLOBALES ---
    const introScreen = document.getElementById('intro-screen');
    const letterScreen = document.getElementById('letter-screen');
    const btnReveal = document.querySelector('.date-btn'); 
    const envelope = document.getElementById('envelope'); 
    const nextBtn = document.getElementById('next-page-trigger'); 
    const closeBtn = document.getElementById('close-letter-trigger');
    const container = document.getElementById('pages-container');
    const textosCartas = [
        {
            titulo: "Página 1",
            contenido: "Bueno este es un pequeño detalle que te quería hacer, espero te guste y sé que tienes muchas dudas al respecto pero primero quisiera que leyeras lo que tengo para decirte..."
        },
        {
            titulo: "Un lindo comienzo - Página 2",
            contenido: "Bueno, todo empezó un 14 de diciembre del 2025, estaba tranquilo sin pensar en que pasaría con mi vida dentro de mis próximos meses y en eso llega Uriel y me pide una foto, recuerdo que estaba jugando y nomas me salgo para responderle y me regrese a jugar, no le di mucha importancia en su momento y después me manda una foto tuya, te me hiciste muy bonita a primera instancia, recuerdo que Uriel me dijo que te mandara mensaje pero yo con muchas dudas no sabía si hacerlo (por miedo a que no contestaras) y así fue como te conocí por primera vez"
        },
        {
            titulo: "Primera Interaccion - Página 3",
            contenido: "Los días pasaron y más lo pensaba con forme pasaban los días hasta ese 17 de diciembre que decidí mandarte mensaje, no te puedo decir la hora exacta pero recuerdo que no tarde tanto tiempo en recibir una respuesta de ti, me presente contigo, te dije que venía de parte de Uriel casi casi como buscando trabajo jaja tenía miedo en su momento a que no contestaras pero por suerte lo hiciste esa noche, no tardamos mucho en tratar de conocernos, trate de sacarte platica lo mejor que pude y por suerte fluyo bien y poco después de esos días nos propusimos a tener nuestra primera cita "
        },
        {
            titulo: "Horas antes de la Primera Cita - Página 4",
            contenido: "Un 26 de diciembre nos propusimos en salir por primera vez, recuerdo que ese día me desperté algo nervioso porque me dijiste que tenía que ir a hablar con tu papá, en ese momento que me dijiste eso me espante, aunque creo que nunca te lo dije, apenas te iba a conocer y ya estaría conociendo a tu familia, tenía miedo y pensaba, ¿y si no sale bien? ¿Y si después de esta salida me ignora? ¿Y si les caigo mal a sus papás? ¿Y si no le gusto? Todo eso fue cosas que me pregunte esos días, pero al final me anime, sabía que quería ir serio contigo y realmente me anime a ir a hablar con tus papás, con mucha pena desde luego, pero con unas ganas inmensas de conocerte"
        },
        {
            titulo: "Camino a lo desconocido - Página 5",
            contenido: "Al ir a tu casa estaba con unos nervios, recuerdo que ya estaba algo desesperado porque no pasaba el bus y yo mismo me decía “Ya voy tarde” andaba bien nervioso porque era la primera impresión que te iba a dar, recuerdo que me baje del bus y me quería regresar en ese rato para mi casa pero ya estaba ahí, recuerdo haberte visto desde lejos (masomenos porque ya no veía bien) y lo primero que hice cuando te vi fue verte, observarte y siento que te incomode, recuerdo que cuando te volteaste nomas aprete los ojos diciendo “porque hice eso” no sabía cómo saludarte y en esos momentos fue lo primero que se me vino a la cabeza, no supe cómo reaccionar pero también cuando estábamos caminando hacia adentro te me hiciste muy linda, ya después de haberte mirado casi casi incomodándote jaja "
        },
        {
            titulo: "Presentacion de tu familia - Página 6",
            contenido: "Y llegue con tu papá, genuinamente no sabía cómo iniciar con una conversación porque nunca se me ha dado con perdonas mayores que yo (me refiero a hablar de forma seria) tenía mucho miedo al trabarme al momento de hablar y creo que por suerte no lo hice, después de presentarme pude hablar más tranquilo y sin tantos nervios, nomás de vez en cuando te volteaba a ver, me sentía feliz de por fin conocerte, al final hable con tus papás y me sentí algo tranquilo de hacerlo, al final solo nos fuimos, me despedí de tus padres, de tu abuela y de tus tías que ya habían llegado (creo que si era tu tía sino siempre viví con la idea que era tu tía aunque ahora que lo pienso creo que es tu prima) nos fuimos al cine y recuerdo que llevabas una playera de junior h, creo que te dije que se te veía bonita y ya de ahí nos fuimos al cine, durante todo el viaje no te hable por pena y porque ibas hablando con tu hermana y tus primas y tampoco es como que quería molestarte"
        },
        {
            titulo: "¿Primer beso? - Página 7",
            contenido: "Llegando al cine recuerdo que me acompañaste por los boletos, tuvimos una conversación muy corta y me sentía algo frustrado por sentir que no te sacaba casi platica, me sentía muy nervioso por no saber exactamente qué hacer y recuerdo que mandamos a tu hermana al frente con tus primas y nosotros nomas les estaríamos echando un ojo jaja, recuerdo que fuimos a comprar crepas y creo si no mal recuerdo un frape, creo que ya no compramos algo más porque ya íbamos tarde al final pasamos a la sala y nos sentamos atrás, recuerdo que después que llegamos llego una parejita jaja no se si vieron que había dos lugares en el fondo solos y por eso eligieron ahí jaja no los juzgo yo hubiera hecho lo mismo para molestar capaz pensaban que arian algo malo, yo recuerdo que en una de esas que estaban medio cariñosos esos chavos te iba a decir, mira a esos empalagosos (aunque en el fondo ya te quería dar un abrazo) al final te termine robando un beso, solo recuerdo que volví a apretar los ojos y dije “ya la regué” ya nomas recuerdo que me arrepentí en ese momento y solo me dijiste “ya lo quería hacer vdd” y yo bien descarado diciéndote que si jaja (me arrepentí a los segundos de haberte dicho sí) ya para este punto dije ya fue, ya valió, en fin ya esperaba que llegando cada quien a su casa me dejarías de hablar pero ocurrió todo lo contrario, poco después me diste un beso, se me nublaron las ideas, no pensaba en nada y solo sonreí, recuerdo que por dentro te quería abrazar y darte otro beso, tenía mucha emoción por lo que hiciste, me hiciste muy feliz con ese beso, y eso no fue todo, saliendo esperamos a tu hermano y note la química que tenías con él y con tu sobrinita, vi el trato que les dabas a ellos y me sorprendió porque en todo el tiempo de vida que tenía nunca vi un amor tan sincero con los niños, una paciencia que no sé cómo describirla, te vi esa noche y en ese momento si ya quería algo contigo para este punto dije “es ella” simplemente quería que fueras tú, me empecé a enamorar de ti, me empecé a ilusionar con una idea de, y si pasa algo? Me había enamorado, no tomo otra salida para saber que contigo quería todo, vi en ti algo que no vi en nadie, algo que hasta la fecha no sabría como mencionarte, esa noche después de que te fuiste solo recuerdo mirar al cielo y agradecer, mirar al cielo con felicidad, estaba muy feliz, me sentía tan feliz en ese momento que olvide todo, olvide que me había puesto nervioso ese día, que te había puesto incomoda, olvide todo y solo me puse a pensar en ti, llegue a mi casa feliz, solo de pensar en que todo había salido bien, que nada malo sucedió, todo salió como quería y al final me seguiste hablado, realmente me sentía tan feliz por todo lo que había pasado ese día"
        },
        {
            titulo: "Momentos Felices - Página 8",
            contenido: "Poco después seguimos hablando cada vez más, cada día más nos seguíamos conociendo, día con día había algo nuevo que contar, algo nuevo que hablar y algo nuevo que decir, día con día empezaba a conocerte y poco a poco me enamoraba más de la persona que eras sin necesidad de idealizarte"
        },
        {
            titulo: "Nuestra Segunda Cita - Página 9",
            contenido: "Después decidimos hacer otra salida, creo que fue el 30 de diciembre porque recuerdo haber llegado a tu casa y decirle a tu mama “es que ya no la voy a ver hasta el año que viene y la voy a extrañar” nomas recuerdo que tu mamá se rio y no me dijo nada, ese día íbamos con tu hermana y con aja, bueno no hablare tanto de el por todo lo que paso, recuerdo que estaba muy feliz porque sería nuestra segunda cita, recuerdo que antes de llegar pase a comprarte un ramo de flores, tanto que te enojaste porque me Sali temprano de mi casa y no te avise solo por írtelo a comprar jaja aún tengo la foto que nos tomó tu hermana ese día, la guarde con mucho cariño cuando me la pasaste, me sentía tan feliz de salir contigo, tenía muchísimas ganas de abrazarte ese día, por respeto porque estaba tu hermana no lo hice, realmente no me sentía desesperado por hacerlo porque me sentía muy tranquilo estando contigo"
        },
        {
            titulo: "Nuestro Primer Beso - Página 10",
            contenido: "Pasando el tiempo pudimos estar solos un rato, pudimos hablar de más temas personales, me contaste que te gustaba la naturaleza, recuerdo que nos quedamos viendo a unas ardillas o iguanas, la vdd no recuerdo muy bien el animal, recuerdo que te veías muy bonita ese día, estabas tan hermosa que no pude contenerme y te dije que si te podía dar un beso, nos dimos nuestro primer beso ese día, fue tan especial para mí que quería que ese lugar fuera un lugar especial para los dos, solo quería que ese lugar fuera especial para ti y para mí, al final no me controle y te seguí besando porque sentía esa necesidad de hacerlo, solo quería besar tus labios y no me importaba realmente nada, ya después me controle porque me dijiste que pasaba mucha gente y nono, eso no lo podía hacer una maeta, solo ese momento fue muy especial para mi"
        },
        {
            titulo: "Momentos Agradables - Página 11",
            contenido: "Poco después nos fuimos porque ya era tarde, nos fuimos caminando por todo el sendero y seguíamos hablando de distintos temas, no nos quedábamos sin conversación y mucho de eso fue gracias a ti, me encantaba como sacabas platica de la nada y era muy lindo escucharte hablar, llegamos a la presidencia y te compre un mm bueno no es como decirlo así que será elote en vaso, en ese mismo rato nos tomamos una foto, fue la segunda foto que nos habíamos tomado juntos, la primera la de tu hermana y la segunda la que nos tomaste, bueno en si fue la tercera porque la primera fue la que nos tomamos con las pulseras, foto que después del cine la ocupamos como fondo de whats, la que nos tomó tu hermana no la subí pero la que nos tomamos la subimos a whats y poco después la puse como primera foto de destacadas de insta, recuerdo que al final te fui a dejar a tu casa y nos comimos un taco jaja la vdd tu compañía siempre me gusto porque podía estar contigo horas y nunca dejábamos de tener platica"
        },
        {
            titulo: "Feliz Año Nuevo - Página 12",
            contenido: "Paso año nuevo, cada uno estaba en su casa con sus familias, cada uno se la paso bonito y nos quedamos hablando hasta noche, recuerdo que te mandaba como se festejaba acá en mi familia y yo muy ilusionado por pasar contigo ese día, te propuse que después estaríamos los 2 juntos celebrando un año nuevo juntos, tanto con mi familia como con la tuya, tú me enseñarías tus tradiciones y yo las mías"
        },
        {
            titulo: "Inicio de Año - Página 13",
            contenido: "A la mañana siguiente recuerdo que tardaste en contestar, yo iba rumbo a ver a mis abuelos, te mande fotos y recuerdo contarte que tenía la ilusión de que los conocieras, por desgracia sabias que no los conocí y por lo menos tenía la ilusión de que me acompañaras en esos momentos cuando los fuéramos a visitar, recuerdo a verme quedado en cada tumba y decirles que pronto les traería a alguien, espere a que la mayoría se fuera y les hable en voz baja a los 2 contándoles de ti, me llenaste de una ilusión muy bonita en esos momentos 🤍"
        },
        {
            titulo: "Un momento a tu lado - Página 14",
            contenido: "Creo que muy poco después de que empezara el año te fui a ver, solo te fui a visitar rápido porque tenía que ir a visitar a un tío y no te voy a mentir, aquí justo en esta fecha no se si fue antes o después de año nuevo, según yo fue después pero no estoy completamente seguro, en ese ratito que te fui a ver recuerdo que hacía bastante frio, yo tome tus manos para calentarlas y no sé, recuerdo que nomas iba 1 hora y creo que se me hicieron 2 o 3, se me paso el tiempo muy rápido contigo, estaba tan cómodo contigo que olvide que tenía que llegar con mis tíos jaja, genuinamente me sentí tan cómodo contigo que olvide la noción del tiempo"
        },
        {
            titulo: "Empieza el Plan - Página 15",
            contenido: "Los días siguieron pasando, creo que en ese tiempo ya conocías a mi mamá, tenías tantos nervios por irla a ver jaja pero al final todo salió bien, pero creo que ya iré a lo importante para no alargar más esto, 12 de enero, fui al cumpleaños de tu padrino, me invitaste y yo la vdd no sabía si era lo correcto ir porque no me sentía aun de tu familia, aun así fui, los conocí, me presentaste y cuando te fuiste hable, estaba tan nervioso por que decir pero les pedí permiso a tus papás y a tu padrino de formalizar, créeme que estaba tan preocupado por lo que dirían que no sabía qué hacer si me rechazaban, al final me dijeron que sí, me dieron la oportunidad de estar contigo y simplemente empecé a organizarlo con tu hermana"
        },
        {
            titulo: "¿Quieres ser mi novia? - Página 16",
            contenido: "El día llego, ya tenía todo listo, agradezco a tu papá por hacerte perder un poco el tiempo en el centro, ocupaba llegar temprano para organizarme con maría, realmente estaba tan emocionado porque nunca había hecho algo parecido y quería que todo saliera bien, poco después llegaste y aunque ya en ese rato te lo quería decir me espere porque antes me dijiste “quiero estar bonita es día cuando me lo pidas” aunque siempre estabas linda sea como estuvieras pero entiendo que te querías sentir cómoda ese día, salimos ese día y aunque estoy muy consiente que te traje dando vueltas en el centro (perdóname por eso) esperaba a que llegaran las flores, esperaba a que todo saliera bien y después te propongo que vayamos a comer, en ese rato fuimos, hablamos más cosas y algunas fueron sobre tu vida pasada, me encanto cada momento en el que estábamos hablando, después ya que íbamos para tu casa simplemente ya te quería decir, ya estaba super ansioso de decírtelo y no podía, llegamos a tu casa y bueno, paso, escuchaste la canción y creo que en ese momento entendiste lo que estaba pasando, solo te solté la frase “quieres ser mi novia” lloraste y asentiste y en ese momento aunque no lo demostré sentía una tranquilidad, una paz muy bonita de estar a tu lado, estaba emocionado pero el estarte abrazando me daba mucha paz y mucha felicidad a la vez y en ese momento ya eras mi pareja oficialmente, aunque no necesitábamos una etiqueta simplemente tenía la ilusión de decirte que eras mi novia oficialmente y sin ningún pero."
        },
        {
            titulo: "Perdoname - Página 17",
            contenido: "Se que a lo mejor ya esto ultimo lo notes con mucho menos texto o conforme pasabas las paginas veías muchas menos cosas, estoy muy consiente de eso y no es porque le ponía menos interés, para nada, realmente para lo ultimo se me vino todo lo bonito y bueno, no me aguante las ganas de derramar una lagrima, al escribir esto trato de que recordemos solo lo bonito, que se quede solo con lo bonito porque es lo que quiero, que nos quedemos con lo bonito y solo con lo bonito que llegamos a vivir, estoy consciente que me faltaron demasiadas cosas por decir, simplemente no sabia como expresarlas y no porque fueran menos importantes, para nada "
        },
        {
            titulo: "Página 18",
            contenido: "Todo lo que vivimos siempre fue importante para mí, cada platica donde nos “desvelábamos” (porque luego me dormía temprano) siempre me encantaba, cada llamada, aunque nunca tomaba la iniciativa me fascinaba, te agradezco muchas cosas en esta vida, tanto apoyo que me llegaste a dar en su momento de vdd lo valoro mucho, a lo largo que estuve escribiendo todo esto me sentía muy feliz de hacerlo, en unas ocasiones me daba el sentimiento, pero todo fue con mucha felicidad"
        },
        {
            titulo: "Página 19",
            contenido: "A veces dicen que las personas llegan en los momentos que uno menos se lo espera y tienen razón, esa noche no esperaba conocerte, no esperaba el mandarte mensaje y en parte no me arrepiento de enviarte ese mensaje, llegaste a mi vida para darle un aire nuevo a mi vida y aunque ahora no estemos juntos, siempre me quedare con lo bonito que vivimos, cada abrazo, cada beso siempre será algo muy lindo que paso en mi vida, que tu pasaste en mi vida, gracias por el tiempo que me diste en tu vida, gracias por todo y perdóname por tan poco"
        },
        {
            titulo: "Página 20",
            contenido: "Seguiré con mis citas en el psicólogo, tratare de seguir un seguimiento y aunque el motivo principal eran mis padres se termino convirtiendo en otra cosa, prometo que seguiré con las consultas pase lo que pase, quizás ya no veas mi cambio pero que sepas que mi motivación de seguir yendo serás tu"
        },
        {
            titulo: "Página 21",
            contenido: "Te deseo lo mejor, deseo salud a tu familia, te deseo lo mejor en tu carrera, solo te falta 1 año para que te gradúes como pedagologa, creo que así se dice no estoy seguro, para mas sencillo como maeta, se que lo aras bien y aunque quizás no pueda verte titularte, estoy muy orgulloso de lo que lograras, tienes un futuro muy brillante y quizás no te lo diga ese momento, muchas felicidades maeta 🤍"
        },
        {
            titulo: "Cuidate mucho maeta 🤍- Página 22",
            contenido: "Y así llegamos a la última hoja de este sobre. Espero que este detalle te saque una sonrisa y que guardes este recuerdo con el mismo cariño con el que yo lo preparé, me falto demasiado por decir, pero si te digo todo creme que no acabo. \n Te deseo lo mejor en todo lo que venga en tu camino.\n Espero me perdones en su momento, perdóname por todo y por último, te amo 🤍 \n Con muchísimo cariño,\n Alejandro "
        }
    ];

    let paginaActual = 0;

    // ==========================================================================
    // 1. GENERADOR DE PÉTALOS QUE CAEN CONSTANTEMENTE (PANTALLA DE INICIO)
    // ==========================================================================
    function createFallingPetal() {
        if (introScreen.classList.contains('fade-out')) return;

        const petal = document.createElement('div');
        petal.classList.add('falling-petal');

        const sizeWidth = Math.random() * 15 + 10; 
        const sizeHeight = sizeWidth * 1.3; 
        const startLeft = Math.random() * window.innerWidth;
        const duration = Math.random() * 5 + 6; 
        const delay = Math.random() * 2;

        petal.style.width = `${sizeWidth}px`;
        petal.style.height = `${sizeHeight}px`;
        petal.style.left = `${startLeft}px`;
        petal.style.top = `-30px`;
        petal.style.animationDuration = `${duration}s`;
        petal.style.animationDelay = `${delay}s`;
        petal.style.transform = `rotate(${Math.random() * 360}deg)`;

        introScreen.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, (duration + delay) * 1000);
    }

    const fallingInterval = setInterval(createFallingPetal, 450);

    // ==========================================================================
    // 2. RÁFAGA DE PÉTALOS INTERACTIVA (Efecto explosión)
    // ==========================================================================
    function createBurstEffect(x, y) {
        const count = 40; 
        for (let i = 0; i < count; i++) {
            const petal = document.createElement('div');
            petal.classList.add('burst-petal');
            petal.style.left = `${x}px`;
            petal.style.top = `${y}px`;

            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 400 + 150; 
            const tx = Math.cos(angle) * radius;
            const ty = Math.sin(angle) * radius;
            const s = Math.random() * 0.8 + 0.4;
            const r = Math.random() * 720 - 360;

            petal.style.setProperty('--tx', `${tx}px`);
            petal.style.setProperty('--ty', `${ty}px`);
            petal.style.setProperty('--s', s);
            petal.style.setProperty('--r', `${r}deg`);

            const w = Math.random() * 12 + 8;
            petal.style.width = `${w}px`;
            petal.style.height = `${w * 1.4}px`;

            document.body.appendChild(petal);

            setTimeout(() => {
                petal.remove();
            }, 1800);
        }
    }

    // ==========================================================================
    // 3. EVENTO: PASAR DEL RAMO AL SOBRE (CLICK EN "VER CARTA")
    // ==========================================================================
    if (btnReveal) {
        btnReveal.addEventListener('click', (e) => {
            e.stopPropagation();
            const rect = btnReveal.getBoundingClientRect();
            const clickX = rect.left + rect.width / 2;
            const clickY = rect.top + rect.height / 2;

            createBurstEffect(clickX, clickY);
            introScreen.classList.add('fade-out');
            clearInterval(fallingInterval); 
            
            setTimeout(() => {
                letterScreen.classList.add('active');
            }, 1000); 
        });
    }

    // ==========================================================================
    // 4. EVENTO: BUCLE QUE CONSTRUYE LAS PÁGINAS EN EL DOM
    // ==========================================================================
    if (container) {
        textosCartas.forEach((carta, index) => {
            const pageDiv = document.createElement('div');
            pageDiv.classList.add('letter-page');
            if (index === 0) pageDiv.classList.add('active'); 

            pageDiv.innerHTML = `
                <h2 class="letter-title">${carta.titulo}</h2>
                <div class="letter-body">${carta.contenido}</div>
            `;
            container.appendChild(pageDiv);
        });
    }

    // ==========================================================================
    // 5. EVENTO: ABRIR EL SOBRE
    // ==========================================================================
    if (envelope) {
        envelope.addEventListener('click', () => {
            if (!envelope.classList.contains('open')) {
                envelope.classList.add('open');
            }
        });
    }

// ==========================================================================
    // 6. EVENTO: CAMBIO DE HOJA DINÁMICO (ATRAS Y ADELANTE)
    // ==========================================================================
    const prevBtn = document.getElementById('prev-page-trigger');

    function actualizarNavegacion() {
        const paginasHTML = document.querySelectorAll('.letter-page');
        
        // Ocultar o mostrar botón Atrás
        if (paginaActual === 0) {
            if (prevBtn) prevBtn.style.display = 'none';
        } else {
            if (prevBtn) prevBtn.style.display = 'inline-block';
        }

        // Cambiar texto del botón Siguiente en la última página
        if (paginaActual === textosCartas.length - 1) {
            if (nextBtn) nextBtn.innerHTML = "➔ Volver al inicio";
        } else {
            if (nextBtn) nextBtn.innerHTML = "Siguiente página ➔";
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            const paginasHTML = document.querySelectorAll('.letter-page');

            paginasHTML[paginaActual].classList.remove('active');
            paginaActual++;

            if (paginaActual >= textosCartas.length) {
                paginaActual = 0;
            }

            setTimeout(() => {
                paginasHTML[paginaActual].classList.add('active');
                actualizarNavegacion();
            }, 200);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const paginasHTML = document.querySelectorAll('.letter-page');

            paginasHTML[paginaActual].classList.remove('active');
            paginaActual--;

            if (paginaActual < 0) {
                paginaActual = textosCartas.length - 1;
            }

            setTimeout(() => {
                paginasHTML[paginaActual].classList.add('active');
                actualizarNavegacion();
            }, 200);
        });
    }
    // ==========================================================================
    // 7. EVENTO: CERRAR Y GUARDAR CARTA (ANIMACIÓN INVERSA)
    // ==========================================================================
    if (closeBtn && envelope) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            
            envelope.classList.remove('open');
            
            setTimeout(() => {
                const paginasHTML = document.querySelectorAll('.letter-page');
                paginasHTML.forEach(p => p.classList.remove('active'));
                paginaActual = 0;
                paginasHTML[0].classList.add('active');
                if (nextBtn) nextBtn.innerHTML = "Siguiente página ➔";
            }, 1200);
        });
    }
});
