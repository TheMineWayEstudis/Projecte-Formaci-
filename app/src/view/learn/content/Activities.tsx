import Activity from "./Activity";
import { ActivityContent } from "./ActivityContent";
import ListSection from "./ActivityContent/ListSection";
import ImageMediaSection from "./ActivityContent/Media/ImageMediaSection";
import TextSection from "./ActivityContent/TextSection";
import TextWithMediaSection from "./ActivityContent/TextWithMediaSection";

export default class Activities {
    static get F1_Activities(): Activity[] {
        return [
            Activity.create(
                'install-0',
                'Instal·lació de WordPress',
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
            Activity.create(
                'FTP-0',
                'Servei FTP',
                new ActivityContent(
                    'Primeres passes amb el servei FTP',
                    'El servei FTP (File Transfer Protocol) permet realitzar transferencies de fitxers. En aquest cas ens pot servir per realitzar pujades al nostre servidor.',
                    [
                        new TextSection(
                            '...',
                        ),
                    ],
                ),
            ),
            Activity.create(
                'components-0',
                'Components de  WordPress',
                new ActivityContent(
                    '...',
                    '...',
                    [
                        new TextSection(
                            '...',
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
                                "Tenir un compte a Dinahosting"
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
                        new TextWithMediaSection(
                            new TextSection(
                                "Accedim al nostre compte de Dinahosting. Un cop haguem iniciat sessió, hauriem d'apareixer a la web 'https://panel.dinahosting.com'.\n" +
                                "Localitzem el menú de navegació superior i accedim a 'Hosting'.\n"+
                                "Un cop hem accedit a hosting, veiem una serie de serveis disponibles per al seu us (correu, FTP, Bases de dades, dominis, apps autoinstal·lables, etc). Per ara nomès farem cas de la secció d'apps autoinstal·lables que ens permetrà instal·lar WordPress sense massa complicacions.",
                            ),
                            new ImageMediaSection(
                                '',
                            ),
                            16,
                        ),
                    ],
                ),
            ),
        ];
    }
}