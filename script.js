// -----------------------------
// DATI DEI GIOCHI
// -----------------------------
const gamesData = {
    1970: [
        {
            title: "Pong (1972)",
            img: "pong.jpg",
            logo: "img/logo/pong-logo.png",
            logoBgSize: "60vw",
            desc: `
<p><strong>Descrizione</strong></p>

<p>Sviluppato da Atari e progettato da Allan Alcorn, Pong è considerato il primo grande successo commerciale della storia dei videogiochi. Il gameplay è estremamente semplice: due giocatori controllano una barra verticale con l'obiettivo di colpire una pallina e impedire che superi la propria linea di fondo, simulando una partita di ping pong.</p>

<p>Nonostante la semplicità della grafica, composta solo da linee e quadrati bianchi su sfondo nero, Pong riuscì a coinvolgere immediatamente i giocatori grazie ai controlli intuitivi e alle partite brevi ma estremamente divertenti.</p>

<p><strong>Perché ha rivoluzionato il mondo videoludico</strong></p>

<p>Pong rappresenta il momento in cui il videogioco smette di essere una curiosità tecnologica e diventa un prodotto commerciale.</p>

<p>Le innovazioni introdotte furono numerose:</p>
<ul>
    <li>dimostrò che i videogiochi potevano generare enormi profitti;</li>
    <li>contribuì alla nascita dell'industria videoludica moderna;</li>
    <li>rese popolari le sale arcade;</li>
    <li>introdusse il concetto di gameplay immediato.</li>
</ul>

<p><strong>Curiosità</strong></p>
<p>La prima macchina arcade di Pong si bloccò perché il contenitore delle monete era pieno.</p>
`
        },
        {
    title: "Space Invaders (1978)",
    img: "spaceinvaders.jpg",
    logo: "img/logo/spaceinvaders.png",
    logoBgSize: "60vw",   // opzionale: puoi cambiarlo come vuoi
    desc: `
        <p><strong>Descrizione</strong><br>
        Pubblicato nel <strong>1978</strong> da <strong>Taito</strong> e sviluppato da <strong>Tomohiro Nishikado</strong>, 
        <em>Space Invaders</em> è uno dei videogiochi arcade più importanti della storia. 
        Il giocatore controlla un cannone laser e deve difendere la Terra da ondate di alieni che avanzano verso il basso. 
        Durante la partita è possibile utilizzare delle barriere protettive, che però si deteriorano con il passare del tempo.</p>

        <p>La caratteristica più innovativa del gioco è l'aumento della velocità degli alieni man mano che vengono eliminati, 
        creando una difficoltà crescente e rendendo ogni partita sempre più coinvolgente.</p>

        <p><strong>Perché ha rivoluzionato il mondo videoludico</strong></p>

        <p><strong>Introduzione dell'High Score</strong><br>
        Space Invaders rese popolare il sistema di <strong>High Score</strong>, spingendo i giocatori a battere il proprio record 
        e quello degli altri. Questo trasformò il videogioco in una competizione, anticipando le classifiche online e gli eSport moderni.</p>

        <p><strong>Il gaming come fenomeno sociale</strong><br>
        Il gioco contribuì al successo delle sale arcade, dove i giocatori si riunivano per sfidarsi, osservare le partite 
        e condividere strategie. I videogiochi diventarono così un'attività sociale oltre che un passatempo.</p>

        <p><strong>Ha definito gli shooter arcade</strong><br>
        Space Invaders stabilì le basi del genere shooter introducendo ondate di nemici, difficoltà crescente, riflessi rapidi 
        e strategia. Queste meccaniche sono ancora oggi presenti in molti sparatutto.</p>

        <p><strong>Il successo delle sale giochi</strong><br>
        L'enorme popolarità del titolo rese le sale giochi un fenomeno mondiale, contribuendo alla crescita dell'industria videoludica.</p>

        <p><strong>Innovazioni introdotte</strong></p>
        <ul>
            <li>Introduzione del sistema di High Score.</li>
            <li>Difficoltà dinamica con nemici sempre più veloci.</li>
            <li>Utilizzo di coperture distruttibili.</li>
            <li>Gameplay semplice ma altamente rigiocabile.</li>
            <li>Definizione del genere shooter arcade.</li>
        </ul>

        <p><strong>Curiosità</strong><br>
        Il celebre effetto sonoro composto da quattro note accelera insieme all'avanzata degli alieni, aumentando la tensione del giocatore. 
        È considerato uno dei primi esempi di musica utilizzata come elemento di gameplay.</p>

        <p><strong>Eredità</strong><br>
        Space Invaders ha contribuito alla nascita dell'industria arcade moderna e ha influenzato generazioni di sparatutto. 
        Ancora oggi è considerato uno dei videogiochi più importanti della storia, grazie alle innovazioni introdotte 
        e al suo enorme impatto culturale.</p>
`
        },
        {
    title: "Adventure (1979)",
    img: "adventure.jpg",
    logo: "img/logo/adventure.png",
    logoBgSize: "38vw",   // opzionale: puoi regolarlo come vuoi
    desc: `
        <p><strong>Descrizione</strong><br>
        Pubblicato nel <strong>1979</strong> per Atari 2600 e sviluppato da <strong>Warren Robinett</strong>, 
        <em>Adventure</em> è uno dei primi videogiochi d’avventura della storia. 
        In un’epoca dominata da giochi basati solo sul punteggio, introduce un mondo esplorabile composto da più schermate collegate tra loro.</p>

        <p>Il giocatore controlla un piccolo eroe e deve recuperare un calice magico, esplorando castelli, labirinti e ambienti pieni di nemici e oggetti utili. 
        Nonostante la grafica molto semplice, il gioco trasmette un forte senso di esplorazione e libertà.</p>

        <p><strong>Perché ha rivoluzionato il mondo videoludico</strong></p>

        <p><strong>Ha introdotto l’esplorazione libera</strong><br>
        Per la prima volta il giocatore non segue un percorso lineare, ma può esplorare liberamente il mondo di gioco. 
        Questa idea influenzerà titoli come <em>The Legend of Zelda</em>, <em>Metroid</em> e successivamente gli open world moderni come 
        <em>Skyrim</em> ed <em>Elden Ring</em>.</p>

        <p><strong>Ha introdotto il sistema di inventario</strong><br>
        Adventure permette di raccogliere e usare oggetti diversi (chiavi, spade, ponti mobili). 
        Questo introduce il concetto di gestione dell’inventario, oggi fondamentale in RPG, survival e action‑adventure.</p>

        <p><strong>Ha creato uno dei primi Easter Egg</strong><br>
        Il gioco contiene il primo Easter Egg famoso della storia: una stanza segreta con la scritta 
        <em>“Created by Warren Robinett”</em>. 
        Questo ha dato origine alla tradizione dei contenuti nascosti nei videogiochi.</p>

        <p><strong>Ha definito il genere action‑adventure</strong><br>
        Le sue idee hanno dato origine a elementi diventati standard nei videogiochi moderni:</p>

        <ul>
            <li>esplorazione libera;</li>
            <li>oggetti chiave e puzzle;</li>
            <li>progressione non lineare;</li>
            <li>mondo interconnesso.</li>
        </ul>

        <p>Questi concetti sono alla base di giochi come:</p>

        <ul>
            <li>The Legend of Zelda;</li>
            <li>Metroid;</li>
            <li>Shadow of the Colossus;</li>
            <li>The Legend of Zelda: Breath of the Wild;</li>
            <li>Elden Ring.</li>
        </ul>

        <p><strong>Innovazioni introdotte</strong></p>
        <ul>
            <li>Primo grande esempio di esplorazione libera.</li>
            <li>Sistema di inventario e gestione oggetti.</li>
            <li>Enigmi ambientali.</li>
            <li>Mondo a schermate collegate.</li>
            <li>Primo Easter Egg della storia videoludica.</li>
            <li>Maggiore libertà rispetto ai giochi dell’epoca.</li>
        </ul>

        <p><strong>Curiosità</strong><br>
        Il gioco fu sviluppato con soli <strong>128 byte di RAM</strong>, una quantità minuscola anche per gli standard dell’epoca. 
        Nonostante questo, riuscì a creare un mondo sorprendentemente ricco e innovativo.</p>

        <p><strong>Eredità</strong><br>
        Adventure ha cambiato il concetto stesso di videogioco: non più solo punteggio e riflessi, 
        ma esplorazione, scoperta e risoluzione di enigmi. 
        È considerato uno dei fondamenti del game design moderno e il punto di partenza per gli action‑adventure e gli RPG.</p>
`
        }
    ],

    1980: [
        {
    title: "Pac-Man (1980)",
    img: "pacman.jpg",
    logo: "img/logo/Pac-Man.png",
    logoBgSize: "70vw",   // opzionale: puoi regolarlo come vuoi
    desc: `
        <p><strong>Descrizione</strong><br>
        Pubblicato nel <strong>1980</strong> da <strong>Namco</strong>, <em>Pac-Man</em> è uno dei videogiochi più famosi della storia, 
        creato da <strong>Toru Iwatani</strong>. Il giocatore controlla una piccola creatura gialla che deve attraversare un labirinto 
        mangiando tutti i puntini, evitando quattro fantasmi con comportamenti diversi.</p>

        <p>Il gameplay è semplice ma strategico: oltre a sopravvivere, bisogna pianificare i movimenti e usare i 
        <strong>power pellet</strong> per ribaltare la situazione e inseguire i fantasmi.</p>

        <p><strong>Perché ha rivoluzionato il mondo videoludico</strong></p>

        <p><strong>Ha reso i videogiochi un fenomeno pop mondiale</strong><br>
        Pac-Man è stato uno dei primi videogiochi a diventare un vero fenomeno culturale globale. 
        Non era più solo un gioco da sala arcade, ma un’icona riconosciuta da tutti.</p>

        <p><strong>È stato riconoscibile anche fuori dal gaming</strong><br>
        Il personaggio di Pac-Man è diventato un simbolo della cultura pop. 
        La sua immagine è comparsa su TV, giornali e prodotti di ogni tipo, diventando famoso anche tra chi non giocava ai videogiochi.</p>

        <p><strong>Ha ampliato il pubblico dei videogiochi</strong><br>
        A differenza di molti giochi dell’epoca, Pac-Man non puntava su guerra o azione violenta, 
        ma su un gameplay semplice e accessibile. Questo ha attirato un pubblico molto più ampio, 
        inclusi giocatori casual e famiglie.</p>

        <p><strong>Ha creato il merchandising videoludico</strong><br>
        Il successo del gioco ha portato alla nascita di un enorme mercato di prodotti collegati:</p>

        <ul>
            <li>giocattoli;</li>
            <li>magliette;</li>
            <li>serie animate;</li>
            <li>gadget;</li>
            <li>fumetti.</li>
        </ul>

        <p>È uno dei primi esempi di videogioco trasformato in <strong>brand globale</strong>.</p>

        <p><strong>Innovazioni introdotte</strong></p>
        <ul>
            <li>protagonista iconico e riconoscibile;</li>
            <li>nemici con comportamenti diversi;</li>
            <li>gameplay semplice ma strategico;</li>
            <li>accessibilità per tutti i tipi di giocatori;</li>
            <li>nascita del merchandising videoludico.</li>
        </ul>

        <p><strong>Curiosità</strong><br>
        Il design di Pac-Man è ispirato a una pizza con una fetta mancante. 
        Inoltre, i fantasmi non si muovono casualmente: ognuno ha una propria “personalità” e strategia di inseguimento.</p>

        <p><strong>Eredità</strong><br>
        Pac-Man ha cambiato per sempre il modo in cui i videogiochi vengono percepiti. 
        Ha dimostrato che potevano diventare fenomeni culturali globali e non solo intrattenimento di nicchia, 
        aprendo la strada ai grandi franchise moderni.</p>
`
        },

        {
    title: "Donkey Kong (1981)",
    img: "donkeykong.jpg",
    logo: "img/logo/Donkey-Kong.png",
    logoBgSize: "80vw",
    desc: `
        <p><strong>Descrizione</strong><br>
        Pubblicato nel <strong>1981</strong> da <strong>Nintendo</strong>, <em>Donkey Kong</em> è uno dei primi grandi successi 
        dell’azienda giapponese e il gioco che segna il debutto del personaggio che diventerà poi <strong>Mario</strong> 
        (inizialmente chiamato <em>Jumpman</em>). Il gioco è un platform arcade in cui il giocatore deve salvare 
        <strong>Pauline</strong>, una damigella in pericolo, dalle grinfie del gigantesco gorilla Donkey Kong.</p>

        <p>Il gameplay si sviluppa su più livelli verticali, dove il giocatore deve evitare barili, ostacoli e pericoli 
        ambientali, salendo verso la cima della struttura per raggiungere la vittima.</p>

        <p><strong>Perché ha rivoluzionato il mondo videoludico</strong></p>

        <p><strong>Ha introdotto la narrazione negli arcade</strong><br>
        Prima di Donkey Kong, la maggior parte dei giochi arcade non aveva una vera storia. 
        Qui invece viene introdotto un obiettivo narrativo chiaro: salvare un personaggio in pericolo. 
        Questo rende il gioco più coinvolgente e significativo.</p>

        <p><strong>Ha reso popolari i platform</strong><br>
        Il gioco è uno dei primi esempi completi di <strong>platform game</strong>, dove il movimento, i salti e il tempismo 
        sono fondamentali. Ha definito le basi del genere che diventerà uno dei più importanti della storia videoludica.</p>

        <p><strong>Ha lanciato Mario</strong><br>
        Donkey Kong segna la prima apparizione di <strong>Mario</strong>, creato da <strong>Shigeru Miyamoto</strong>. 
        Il personaggio diventerà nel tempo la mascotte di Nintendo e uno dei simboli più riconoscibili dell’intera industria.</p>

        <p><strong>Innovazioni introdotte</strong></p>
        <ul>
            <li>introduzione di una narrazione negli arcade;</li>
            <li>nascita del platform moderno;</li>
            <li>livelli strutturati verticalmente;</li>
            <li>personaggi iconici e riconoscibili;</li>
            <li>debutto di Mario.</li>
        </ul>

        <p><strong>Curiosità</strong><br>
        Il gioco nacque come risposta di Nintendo al fallimento commerciale di altri progetti arcade negli Stati Uniti. 
        Il successo fu enorme e contribuì a salvare e rilanciare l’azienda nel mercato videoludico globale.</p>

        <p><strong>Eredità</strong><br>
        <em>Donkey Kong</em> ha gettato le basi del platform moderno e ha introdotto l’idea di videogiochi con una storia 
        semplice ma coinvolgente. Soprattutto, ha dato vita a <strong>Mario</strong>, che diventerà il personaggio più 
        importante della storia dei videogiochi.</p>
`
        },

        {
    title: "Tetris (1984)",
    img: "tetris.jpg",
    logo: "img/logo/Tetris.png",
    logoBgSize: "80vw",
    desc: `
        <p><strong>Descrizione</strong><br>
        Pubblicato nel <strong>1984</strong> e creato da <strong>Alexey Pajitnov</strong>, <em>Tetris</em> è un puzzle game 
        basato sull’incastro di blocchi geometrici che cadono dall’alto. Il giocatore deve ruotarli e posizionarli nel modo 
        corretto per completare linee orizzontali, che scompaiono liberando spazio.</p>

        <p>Il gioco diventa progressivamente più veloce, rendendo la partita sempre più intensa e richiedendo riflessi rapidi 
        e pianificazione.</p>

        <p><strong>Perché ha rivoluzionato il mondo videoludico</strong></p>

        <p><strong>Gameplay semplice ma perfetto</strong><br>
        Tetris dimostra che un’idea estremamente semplice può diventare incredibilmente profonda e coinvolgente. 
        Le regole si imparano in pochi secondi, ma il gameplay resta appassionante anche dopo ore di gioco.</p>

        <p><strong>Ha dimostrato che la grafica non è tutto</strong><br>
        Il successo di Tetris ha mostrato che un videogioco non ha bisogno di grafica avanzata o storia complessa 
        per essere un capolavoro. Il gameplay è l’elemento centrale dell’esperienza.</p>

        <p><strong>Ha spinto il successo del Game Boy</strong><br>
        Il gioco è stato fondamentale per il successo del <strong>Game Boy</strong>. La sua semplicità e immediatezza 
        lo hanno reso perfetto per il gioco portatile, contribuendo alla diffusione mondiale della console.</p>

        <p><strong>È un gioco universale</strong><br>
        Tetris è uno dei videogiochi più conosciuti e giocati di sempre. È stato adattato su praticamente ogni piattaforma 
        esistente e continua a essere apprezzato da generazioni diverse di giocatori.</p>

        <p><strong>Innovazioni introdotte</strong></p>
        <ul>
            <li>gameplay estremamente intuitivo;</li>
            <li>difficoltà progressiva dinamica;</li>
            <li>perfetto equilibrio tra semplicità e profondità;</li>
            <li>adattabilità a qualsiasi piattaforma;</li>
            <li>modello di gioco universale e senza barriere.</li>
        </ul>

        <p><strong>Curiosità</strong><br>
        Tetris nacque in Unione Sovietica in un periodo in cui la distribuzione di videogiochi era molto limitata. 
        Nonostante questo, riuscì a diffondersi in tutto il mondo diventando uno dei primi veri fenomeni globali del gaming.</p>

        <p><strong>Eredità</strong><br>
        <em>Tetris</em> è considerato uno dei videogiochi più perfetti mai creati. Ha dimostrato che la forza di un gioco 
        non dipende dalla tecnologia, ma dall’idea di base. Ancora oggi è uno dei simboli più importanti della storia 
        videoludica.</p>
`
        },

        {
    title: "Super Mario Bros. (1985)",
    img: "supermario.jpg",
    logo: "img/logo/Mario.png",
    logoBgSize: "60vw",
    desc: `
        <p><strong>Descrizione</strong><br>
        Pubblicato nel <strong>1985</strong> per <strong>NES</strong> e sviluppato da <strong>Nintendo</strong>, 
        <em>Super Mario Bros.</em> è uno dei videogiochi più importanti della storia. 
        È un platform 2D in cui il giocatore controlla <strong>Mario</strong> (insieme a <strong>Luigi</strong> in modalità multiplayer) 
        attraverso vari mondi per salvare la <strong>Principessa Peach</strong> dal nemico <strong>Bowser</strong>.</p>

        <p>Il gioco è strutturato in livelli progressivi, ognuno con ostacoli, nemici e segreti da scoprire, 
        con un gameplay basato su salti precisi, tempismo ed esplorazione.</p>

        <p><strong>Perché ha rivoluzionato il mondo videoludico</strong></p>

        <p><strong>Ha definito il level design moderno</strong><br>
        Super Mario Bros. ha introdotto un modo completamente nuovo di progettare i livelli: 
        insegnare al giocatore senza tutorial, attraverso il gameplay stesso. 
        Ogni livello introduce nuove meccaniche in modo naturale.</p>

        <p><strong>Ha salvato il mercato delle console</strong><br>
        Dopo il crash del videogioco del 1983, il settore era in crisi. 
        Il successo del gioco contribuì in modo decisivo a rilanciare il mercato delle console domestiche, 
        grazie al successo del <strong>NES</strong>.</p>

        <p><strong>Ha stabilito le basi dei platform</strong><br>
        Il gioco ha definito le regole fondamentali dei platform moderni:</p>

        <ul>
            <li>controllo preciso del personaggio;</li>
            <li>fisica del salto coerente;</li>
            <li>progressione dei livelli sempre più complessa;</li>
            <li>design basato su abilità e riflessi.</li>
        </ul>

        <p>Questi elementi sono diventati uno standard per decenni.</p>

        <p><strong>Ha reso Nintendo leader del settore</strong><br>
        Il successo globale di Super Mario Bros. ha trasformato Nintendo in un colosso dell’industria videoludica, 
        consolidando <strong>Mario</strong> come mascotte ufficiale e simbolo del gaming.</p>

        <p><strong>Innovazioni introdotte</strong></p>
        <ul>
            <li>level design progressivo e intuitivo;</li>
            <li>introduzione di mondi e livelli strutturati;</li>
            <li>gameplay preciso e fluido;</li>
            <li>tutorial “invisibili” attraverso il gioco;</li>
            <li>standard dei platform 2D.</li>
        </ul>

        <p><strong>Curiosità</strong><br>
        Il primo livello (<strong>1-1</strong>) è considerato ancora oggi uno dei migliori esempi di tutorial implicito 
        nella storia dei videogiochi, studiato in game design per la sua semplicità ed efficacia.</p>

        <p><strong>Eredità</strong><br>
        <em>Super Mario Bros.</em> è uno dei giochi più influenti di sempre. 
        Ha definito il genere platform e stabilito le basi del game design moderno, 
        influenzando migliaia di giochi successivi e rendendo <strong>Mario</strong> una delle icone più riconoscibili 
        della cultura pop mondiale.</p>
`
        }


    ],

    1990: [
        {
    title: "Doom (1993)",
    img: "doom.jpg",
    logo: "img/logo/Doom-Logo.png",
    logoBgSize: "60vw",
    desc: `
        <p><strong>Descrizione</strong><br>
        Pubblicato nel <strong>1993</strong> da <strong>id Software</strong>, <em>Doom</em> è uno degli sparatutto più 
        influenti della storia dei videogiochi. È un <strong>FPS</strong> frenetico ambientato su una base spaziale su Marte 
        e nelle profondità dell’Inferno, dove il giocatore veste i panni di un marine impegnato ad affrontare orde di demoni.</p>

        <p>Il gioco è caratterizzato da un ritmo veloce, mappe labirintiche, armi iconiche come il fucile a pompa e la 
        motosega, e un gameplay basato su riflessi, esplorazione e combattimenti intensi.</p>

        <p><strong>Perché ha rivoluzionato il mondo videoludico</strong></p>

        <p><strong>Ha reso popolari gli FPS</strong><br>
        Doom ha definito le basi degli sparatutto in prima persona, trasformandoli in uno dei generi più importanti del 
        gaming. Dopo la sua uscita, il modello FPS è diventato uno standard per l’industria.</p>

        <p><strong>Ha introdotto multiplayer e modding su larga scala</strong><br>
        Il gioco ha reso popolare il <strong>deathmatch multiplayer</strong> via rete locale (LAN), dando origine al 
        multiplayer competitivo moderno.<br>
        Inoltre ha aperto la strada al <strong>modding</strong>, permettendo ai giocatori di creare nuove mappe e contenuti, 
        influenzando profondamente la cultura PC.</p>

        <p><strong>Ha influenzato quasi tutti gli FPS successivi</strong><br>
        Il design di Doom ha ispirato praticamente ogni shooter successivo, da <em>Quake</em> a <em>Half-Life</em>, fino ai 
        moderni FPS competitivi. Il suo approccio al gameplay veloce e dinamico è diventato uno standard del genere.</p>

        <p><strong>Ha trasformato il PC gaming</strong><br>
        Grazie alla sua popolarità, Doom ha contribuito a rendere il <strong>PC</strong> una piattaforma centrale per il 
        gaming, dimostrando le potenzialità tecniche e creative dei giochi su computer.</p>

        <p><strong>Innovazioni introdotte</strong></p>
        <ul>
            <li>FPS moderno con visuale in prima persona;</li>
            <li>gameplay veloce e frenetico;</li>
            <li>multiplayer deathmatch via LAN;</li>
            <li>supporto al modding da parte della community;</li>
            <li>design dei livelli non lineare;</li>
            <li>atmosfera immersiva e tecnica avanzata per l’epoca.</li>
        </ul>

        <p><strong>Curiosità</strong><br>
        Il motore grafico di Doom era così avanzato per il suo tempo che il gioco è stato successivamente portato su 
        dispositivi improbabili, diventando un simbolo della versatilità del codice originale.</p>

        <p><strong>Eredità</strong><br>
        <em>Doom</em> è considerato il padre degli sparatutto moderni. Ha definito un intero genere, rivoluzionato il 
        multiplayer e creato una cultura di modding che esiste ancora oggi. La sua influenza è presente in quasi tutti gli 
        FPS contemporanei.</p>
`
        },

        {
    title: "Diablo (1996)",
    img: "diablo.jpg",
    logo: "img/logo/Diablo.png",
    logoBgSize: "60vw",
    desc: `
        <p><strong>Descrizione</strong><br>
        Pubblicato nel <strong>1996</strong> da <strong>Blizzard North</strong>, <em>Diablo</em> è un action RPG dark fantasy 
        ambientato nel mondo di <strong>Sanctuarium</strong>. Il giocatore esplora dungeon generati in modo semi-casuale, 
        combattendo mostri e raccogliendo equipaggiamenti sempre più potenti.</p>

        <p>La storia ruota attorno alla città di <strong>Tristram</strong> e alla discesa nelle profondità di una cattedrale 
        infestata, fino allo scontro con il <strong>Signore del Terrore</strong>, Diablo. Il gameplay combina combattimenti 
        in tempo reale, esplorazione e progressione del personaggio basata su statistiche e bottino.</p>

        <p><strong>Perché ha rivoluzionato il mondo videoludico</strong></p>

        <p><strong>Ha creato il sistema moderno di loot casuale</strong><br>
        Diablo ha reso centrale il concetto di <strong>loot randomico</strong>, dove armi, armature e oggetti hanno 
        statistiche generate casualmente. Questo sistema ha reso ogni partita diversa e ha introdotto il piacere della 
        “ricompensa imprevedibile”, ancora oggi fondamentale in moltissimi giochi.</p>

        <p><strong>Ha reso popolari gli action RPG</strong><br>
        Il gioco ha definito il modello degli action RPG moderni, combinando combattimento in tempo reale con crescita del 
        personaggio e raccolta di oggetti. Questo approccio ha reso il genere più dinamico e accessibile rispetto ai RPG 
        tradizionali a turni.</p>

        <p><strong>Ha influenzato i giochi online moderni</strong><br>
        Diablo ha posto le basi per gli RPG online e per il concetto di progressione legata al loot. 
        Titoli come <em>Path of Exile</em> e <em>Borderlands</em> hanno ripreso e ampliato queste meccaniche, 
        costruendo interi sistemi di gioco attorno alla raccolta di equipaggiamento.</p>

        <p><strong>Innovazioni introdotte</strong></p>
        <ul>
            <li>loot casuale e altamente variabile;</li>
            <li>dungeon generati proceduralmente;</li>
            <li>combattimento in tempo reale nei RPG;</li>
            <li>progressione del personaggio basata su statistiche;</li>
            <li>atmosfera dark fantasy immersiva;</li>
            <li>forte focus sulla rigiocabilità.</li>
        </ul>

        <p><strong>Curiosità</strong><br>
        Il gioco doveva inizialmente essere a turni, ma durante lo sviluppo Blizzard cambiò direzione trasformandolo in un 
        action RPG in tempo reale, scelta che contribuì enormemente al suo successo.</p>

        <p><strong>Eredità</strong><br>
        <em>Diablo</em> ha definito un nuovo modo di intendere i giochi di ruolo, rendendoli più dinamici, accessibili e 
        basati sul loot. La sua influenza è ancora oggi evidente in moltissimi RPG moderni e nei giochi online basati sulla 
        progressione e sulla raccolta di equipaggiamenti.</p>
`
        },

        {
    title: "Pokémon Rosso e Blu (1996)",
    img: "pokemon.jpg",
    logo: "img/logo/pokemon.png",
    logoBgSize: "60vw",
    desc: `
        <p><strong>Descrizione</strong><br>
        Pubblicati nel <strong>1996</strong> per <strong>Game Boy</strong> e sviluppati da <strong>Game Freak</strong> 
        con pubblicazione di <strong>Nintendo</strong>, <em>Pokémon Rosso</em> e <em>Blu</em> sono gli RPG portatili che 
        hanno dato inizio a uno dei franchise più importanti della storia dei videogiochi.</p>

        <p>Il giocatore interpreta un giovane Allenatore Pokémon che esplora la regione di <strong>Kanto</strong>, 
        catturando, allenando e facendo combattere creature chiamate Pokémon. L’obiettivo è completare il 
        <strong>Pokédex</strong> e diventare il miglior allenatore sfidando i Capipalestra e la Lega Pokémon.</p>

        <p>Il gameplay combina esplorazione, combattimenti a turni e progressione basata sulla crescita delle creature.</p>

        <p><strong>Perché ha rivoluzionato il mondo videoludico</strong></p>

        <p><strong>Ha creato un fenomeno mondiale transmediale</strong><br>
        Pokémon è diventato molto più di un videogioco: è un franchise globale che include serie animate, film, 
        carte collezionabili, giocattoli e merchandising. È uno dei primi esempi di universo narrativo videoludico 
        capace di espandersi su più media.</p>

        <p><strong>Ha reso popolare il multiplayer portatile</strong><br>
        Grazie al <strong>cavo link</strong> del Game Boy, i giocatori potevano scambiarsi e far combattere i Pokémon. 
        Questo ha introdotto una forma di multiplayer portatile innovativa, basata su cooperazione e competizione.</p>

        <p><strong>Ha introdotto il concetto di collezionismo nei videogiochi</strong><br>
        Il gioco ha reso centrale l’idea di collezionare creature diverse, spingendo i giocatori a completare il 
        Pokédex. Questo sistema ha creato un forte senso di progressione e completamento, diventando una delle 
        meccaniche più influenti del gaming moderno.</p>

        <p><strong>Innovazioni introdotte</strong></p>
        <ul>
            <li>collezione e scambio di creature;</li>
            <li>multiplayer portatile tramite cavo link;</li>
            <li>progressione basata su evoluzione e allenamento;</li>
            <li>mondo persistente esplorabile;</li>
            <li>forte integrazione tra gioco e media esterni.</li>
        </ul>

        <p><strong>Curiosità</strong><br>
        Il successo iniziale fu così grande che i giochi vennero rilasciati in Giappone senza immaginare 
        l’enorme impatto globale che avrebbero avuto. La scoperta di Pokémon “rari” e lo scambio tra amici 
        divennero rapidamente un fenomeno sociale.</p>

        <p><strong>Eredità</strong><br>
        <em>Pokémon Rosso e Blu</em> ha definito un nuovo modo di concepire i videogiochi, basato su collezione, 
        socialità e connessione tra giocatori. Ancora oggi è alla base di uno dei franchise più redditizi e 
        influenti della storia dell’intrattenimento.</p>
`
        }


    ],

    2000: [
        { title: "GTA San Andreas", img: "gta.jpg", desc: "Un classico open world." }
    ],

    2010: [
        { title: "Minecraft", img: "minecraft.jpg", desc: "Creatività infinita." }
    ],

    2020: [
        { title: "Elden Ring", img: "elden.jpg", logo: "img/logo/eldenring.png", desc: "Capolavoro moderno." }
    ]
};


