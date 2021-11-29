import Activity from "./Activity";
import { ActivityContent } from "./ActivityContent";
import AlertSection from "./ActivityContent/AlertSection";
import DownloadSection from "./ActivityContent/DownloadSection";
import ListSection from "./ActivityContent/ListSection";
import ImageMediaSectionNoUrl from "./ActivityContent/Media/ImageMediaSectionNoUrl";
import MultiTextSection from "./ActivityContent/MultiTextSection";
import TextSection from "./ActivityContent/TextSection";
import TextWithMediaSection from "./ActivityContent/TextWithMediaSection";

export default class Activities {
    static get FTP_Activities(): Activity[] {
        return [
            Activity.create(
                'ftp-0',
                "Introducció",
                new ActivityContent(
                    'Introducció a FTP',
                    "En aquest mòdul aprendrem les bases d'FTP (File Transfer Protocol) i com fer servir l'FTP que ens proporciona Dinahosting (o qualsevol altre, ja que és un estàndar).",
                    [
                        new ListSection(
                            [
                                "Un servei que ens proporcioni FTP (Dinahosting n'és d'un).",
                            ],
                            "Requisits",
                            true,
                        ),
                    ],
                ),
            ),
            Activity.create(
                'ftp-1',
                "El protocol FTP",
                new ActivityContent(
                    "Què és FTP?",
                    "FTP (File Transfer Protocol) és un protocol de transferència de fitxers. En poques paraules, ens permet transferir fitxers a través de la xarxa.",
                    [
                        new TextWithMediaSection(
                            new MultiTextSection(
                                [
                                    new TextSection(
                                        "El protocol ens permet transderir entre un servidor FTP (en el nostre cas Dinahosting) i un client (pot ser, per exemple, el nostre ordinador). Depenent de la configuració del servidor els accessos a les dades es poden restringir, per exmple: potser vols permetre que tothom pugui descarregar fitxers però només puguin pujar arxius si s'escriu una contrasenya (usuari-contrasenya).",
                                    ),
                                    new TextSection(
                                        "Per poder realitzar transferencies amb un servidor FTP necessitem un client FTP. Un client FTP és un programa que ens permet interactuar amb el servidor. Nosaltres farem servir FileZilla (gratuït i Open Source).",
                                    ),
                                ],
                            ),
                            new ImageMediaSectionNoUrl(
                                require('../../../resources/FTP/FTP_0.jpg'),
                            ),
                        ),
                    ],
                ),
            ),
            Activity.create(
                'ftp-server',
                "Configuració de l'FTP",
                new ActivityContent(
                    "Configuració de l'FTP al hosting",
                    "Configurarem el servei FTP des del panell d'administració de Dinahosting. Habilitarem la pujada i descàrrega de fitxers i carpetes.",
                    [
                        new TextSection(
                            "Accedim al panell d'administracó de Dinahosting. Un cop dins, busquem l'apartat 'FTP' al menú lateral. Un cop hem accedit, veurem una taula amb els comptes FTP disponibles (automàticament Dinahosting ens ha creat un compte que pot accedir a una carpeta anomenada FTP).",
                        ),
                        new AlertSection(
                            new TextSection(
                                "Veiem que hi ha una opció anomenada 'Activar accés 'FTP SSL' que per defecte es troba deshabilitada. És recomanable habilitarla ja que fer servir FTP SSL vol dir que xifrem les transferències de fitxers.",
                            ),
                            "warning",
                            "Recomanació",
                        ),
                        new ImageMediaSectionNoUrl(
                            require('../../../resources/FTP/FTP_1.PNG'),
                        ),
                        new TextSection(
                            "Situat sota la taula de comptes FTP trobem un botó que ens permet modificar la contrasenya d'un usuari que haguem seleccionat. Seleccionem l'usuari que hi ha per defecte i canviem la seva contrasenya.",
                        ),
                    ],
                ),
            ),
            Activity.create(
                'filezilla',
                "Introducció a FileZilla",
                new ActivityContent(
                    "Introducció al client FileZilla",
                    "Com hem comentat anteriorment, farem servir el client FileZilla per tal de poder interactuar amb l'FTP de Dinahosting.",
                    [
                        new TextSection(
                            "Ens descarreguem i instal·lem el client FileZilla per tal de poder connectar-nos al servidor.",
                            "Instal·lar FileZilla",
                        ),
                        new DownloadSection(
                            "FileZilla per a Windows",
                            "https://download.filezilla-project.org/client/FileZilla_3.56.2_win64_sponsored-setup.exe",
                        ),
                        new TextWithMediaSection(
                            new MultiTextSection(
                                [
                                    new TextSection(
                                        "Un cop l'haguem instal·lat, executem l'aplicació.",
                                        "Connectar-nos a l'FTP mitjançant FileZilla",
                                    ),
                                    new TextSection(
                                        "Veurem diversos camps que podem emplenar amb la informació de connexió. És necessari emplenar els camps:",
                                    ),
                                    new ListSection(
                                        [
                                            "Servidor: obtenim la direcció del servidor afegint-hi 'ftp.' al davant del nostre nom de domini. Per exemple, per al domini 'lolin-cafe.cat' la direcció d'FTP és 'ftp.lolin-cafe.cat'.",
                                            "Nom d'usuari: és el nom del compte d'usuari que farem servir per accedir (és el nom que apareixia a la taula d'usuaris de la secció anterior).",
                                            "Contrasenya: és la contrasenya que hem configurat abans per a l'usuari FTP."
                                        ]
                                    ),
                                    new TextSection(
                                        "Ara que ja hem emplenat els camps, podem prèmer sobre 'Connexió ràpida' per tal de connectar-nos amb l'FTP. Veurem que al connectar-nos apareix una alerta dient-nos que no es reconeix un certificat. No entrarem en detall sobre que és i per què no el reconeix, acceptem i seguim.",
                                    ),
                                ],
                            ),
                            new ImageMediaSectionNoUrl(
                                require('../../../resources/FTP/FTP_2.PNG'),
                            ),
                        ),
                        new TextWithMediaSection(
                            new MultiTextSection(
                                [
                                    new TextSection(
                                        "Un cop ens hem pogut connectar a l'FTP, veurem una jerarquía de fitxers i carpetes molt similar a la de l'explorador de fitxers de Windows.",
                                        "Explorar fitxers i carpetes mitjançant FileZilla",
                                    ),
                                    new TextSection(
                                        "Podem navegar per les carpetes, pujar, descarregar o eliminar fitxers, etc.",
                                    ),
                                    new AlertSection(
                                        new TextSection(
                                            "No elimineu ni modifiqueu carpetes i fitxers que no sabeu que són. Hi han carpetes que pertanyen a WordPress i que són necessaris per al seu funcionament. Si espatlleu algún fitxer, serà necessari tornar a instal·lar tot el gestor de continguts i, a més a més, perdreu tot el que heu fet fins ara.",
                                        ),
                                        "warning",
                                        "Molt de compte",
                                    ),
                                    new TextSection(
                                        "Us recomano crear-vos una carpeta que s'anomeni 'Fitxers' on guardeu els fitxers i carpetes que pujeu amb l'FTP (si es que us fa falta l'FTP).",
                                    ),
                                ],
                            ),
                            new ImageMediaSectionNoUrl(
                                require('../../../resources/FTP/FTP_3.PNG'),
                            ),
                        ),
                    ],
                ),
            ),
        ];
    }

