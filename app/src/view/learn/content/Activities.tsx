import Activity from "./Activity";
import { ActivityContent } from "./ActivityContent";
import AlertSection from "./ActivityContent/AlertSection";
import DownloadSection from "./ActivityContent/DownloadSection";
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
                            new ImageMediaSection(
                                "https://media.istockphoto.com/photos/file-transfer-picture-id172476913",
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