// -----------------------------
// VARIABILI PRINCIPALI
// -----------------------------
let selectedYearIndex = 0;
let selectedGameIndex = 0;

const timelineItems = Array.from(document.querySelectorAll("#timelineList li"));
const gamesBox = document.getElementById("gamesBox");
const infoBox = document.getElementById("infoBox");
const gamesList = document.getElementById("gamesList");


// -----------------------------
// CANVAS
// -----------------------------
const rainCanvas = document.getElementById("rainCanvas");
const ctx = rainCanvas.getContext("2d");

const retroCanvas = document.getElementById("retroCanvas");
const rctx = retroCanvas.getContext("2d");

const fantasyCanvas = document.getElementById("fantasyCanvas");
const fctx = fantasyCanvas.getContext("2d");


// -----------------------------
// LINEA TIMELINE
// -----------------------------
function updateTimelineLine() {
    const line = document.getElementById("timelineLine");
    const items = document.querySelectorAll("#timelineList li");
    const container = document.querySelector(".timeline-container").getBoundingClientRect();

    let points = "";

    items.forEach((li) => {
        const rect = li.getBoundingClientRect();
        const xOffset = li.classList.contains("active") ? 40 : 0;
        const x = 14 + xOffset;
        const y = rect.top - container.top + 14;
        points += `${x},${y} `;
    });

    line.setAttribute("points", points.trim());
}