    static get DINAHOSTING_SETUP_Activities(): Activity[] {
        return [
            Activity.create(
                'INTRO',
                "Introducció",
                new ActivityContent(
                    'Introducció',
                    "En aquest mòdul aprendrem a instal·lar el gestor de continguts mitjançant el panell de control de Dinahosting. És el primer pas per tal de poder crear la nostra web per al concurs.",
                    [
                        new ListSection(
                            [
                                "Tenir un compte a Dinahosting.",
                                "Disposar d'un domini (en teoria tothom disposa d'un automàticament)."
                            ],
                            "Requisits",
                            true,
                        )
                    ],
                ),
            ),
            Activity.create(
                'SETUP',
                "Instal·lació de WordPress",
                new ActivityContent(
                    'Instal·lació del gestor de continguts',
                    "A continuació veurem com podem instal·lar el gestor de continguts WordPress mitjançant les eines del panell d'administració de Dinahosting.",
                    [
                        new TextSection(
                            "Accedim al nostre compte de Dinahosting. Un cop haguem iniciat sessió, hauríem d'aparèixer a la web 'https://panel.dinahosting.com'.\n" +
                            "Localitzem el menú de navegació superior i accedim a 'Hosting'.\n" +
                            "Un cop hem accedit a hosting, veiem una sèrie de serveis disponibles per al seu ús (correu, FTP, Bases de dades, dominis, apps autoinstal·lables, etc). Per ara nomès farem cas de la secció d'apps autoinstal·lables que ens permetrà instal·lar WordPress sense massa complicacions.",
                        ),
                        new TextWithMediaSection(
                            new MultiTextSection(
                                [
                                    new TextSection(
                                        "Accedim a 'Apps autoinstal·lables'.\nVeurem un llistat d'aplicacions que podem instal·lar al nostre hosting. Busquem l'opció de WordPress i premem sobre 'Configurar'." +
                                        " Se'ns mostrarà un diàleg on haurem d'introduir una sèrie de dades.",
                                    ),
                                    new TextSection(
                                        "En aquesta secció haurem de marcar l'opció 'Instal·lar a l'arrel del hosting'. Ignorarem l'avís que ens mostra el formulari.",
                                        "Lloc d'instal·lació"
                                    ),
                                    new TextSection(
                                        "Aquí haurem d'indicar el nom del lloc web i l'idioma d'instal·lació. Encara que es pot modificar més tard, us recomano que penseu bé el nom i us assegureu de que no hi ha errades tipogràfiques.",
                                        "Dades bàsiques"
                                    ),
                                    new TextSection(
                                        "Deixem sense marcar l'opció del 'multisite'.",
                                    ),
                                    new TextSection(
                                        "Introduirem una direcció d'email vàlida (us recomano fer servir la vostra de l'escola). Procureu no posar caràcters especials (espais, accents, etc) al nom d'usuari.",
                                        "Dades d'usuari"
                                    ),
                                    new TextSection(
                                        "Finalment, escriurem una nova contrasenya. Aquesta contrasenya es farà servir per accedir al panell d'administració del WordPress (el panell del WordPress no és el mateix que el de Dinahosting). Recordeu de no perdre aquesta contrasenya, ja que si per algún motiu perdeu completament l'accés al panell del WordPress l'haureu de tornar a instal·lar.",
                                    ),
                                    new AlertSection(
                                        new TextSection(
                                            "És important que la contrasenya sigui mínimament complexa ja que, malauradament, hi ha gent amb males intencions que pot fer perillar la vostra web. Tingueu-ho en compte.",
                                        ),
                                        "warning",
                                        "A tenir en compte"
                                    ),
                                    new TextSection(
                                        "Un cop emplenats els camps anteriors, premem 'Acceptar' per tal d'iniciar la instal·lació. El procés pot trigar una bona estona, tingueu paciència."
                                    ),
                                ],
                            ),
                            new ImageMediaSectionNoUrl(
                                require('../../../resources/DinahostingLP/SetupWordpress_1.PNG'),
                            ),
                        )
                    ],
                ),
            ),
            Activity.create(
                'END-SETUP',
                'Últimes passes',
                new ActivityContent(
                    'Abans de finalitzar',
                    'Ja tenim el gestor de continguts (WordPress) instal·lat. Només ens queda comprovar que podem accedir-hi sense inconvenients.',
                    [
                        new TextSection(
                            "Un cop s'hagi instal·lat el gestor de continguts apareixerà una taula amb una sèrie de dades com la següent (si no apareix, recarregueu la pàgina):",
                        ),
                        new ImageMediaSectionNoUrl(
                            require('../../../resources/DinahostingLP/SetupWordpress_2.PNG'),
                        ),
                        new TextWithMediaSection(
                            new MultiTextSection(
                                [
                                    new TextSection(
                                        "Si premeu sobre 'URL d'administració' s'obrirà una pàgina on apareix un inici de sessió. Si introduïm les dades que hem configurat abans (nom d'usuari i contrasenya) podrem accedir al panell d'administració de WordPress.",
                                    ),
                                    new TextSection(
                                        "És possible que el sistema necessiti que valideu la vostra direcció de correu electrònic. Si no voleu realitzar aquesta verificació, premeu sobre 'Recorda-m'ho més tard'.",
                                    ),
                                ],
                            ),
                            new ImageMediaSectionNoUrl(
                                require('../../../resources/DinahostingLP/SetupWordpress_3.PNG'),
                            ),
                        ),
                    ],
                ),
            ),
            Activity.create(
                'RECOMMENDED-ACTIONS-AFTER-SETUP',
                'Recomanacions',
                new ActivityContent(
                    'Recomanacions',
                    "Ara que ja hem accedit al panell d'administració del nostre WordPress podem realitzar algunes accions básiques abans de començar a personalitzar la web.",
                    [
                        new TextSection(
                            "Si pregunteu a qualsevol informàtic, us dirà que sempre heu de procurar d'actualitzar a l'última versió estable totes les aplicacions que instal·leu (fins i tot el vostre Sistema Operatiu). Partint d'això, no podeu permetre que el nostre gestor de continguts no estigui actualitzat.",
                            "Actualitzacions",
                        ),
                        new TextSection(
                            "Si accediu al panell d'administració del WordPress trobareu un menú lateral amb diverses opcions. Dins de la secció 'Inici' hi trobem l'opció 'Actualitzacions'. Si hi accedim, veurem la pàgina de gestió d'actualitzacions." +
                            "Al principi és molt probable que apareguin plugins i temes sense actualitzar. Si decidim que volem actualitzar-los, hem de seleccionar els components a actualitzar (des de la taula que es mostra) i prémer el botó amb el text 'Actualitzar plugins' (si volem actualitzar plugins) o 'Actualitzar temes' (si volem actualitzar els temes del lloc).",
                        ),
                    ],
                ),
            )
        ];
    }

