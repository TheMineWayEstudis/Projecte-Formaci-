import Activity from "./Activity";
import { ActivityContent } from "./ActivityContent";
import AlertSection from "./ActivityContent/AlertSection";
import ListSection from "./ActivityContent/ListSection";
import ImageMediaSection from "./ActivityContent/Media/ImageMediaSection";
import ImageMediaSectionNoUrl from "./ActivityContent/Media/ImageMediaSectionNoUrl";
import MultiTextSection from "./ActivityContent/MultiTextSection";
import TextSection from "./ActivityContent/TextSection";
import TextWithMediaSection from "./ActivityContent/TextWithMediaSection";

export default class Activities {
    static get F1_Activities(): Activity[] {
        return [
            Activity.create(
                'ftp-0',
                "Ús d'FTP",
                new ActivityContent(
                    'Instal·lació del gestor de continguts',
                    'En aquest mòdul aprendrem a instal·lar el gestor de continguts partint de zero.',
                    [
                        new TextWithMediaSection(
                            new TextSection(
                                'Prim',
                            ),
                            new ImageMediaSection(
                                '',
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
                                "Tenir un compte a Dinahosting",
                                "Disposar d'un domini (en teoria tothom disposa d'un automàticament)"
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
                            "Localitzem el menú de navegació superior i accedim a 'Hosting'.\n"+
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
}