// -----------------------------
// SELEZIONE TIMELINE (VERSIONE CORRETTA)
// -----------------------------
function selectTimeline(index) {
    timelineItems.forEach(el => el.classList.remove("active"));
    timelineItems[index].classList.add("active");
    selectedYearIndex = index;

    updateTimelineLine();

    const year = timelineItems[index].dataset.year;

    // Cambia font in base alla decade
    document.body.className = "year-" + year;

    // Attiva sfondi
    rainCanvas.style.opacity = (year === "1970") ? 1 : 0;
    retroCanvas.style.opacity = (year === "1980") ? 1 : 0;
    fantasyCanvas.style.opacity = (year === "1990") ? 1 : 0;

    // Scroll automatico
    timelineItems[index].scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


// -----------------------------
// APERTURA LISTA GIOCHI
// -----------------------------
function openGames() {
    const year = timelineItems[selectedYearIndex].dataset.year;
    loadGames(year);

    gamesBox.classList.remove("hidden");
    infoBox.classList.remove("hidden");

    selectedGameIndex = 0;
    highlightGame();
    showGame();
}


// -----------------------------
// CARICAMENTO GIOCHI
// -----------------------------
function loadGames(year) {
    gamesList.innerHTML = "";
    selectedGameIndex = 0;

    gamesData[year].forEach((g, index) => {
        const li = document.createElement("li");
        li.textContent = g.title;
        li.dataset.index = index;

        li.addEventListener("click", () => {
            selectedGameIndex = index;
            highlightGame();
            showGame();
        });

        gamesList.appendChild(li);
    });
}


// -----------------------------
// EVIDENZIA GIOCO
// -----------------------------
function highlightGame() {
    const items = gamesList.querySelectorAll("li");
    items.forEach(el => el.style.color = "white");

    if (items[selectedGameIndex]) {
        items[selectedGameIndex].style.color = "yellow";
    }
}


// -----------------------------
// MOSTRA INFO GIOCO
// -----------------------------
function showGame() {
    const year = timelineItems[selectedYearIndex].dataset.year;
    const game = gamesData[year][selectedGameIndex];

    document.getElementById("gameTitle").textContent = game.title;
    document.getElementById("gameDescription").innerHTML = game.desc;
    document.getElementById("gameImage").src = game.img;

    showBackgroundLogo(game.logo, game.logoBgSize);
}


// -----------------------------
// CLICK TIMELINE
// -----------------------------
timelineItems.forEach((li, index) => {
    li.addEventListener("click", () => selectTimeline(index));
});


// -----------------------------
// NAVIGAZIONE TASTIERA
// -----------------------------
document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();

    if (key === "a") hideBackgroundLogo();
    if (key === "w" || key === "s") hideBackgroundLogo();

    if (gamesBox.classList.contains("hidden")) {

        if (key === "w" && selectedYearIndex > 0) selectTimeline(selectedYearIndex - 1);
        if (key === "s" && selectedYearIndex < timelineItems.length - 1) selectTimeline(selectedYearIndex + 1);
        if (key === "d") openGames();

    } else {

        if (key === "w" && selectedGameIndex > 0) {
            selectedGameIndex--;
            highlightGame();
            showGame();
        }

        if (key === "s") {
            const year = timelineItems[selectedYearIndex].dataset.year;
            if (selectedGameIndex < gamesData[year].length - 1) {
                selectedGameIndex++;
                highlightGame();
                showGame();
            }
        }

        if (key === "d") showGame();

        if (key === "a") {
            gamesBox.classList.add("hidden");
            infoBox.classList.add("hidden");
            selectTimeline(selectedYearIndex);
            hideBackgroundLogo();
        }
    }
    // Tasto I → mostra/nasconde il tutorial
    if (key === "i") {
        if (controlsBox.classList.contains("hidden")) {
            // Mostra il tutorial
            controlsBox.classList.remove("hidden");
            infoBubble.classList.add("hidden");
        } else {
            // Nasconde il tutorial e mostra il pallino
            controlsBox.classList.add("hidden");
            infoBubble.classList.remove("hidden");
        }
    }
});