    static get ADDITIONAL_Activities(): Activity[] {
        return [
            Activity.create(
                "intro",
                "Introducció",
                new ActivityContent(
                    "Introducció",
                    "En aquest mòdul coneixerem per sobre les utilitats que ens proporciona Dinahosting (a part de fer el hosting del nostre WordPress).",
                    [
                        new ListSection(
                            [
                                "Tenir un compte de Dinahosting."
                            ],
                            "Requisits",
                            true,
                        ),
                    ],
                ),
            ),
            Activity.create(
                "backup-0",
                "Còpies de seguretat",
                new ActivityContent(
                    "Introducció a les còpies de seguretat",
                    "Coneixerem que ens permet fer el servei de còpies de seguretat i per què és important fer-lo servir de tant en tant.",
                    [
                        new TextSection(
                            "Com el propi nom ens indica, aquest servei ens permet realitzar còpies de seguretat. Una còpia de seguretat, en poques paraules, guarda l'estat actual d'alguna cosa (en aquest cas, el nostre WordPress). Si en un futur volem que el WordPress torni a l'estat d'una còpia de seguretat, ho podrem fer fàcilment.",
                        ),
                        new TextSection(
                            "Sí. Realitzar còpies de seguretat de tant en tant és molt important. No nomès et protegeixen de companys i companyes amb males intencions, sinó que, en cas de que es produeixi un error fatal al teu WordPress, no perdreu tot el vostre progrès.",
                            "Realment necessitem fer còpies de seguretat?",
                        ),
                        new ListSection(
                            [
                                "La instal·lació d'un plugin falla i bloqueja la vostra web.",
                                "Heu configurat un plugin que fa que la vostra web no funcioni bé. Decidiu desinstal·lar-lo però segueix anant malament.",
                                "Algún graciòs ha accedit al vostre WordPress i ha esborrat tot el que ha trobat.",
                                "Heu fet canvis a la configuraciò i, de cop i volta, ja no podeu accedir-hi al WordPress.",
                            ],
                            "Casos on us va bé tenir una còpia de seguretat",
                        ),
                        new TextSection(
                            "Si heu anat fent còpies de seguretat de tant en tant i es produeix algún escenari desafortunat on necessiteu tornar a un estat anterior (per exemple, al WordPress d'ahir) les còpies de seguretat us permetran tornar-hi com si es tractès d'una màquina del temps.",
                        ),
                        new AlertSection(
                            new TextSection(
                                "No cal que feu una còpia cada 5 minuts. Podríeu realitzar-ne d'una semanalment o quan heu fet molts canvis.",
                            ),
                            "info",
                            "Recomanació",
                        ),
                        new AlertSection(
                            new TextSection(
                                "Encara que realitzeu còpies de seguretat, si accedeixen al vostre compte de Dinahosting us les poden esborrar. És important que les descarregueu a un USB, Google Drive, etc.",
                            ),
                            "warning",
                            "Avís",
                        )
                    ],
                ),
            ),
            Activity.create(
                "backup-0",
                "Còpia de seguretat: Dinahosting",
                new ActivityContent(
                    "Còpies de seguretat de Dinahosting",
                    "Aprendrem a restaurar còpies de seguretat realitzades per Dinahosting.",
                    [
                        new TextWithMediaSection(
                            new MultiTextSection(
                                [
                                    new TextSection(
                                        "Per sort Dinahosting realitza una còpia diaria automàticament de totes les dades que hi tenim als seus servidors (això inclou el WordPress).",
                                    ),
                                    new TextSection(
                                        "Si accedim a l'apartat de 'Backups' situat al menú lateral, accedirem al calendari de còpies de seguretat. En aquest calendari veurem pintats de color blau els dies on Dinahosting ha realitzat una còpia de seguretat. Si volem restaurar, per exmple, la carpeta 'www' (on se situa WordPress), hem de seleccionar el día d'on volem extraure la còpia de seguretat, la carpeta (des de l'apartat 'recursos a recuperar' situat a la dreta) i, finalment, premem sobre 'Restaurar'.",
                                    ),
                                    new TextSection(
                                        "Apareixerà un diàleg on hem d'introduïr la direcció de correu electrònic que fem servir per accedir a Dinahosting. Un cop fet això, el procès de restauració haurà començat.",
                                    ),
                                ],
                            ),
                            new ImageMediaSectionNoUrl(
                                require('../../../resources/Backup/Backup_1.PNG'),
                            ),
                        ),
                        new TextSection(
                            "Sabem que la còpia de seguretat s'ha restaurat quan veiem el següent missatge.",
                        ),
                        new ImageMediaSectionNoUrl(
                            require('../../../resources/Backup/Backup_2.PNG'),
                        ),
                        new AlertSection(
                            new TextSection(
                                "Encara que aparegui el missatge de que s'ha restaurat la còpia correctament, fins que no rebeu un correu electrònic indicant que s'ha restablert una còpia de seguretat, el procès no haurà acabat. Això pot trigar una bona estona, tingueu paciència.",
                            ),
                            "info",
                            "Informació",
                        )
                    ],
                ),
            ),
            Activity.create(
                "backup-wp-0",
                "Còpia de seguretat: WordPress",
                new ActivityContent(
                    "Còpies de seguretat de WordPress",
                    "Aprendrem a realitzar còpies de seguretat mitjançant el panell d'administració de WordPress (no és el panell de Dinahosting).",
                    [
                        new TextWithMediaSection(
                            new MultiTextSection(
                                [
                                    new TextSection(
                                        "Hem après a restaurar còpies mitjançant el gestor de còpies de Dinahosting. Tot i això, WordPress en sí et permet realitzar i restaurar còpies de seguretat mitjançant un plugin molt conegut.",
                                    ),
                                    new TextSection(
                                        "Sense entrar massa en detall sobre els plugins de WordPress aprendrem a instal·lar el plugin de còpies de seguretat 'BackWPup' (el que apareix a la imatge).",
                                        "Instal·lar el plugin de backups",
                                    ),
                                    new TextSection(
                                        "Accedim a WordPress mitjançant la URL d'inici de sessió 'https://domini.cat/wp-admin' (exemple per a lolin-cafe.cat: 'https://lolin-cafe.cat/wp-admin'). Un cop hem iniciat sessió, ens dirigim a l'apartat 'Plugins' situat al menú laterat esquerra. Localitzem el botó 'Añadir nuevo' (situat a la dreta del títol de la pàgina) i el premem. " +
                                        "A continuació apareixerà una pàgina amb diversos plugins. Introduïm al cercador de plugins el nom del plugin 'BackWPup - WordPress Backup Plugin'. Un cop trobem el plugin, premem sobre 'Instal·lar ara'. Esperem a que el plugin s'acabi d'instal·lar.",
                                    ),
                                    new TextSection(
                                        "Veurem que, un cop instal·lat, apareix un botó que diu 'Activar'. El premem per tal d'habil·litar el plugin. Al fer-ho se'ns obrirà una pàgina de presentació del plugin.",
                                    ),
                                ],
                            ),
                            new ImageMediaSectionNoUrl(
                                require('../../../resources/Backup/Backup_3.PNG'),
                            ),
                        ),
                        new TextSection(
                            "Aquest plugin ens permet configurar còpies de seguretat de moltes maneres. Per no embolicar la troca, nosaltres configurarem una còpia de seguretat que es guardarà en una carpeta del servidor.",
                            "Com configurar una còpia de seguretat",
                        ),
                        new TextWithMediaSection(
                            new MultiTextSection(
                                [
                                    new TextSection(
                                        "Accedim a l'apartat de 'BackWPup' situat al menú lateral esquerra. Després, accedim al subapartat 'Tasques' i premem sobre 'Afegir nova'.",
                                    ),
                                    new TextSection(
                                        "Haurem de configurar unes poques opcions (les no mecionades es queden amb el valor per defecte).",
                                    ),
                                    new ListSection(
                                        [
                                            "Nom de la tasca: escriurem el nom de la tasca. Recomano posar: 'Còpia de seguretat'",
                                            "Aquesta tasca és...: seleccionem totes les opcions a excepció de 'Comprobació de les taules de la base de dades' (exemple a la imatge)",
                                            "Destinació de la tasca: seleccionem l'opció 'Còpia de seguretat a carpeta'.",
                                            "Enviar registre a la direcció de correu electrònic: per defecte hauria d'apareixer el correu de qui va crear el WordPress. Si el correu que apareix no es vostre, escriviu-lo.",
                                        ],
                                    ),
                                    new TextSection(
                                        "Premem 'Guardar els canvis'.",
                                    ),
                                ],
                            ),
                            new ImageMediaSectionNoUrl(
                                require('../../../resources/Backup/Backup_4.PNG'),
                            ),
                        ),
                        new TextSection(
                            "Si hi accedim de nou a l'apartat 'Tasques', veurem que apareix la nostra tasca.",
                        ),
                        new ImageMediaSectionNoUrl(
                            require('../../../resources/Backup/Backup_5.PNG'),
                        ),
                        new TextSection(
                            "Hem configurat la còpia de seguretat, però no l'hem executada encara. Per fer-ho, situem el cursor sobre la tasca i premem sobre 'Executar ara'. Això iniciarà el procès de còpia de seguretat. " +
                            "Un cop la còpia finalitzi, la podrem veure desde l'apartat 'Còpies de seguretat'. Us recomano que us les descarregueu. Ho podeu fer prement sobre 'Descarregar'.",
                        ),
                        new AlertSection(
                            new TextSection(
                                "Cada còpia de seguretat contè una còpia de tots els fitxers que composen el vostre WordPress. Si voleu restablir una còpia de seguretat, heu de copiar el contingut del fitxer al directori de WordPress. Com que és un procès delicat, si no us aclareu podeu consultar als companys d'ASIX.",
                            ),
                            "info",
                            "Informació"
                        )
                    ],
                ),
            ),
            Activity.create(
                "bbdd",
                "Bases de dades",
                new ActivityContent(
                    "Bases de dades",
                    "Coneixerem el servei de Bases de Dades que ofereix Dinahosting.",
                    [
                        new TextSection(
                            "Al panell d'administració de Dinahosting trobem una secció anomenada 'Bases de dades'. Si hi accedim, veurem les dades relatives a les bases de dades que tenim creades.",
                        ),
                        new TextSection(
                            "WordPress necessita una base de dades per funcionar, per això trobem que hi ha una base de dades creada. És molt important no toquetejar aquesta base de dades ja que podem provocar un error fatal.",
                        ),
                        new TextSection(
                            "Si algú per algún motiu algú necessita crear una base de dades, ho pot fer des d'aquesta pàgina. Personalment, no crec que us faci falta.",
                        ),
                    ],
                ),
            ),
            Activity.create(
                "email",
                "Correus personalitzats",
                new ActivityContent(
                    "Correus personalitzats",
                    "Dinahosting us ofereix un servidor de correu electrònic que podeu fer servir. Aquest servei us permet crear comptes de correu amb el vostre domini (exemple: per al domini lolin-cafe.cat, puc crear-me un compte 'joelcampos@lolin-cafe.cat').",
                    [
                        new TextWithMediaSection(
                            new MultiTextSection(
                                [
                                    new TextSection(
                                        "Ens dirigim a l'apartat 'Correu' situat al menú lateral del panell d'administració de Dinahosting. Un cop dins, veurem una secció on podem crear el nostre correu electrònic personalitzat. Escollim el nom del correu i la seva contrasenya. Finalment premem sovre 'Crear compte'.",
                                    ),
                                    new TextSection(
                                        "Ara que ja tenim el compte creat, provarem d'iniciar sessió. Per fer-ho ens hem de dirigir a 'https://mail.<el_teu_domini>.cat/correoweb' (exemple de lolin-cafe.cat: 'https://mail.lolin-cafe.cat/correoweb'). No es hem d'espantar si el navegador ens avisa que el certificat no s'ha reconegut, premem sobre continuar/accedir igualment.",
                                    ),
                                    new TextSection(
                                        "Apareixerà un requadre on podrem introduïr les nostres dades d'inici de sessió. Un cop haguem accedit, veurem una interfície molt similar a la dels serveis de correus populars (com Gmail, Outlook, etc). Podem enviar correus i veure'n els que ens han enviat.",
                                    ),
                                ],
                            ),
                            new ImageMediaSectionNoUrl(
                                require('../../../resources/Email/Email_1.PNG'),
                            ),
                        ),
                    ],
                ),
            ),
            Activity.create(
                "logs",
                "Registres d'activitat",
                new ActivityContent(
                    "Registres d'activitat (Logs)",
                    "Coneixerem on se situen els logs (registre d'activitats) per tal de que pogueu fer registres d'auditoria si és necessari (esperem que no).",
                    [
                        new TextWithMediaSection(
                            new MultiTextSection(
                                [
                                    new TextSection(
                                        "El registre d'auditoria de Dinahosting emmagatzema les accions que s'han realitzat al hosting (no enregistra les accions de dins del WordPress). Això ens permet veure qui ha fet que, quan i des d'on. És una eina molt útil en cas de sospitar que algú ha obtingut accès al nostre compte, ja que podem veure totes les accions acompanyades de la direcció IP d'origen.",
                                    ),
                                    new TextSection(
                                        "Podem veure el registre del nostre hosting si ens dirigim a 'Panell d'accès' i accedim al subapartat 'Logs' (des del panell d'administració de Dinahosting).",
                                    ),
                                    new TextSection(
                                        "Un cop haguem accedit, veurem una taula com la de la imatge (amb les nostres accions enregistrades).",
                                    ),
                                ]
                            ),
                            new ImageMediaSectionNoUrl(
                                require('../../../resources/Logs/Logs_1.PNG'),
                            ),
                        ),
                    ],
                ),
            ),
        ];
    }