// -----------------------------
// LOGO
// -----------------------------
const logo = document.querySelector(".logo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) logo.classList.add("shrink");
    else logo.classList.remove("shrink");
});

logo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// -----------------------------
// INIZIALIZZAZIONE
// -----------------------------
selectTimeline(0);
window.addEventListener("resize", updateTimelineLine);


// -----------------------------
// SFONDO 1970 — PIOGGIA
// -----------------------------
function resizeCanvas() {
    rainCanvas.width = window.innerWidth;
    rainCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const drops = [];
for (let i = 0; i < 120; i++) {
    drops.push({
        x: Math.random() * rainCanvas.width,
        y: Math.random() * rainCanvas.height,
        length: 10 + Math.random() * 30,
        speed: 2 + Math.random() * 6,
        opacity: 0.1 + Math.random() * 0.4
    });
}

function animateRain() {
    ctx.clearRect(0, 0, rainCanvas.width, rainCanvas.height);

    drops.forEach(drop => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255,255,255,${drop.opacity})`;
        ctx.lineWidth = 2;
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();

        drop.y += drop.speed;

        if (drop.y > rainCanvas.height) {
            drop.y = -drop.length;
            drop.x = Math.random() * rainCanvas.width;
        }
    });

    requestAnimationFrame(animateRain);
}
animateRain();


// -----------------------------
// LOGO SULLO SFONDO
// -----------------------------
function showBackgroundLogo(path, size = null) {
    const bgLogo = document.getElementById("backgroundGameLogo");
    bgLogo.src = path || "";

    // 🔥 Applica la dimensione personalizzata se esiste
    bgLogo.style.width = size || "45vw";

    bgLogo.style.opacity = path ? 0.18 : 0;
}


function hideBackgroundLogo() {
    const bgLogo = document.getElementById("backgroundGameLogo");
    bgLogo.style.opacity = 0;
    bgLogo.src = "";
}


// -----------------------------
// SFONDO 1980 — NEON GRID
// -----------------------------
function resizeRetroCanvas() {
    retroCanvas.width = window.innerWidth;
    retroCanvas.height = window.innerHeight;
}
resizeRetroCanvas();
window.addEventListener("resize", resizeRetroCanvas);

const stars = [];
for (let i = 0; i < 120; i++) {
    stars.push({
        x: Math.random() * retroCanvas.width,
        y: Math.random() * retroCanvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.2
    });
}

function animateRetro() {
    rctx.clearRect(0, 0, retroCanvas.width, retroCanvas.height);

    rctx.fillStyle = "#000";
    rctx.fillRect(0, 0, retroCanvas.width, retroCanvas.height);

    stars.forEach(s => {
        rctx.fillStyle = ["#0ff", "#0cf", "#fff", "#f0f"][Math.floor(Math.random()*4)];
        rctx.fillRect(s.x, s.y, s.size, s.size);
        s.y += s.speed;
        if (s.y > retroCanvas.height) s.y = 0;
    });

    rctx.strokeStyle = "rgba(0,150,255,0.6)";
    rctx.lineWidth = 1;

    for (let i = 0; i < 40; i++) {
        rctx.beginPath();
        rctx.moveTo(0, retroCanvas.height - i * 20);
        rctx.lineTo(retroCanvas.width, retroCanvas.height - i * 20);
        rctx.stroke();
    }

    for (let i = -20; i < 20; i++) {
        rctx.beginPath();
        rctx.moveTo(retroCanvas.width / 2 + i * 40, retroCanvas.height);
        rctx.lineTo(retroCanvas.width / 2 + i * 10, retroCanvas.height - 800);
        rctx.stroke();
    }

    requestAnimationFrame(animateRetro);
}
animateRetro();


// -------------------------------------------
// SFONDO 1990 — VERSIONE DEFINITIVA NOTTURNA
// -------------------------------------------

function resizeFantasyCanvas() {
    fantasyCanvas.width = window.innerWidth;
    fantasyCanvas.height = window.innerHeight;
}
resizeFantasyCanvas();
window.addEventListener("resize", resizeFantasyCanvas);

const px = 6;

// LOOP PERFETTO
const loopDistance = 240;

// CASTELLO
let castleW = 40;
let castleH = 40;

let castleX1 = 0;
let castleX2 = loopDistance;

// SENTIERO
let pathW = 40;
let pathX1 = 0;
let pathX2 = loopDistance;

// Velocità identica
const scrollSpeed = 0.25;

function animateFantasy() {
    const w = fantasyCanvas.width;
    const h = fantasyCanvas.height;

    fctx.imageSmoothingEnabled = false;

    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = Math.floor(w / px);
    tempCanvas.height = Math.floor(h / px);
    const tctx = tempCanvas.getContext("2d");

    // 🔥 elimina pixel trasparenti e smoothing
    tctx.imageSmoothingEnabled = false;
    tctx.globalCompositeOperation = "source-over";

    // ---------------------
    // LINEA DEL TERRENO
    // ---------------------
    const groundY = tempCanvas.height * 0.70;

    // ---------------------
    // CIELO NOTTURNO
    // ---------------------
    tctx.fillStyle = "#081033";
    tctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    // LUNA
    tctx.fillStyle = "#dfe6ff";
    tctx.beginPath();
    tctx.arc(tempCanvas.width * 0.85, tempCanvas.height * 0.18, 10, 0, Math.PI * 2);
    tctx.fill();

    // ---------------------
    // PIANURA VERDE NOTTE
    // ---------------------
    tctx.fillStyle = "#4f6b2f";
    tctx.fillRect(0, groundY, tempCanvas.width, tempCanvas.height - groundY);

    // ---------------------
    // MONTAGNE BASSE NOTTURNE
    // ---------------------
    for (let i = 0; i < 7; i++) {
        const baseX = (i * 120 - castleX1 * 0.15) % (tempCanvas.width + 120);

        const height = 35 + (i % 3) * 20;

        tctx.fillStyle = "#5c6477";
        tctx.beginPath();
        tctx.moveTo(baseX, groundY);
        tctx.lineTo(baseX + 60, groundY - height);
        tctx.lineTo(baseX + 120, groundY);
        tctx.fill();
    }

    // ---------------------
    // PINI (meno, distanziati, appoggiati alla pianura)
    // ---------------------
    for (let i = 0; i < 18; i++) {
        const x = (i * 70 - castleX1 * 0.3) % (tempCanvas.width + 70);

        // tronco
        tctx.fillStyle = "#3a2a1a";
        tctx.fillRect(x + 6, groundY - 18, 4, 18);

        // chioma
        tctx.fillStyle = "#1f4a2f";
        tctx.beginPath();
        tctx.moveTo(x, groundY - 18);
        tctx.lineTo(x + 10, groundY - 48);
        tctx.lineTo(x + 20, groundY - 18);
        tctx.fill();
    }

    // ---------------------
    // CASTELLO (senza pixel trasparenti)
    // ---------------------
    function drawCastle(x) {
        x = Math.round(x);
        const y = Math.round(groundY - castleH);

        // corpo
        tctx.fillStyle = "#3f4566";
        tctx.fillRect(x, y, castleW, castleH);

        // finestre
        tctx.fillStyle = "#1b1f33";
        tctx.fillRect(x + 8, y + 10, 8, 8);
        tctx.fillRect(x + 24, y + 10, 8, 8);

        // torri
        tctx.fillStyle = "#596080";
        tctx.fillRect(x + 5, y - 10, 10, 10);
        tctx.fillRect(x + 25, y - 10, 10, 10);

        // torce animate
        const flame = Math.random() > 0.5 ? "#ffcc55" : "#ffaa33";
        tctx.fillStyle = flame;
        tctx.fillRect(x + 18, y + 32, 2, 4);
    }

    // ---------------------
    // SENTIERO
    // ---------------------
    function drawPath(x) {
        x = Math.round(x);
        const top = groundY;

        tctx.fillStyle = "#6b4a2a";
        tctx.beginPath();
        tctx.moveTo(x + 20, tempCanvas.height);
        tctx.lineTo(x + 10, top);
        tctx.lineTo(x + 30, top);
        tctx.lineTo(x + 40, tempCanvas.height);
        tctx.fill();
    }

    // ---------------------
    // LOOP PERFETTO
    // ---------------------
    castleX1 -= scrollSpeed;
    castleX2 -= scrollSpeed;

    if (castleX1 <= -loopDistance) castleX1 = castleX2 + loopDistance;
    if (castleX2 <= -loopDistance) castleX2 = castleX1 + loopDistance;

    drawCastle(castleX1);
    drawCastle(castleX2);

    pathX1 -= scrollSpeed;
    pathX2 -= scrollSpeed;

    if (pathX1 <= -loopDistance) pathX1 = pathX2 + loopDistance;
    if (pathX2 <= -loopDistance) pathX2 = pathX1 + loopDistance;

    drawPath(pathX1);
    drawPath(pathX2);

    // ---------------------
    // DISEGNO FINALE PIXELATO
    // ---------------------
    fctx.clearRect(0, 0, w, h);
    fctx.imageSmoothingEnabled = false;
    fctx.drawImage(tempCanvas, 0, 0, tempCanvas.width, tempCanvas.height, 0, 0, w, h);

    requestAnimationFrame(animateFantasy);
}

animateFantasy();


// -----------------------------
// TUTORIAL
// -----------------------------
const controlsBox = document.querySelector(".controls");
const infoBubble = document.getElementById("infoBubble");

setTimeout(() => {
    controlsBox.classList.add("hidden");
    infoBubble.classList.remove("hidden");
}, 5000);

infoBubble.addEventListener("click", () => {
    infoBubble.classList.add("hidden");
    controlsBox.classList.remove("hidden");
});

controlsBox.addEventListener("click", () => {
    controlsBox.classList.add("hidden");
    infoBubble.classList.remove("hidden");
});