    static get WIDGETS_Activities(): Activity[] {
        return [
            Activity.create(
                "intro-0",
                "Introducció",
                new ActivityContent(
                    "Introducció",
                    "En aquest mòdul aprendrem que són els Widgets i com podem fer-ne us d'alguns.",
                    [
                        new ListSection(
                            [
                                "Un WordPress instal·lat."
                            ],
                            "Requisits",
                            true,
                        ),
                    ],
                ),
            ),
            Activity.create(
                "widgets-intro",
                "Les bases",
                new ActivityContent(
                    "Les bases dels Widgets",
                    "Coneixerem què són els Widgets i alguns casos d'ús (més endavant veurem on es troben per tal que pogueu fer-los servir).",
                    [
                        new TextWithMediaSection(
                            new MultiTextSection(
                                [
                                    new TextSection(
                                        "Els Widgets ens permeten inserir elements específics a la nostra web sense necessitat de saber HTML o CSS. WordPress ens permet treballar amb ells de manera molt visual i ens ofereix un repertori ampli (sempre es pot ampliar amb plugins). Tot això aprendrem a fer-ho en aquest mòdul.",
                                    ),
                                    new ListSection(
                                        [
                                            "Paràgraf: et permet escriure text pla.",
                                            "Llista: us permet fer llistes (com aquesta).",
                                            "Imatge: mostra una imatge (tant mitjançant un enllaç o si la pujeu vosaltres).",
                                            "Arxiu: mostra un fitxer i permet la seva descàrrega.",
                                            "Video: permet mostrar un video.",
                                            "Separador: mostra una linea horitzontal que ajuda a separar visualment els elements de la web.",
                                            "Icones socials: mostra les clàssiques icones que permeten compartir la web via diverses xarxes socials.",
                                            "YouTube: mostra un video de YouTube (has d'indicar la seva URL)."
                                        ],
                                        "Widgets que us poden interessar",
                                    ),
                                    new TextSection(
                                        "Hi han molts més Widgets, però aquests són els que considero que us poden fer més falta."
                                    ),
                                ],
                            ),
                            new ImageMediaSectionNoUrl(
                                require('../../../resources/Widgets/Widgets_1.PNG')
                            ),
                        ),
                    ],
                ),
            ),
            Activity.create(
                "widgets-edit-1",
                "Implementar un widget",
                new ActivityContent(
                    "Implementar el nostre primer widget",
                    "Aprendrem a implementar el nostre primer widget mitjançant l'editor per defecte de WordPress.",
                    [
                        new MultiTextSection(
                            [
                                new TextSection(
                                    "Accedim al nostre panell d'administració de WordPress (\"https://<<nom-de-domini>>.cat/wp-admin\")",
                                ),
                                new TextSection(
                                    "Si volem afegir un widget a una pàgina, hem de dirigir-nos a \"Pàgines\" (situat al menú lateral). Veurem una llista amb les pàgines que tenim al WordPress, hem de premer sobre el nom de la pàgina desitjada.",
                                    "Com podem afegir un widget a una pàgina?",
                                ),
                                new TextWithMediaSection(
                                    new MultiTextSection(
                                        [
                                            new TextSection(
                                                "Un cop dins l'editor de la pàgina, veurem un botó amb un més (+) situat a la part superior esquerra. Si premem aquest botó veurem una llista amb un munt de Widgets que podem fer servir. " +
                                                "Aquests widgets els podem arrosegar a la pàgina per tal d'inserir-los. Un cop hem arrosegat d'un apareixen una sèrie de camps que podem emplenar per tal de configurar el widget. Es demanen dades molt bàsiques, si per exemple estem inserint un paràgraf se'ns demanarà el text que volem mostrar, o si és un video ens demanarà l'origen del video (un enllaç o un fitxer)",
                                            ),
                                            new TextSection(
                                                "Per exemple, a la imatge veiem el camp que es demana si inserim el widget de \"YouTube\".",
                                            ),
                                        ],
                                    ),
                                    new ImageMediaSectionNoUrl(
                                        require('../../../resources/Widgets/Widgets_2.PNG'),
                                    ),
                                ),
                                new TextSection(
                                    "Realment el funcionament dels widgets no té massa misteri. Heu de saber que es poden inserir, eliminar i moure. Aquestes dues últimes accions les podeu fer situant el cursor sobre un widget (veureu que apareixen tres punts, si feu clic trobareu diverses opcions).",
                                ),
                            ],
                        ),
                    ],
                ),
            ),
            Activity.create(
                "ecomerce",
                "Widgets de pagament",
                new ActivityContent(
                    "Implementant widgets de pagament",
                    "Aprendrem a inserir widgets que permetin fer compres (no tocarem comptes bancaris ni re sper l'estil).",
                    [],
                ),
            ),
        ];
    }
}