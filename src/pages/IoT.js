import { useTranslation } from "react-i18next";
import NavBar from "../components/NavBar";
import IoTImage from '../images/IoT.jpg';
import { Button } from "../components/Button";
import ParticlesComponent from "../components/Particles";

const IoT = ({user, checked, setChecked}) => {
    const {t} = useTranslation();
    return (
        <div>
            
            <NavBar user={user} checked={checked} setChecked={setChecked}/>
            <ParticlesComponent/>
            <div className="main-container">
                <div className="course-container">
                    <div className='course-image'><img  src={IoTImage} alt="IoT"/></div>
                    <div className='course-topic'>
                        <h2>{t('Course')}:</h2>
                        <p>{t('Smart Home & IoT')}</p>
                    </div>
                    <div className='course-duration'>
                        <h2>{t('Duration')}:</h2>
                        <p>64 {t('Hours')} {t('in')} 4 {t('Months')} </p>
                    </div>
                    <div className='course-level'>
                        <h2>{t('Level')} :</h2>
                        <p>{t('Intermediate')} </p>
                    </div>
                    <div className='course-price'>
                        <h2>{t('Price')} :</h2>
                        <p>600 DH/{t('Month')} </p>
                    </div>

                    <div className="course-cible">
                        <h2>{t('Cible : ')}</h2>
                        <p>
                            <p>{t('Cette formation s\'adresse à plusieurs profils:')}</p>
                            <ul>
                                <li><p>{t('Étudiants ou professionnels n\'ayant aucune connaisance préalable en électronique et informatique, cherchant à acquérir des compétences en robotique')}</p></li>
                                <li><p>{t('Personnes passionnées par la création et la conception des robots')}</p></li>
                            </ul>
                        </p>

                    </div>
                    <div className="course-objectif">
                        <h2>{t('Objectif :')}</h2>
                        <p>{t('L\'objectif de cette formation est de fournir aux apprenants des connaissances approfondies en électronique et informatique à travers des cours théoriques, des travaux pratiques et des projets concrets.À la fin de la formation, les participants seront capables de:')}</p>
                        <ul>
                            <li><p>{t('Comprendre les principes fondamentaux de l\'électronique et l\'informatique appliquée à la robotique')}</p></li>
                            <li><p>{t('Utiliser des microcontrôleur, des capteurs et des actionneurs pour concevoir des systèmes robotique simples et complexes')}</p></li>
                            <li><p>{t('Programmer et côntroler des robots en utilisant le languages de programmation adaptés Arduino')}</p></li>
                        </ul>

                    </div>
                    <div className="course-video">
                        <iframe  src="https://www.youtube.com/embed/GW3CMm8oK1k?si=FqTM7dnNJRmg9_a6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <h2 className="course-description-description">{t('Programme')} :</h2>
                    <div className="course-description">
                        <h3>{t('1ér Mois')}</h3>
                        <ol>
                           <h4>{t('Partie 1 : Les bases de l\'électronique')}</h4>
                            <li>
                                <ol><h5>{t('Courant')}</h5>
                                    <li><p>{t('La charge et le courant')}</p></li>
                                    <li><p>{t('Source de courant')}</p></li>
                                    <li><p>{t('La mesure de courant avec multimètre')}</p></li>
                                </ol>
                            </li>
                            <li>
                                <ol><h5>{t('Voltage')}</h5>
                                    <li><p>{t('Le potentiel')}</p></li>
                                    <li><p>{t('La différence de potentiel')}</p></li>
                                    <li><p>{t('Association de batteries en série et parallèle')}</p></li>
                                    <li><p>{t('La mesure de tension avec multimètre')}</p></li>
                                </ol>
                            </li>
                            <li>
                                <ol><h5>{t('Interrupteur')}</h5>
                                    <li><p>{t('Bouton poussoir')}</p></li>
                                    <li><p>{t('Switch')}</p></li>
                                </ol>        
                            </li>
                            <li>
                                <ol><h5>{t('Résistance')}</h5>
                                    <li><p>{t('Loi d\'Ohm')}</p></li>
                                    <li><p>{t('Lire une résistance')}</p></li>
                                    <li><p>{t('Mesurer une résistance')}</p></li>
                                    <li><p>{t('Association des résistances en série et en paralléle')}</p></li>
                                    <li><p>{t('Résistance variables')}</p></li>    
                                </ol>        
                            </li>
                            <li><h5>{t('Diviseur de tension et de courant')}</h5></li>
                            <li><h5>{t('Loi de kirchhoff')}</h5></li>
                            <li><h5>{t('Théorème de superposition')}</h5></li>
                            <li><h5>{t('Théorème de Thevenin et Norton')}</h5></li>
                            <li><h5>{t('Théorème de Millman')}</h5></li>
                            <li>
                                <ol><h5>{t('Circuit AC')}</h5>
                                    <li><p>{t('Source altérnative')}</p></li>
                                    <li><p>{t('Fréquence et période')}</p></li>
                                    <li><p>{t('Phase')}</p></li>
                                </ol>  
                            </li>
                            <li>
                                <ol><h5>{t('Condensateur')}</h5>
                                    <li><p>{t('C\'est quoi le condensateur')}</p></li>
                                    <li><p>{t('Lire la valeur du condensateur')}</p></li>
                                    <li><p>{t('Mesurer la valeur de condensateur')}</p></li>
                                    <li><p>{t('Association des condensateurs en série et en parallèle')}</p></li>
                                    <li><p>{t('Montage RC')}</p></li>
                                </ol>  
                            </li>

                            <li>
                                <ol><h5>{t('Bobine')}</h5>
                                    <li><p>{t('Champ magnétique')}</p></li>
                                    <li><p>{t('Association des bobine en série et en parralèle')}</p></li>
                                    <li><p>{t('Montage RL')}</p></li>
                                </ol>  
                            </li>

                            <li>
                                <ol><h5>{t('Diodes')}</h5>
                                    <li><p>{t('Semiconducteur')}</p></li>
                                    <li><p>{t('Jonction PN')}</p></li>
                                    <li><p>{t('Diode de redressement')}</p></li>
                                    <li><p>{t('Diode électroluminescente')}</p></li>
                                    <li><p>{t('Photodiode')}</p></li>
                                    <li><p>{t('Diode Zener')}</p></li>
                                    <li><p>{t('Diode Tunnel')}</p></li>
                                    <li><p>{t('Diode Schottky')}</p></li>
                                </ol>  
                            </li>



                            <li>
                                <ol><h5>{t('Transistors')}</h5>
                                    <li><p>{t('Transistor Bipolaire PNP et NPN')}</p></li>
                                    <li><p>{t('Transistor JFET')}</p></li>
                                    <li><p>{t('Transistor MOSFET')}</p></li>
                                    <li><p>{t('Transistor IGBT')}</p></li>
                                    <li><p>{t('Transistor Unijonction')}</p></li>
                                </ol>  
                            </li>


                            <li><h5>{t('Thyristor')}</h5></li>
                           
                           
                            <li>
                                <ol><h5>{t('Amplificateurs')}</h5>
                                    <li><p>{t('Additionneur et Soustracteur')}</p></li>
                                    <li><p>{t('Intégrateur et Dérivateur')}</p></li>
                                    <li><p>{t('Oscillateur de Wien')}</p></li>
                                    <li><p>{t('Comparateur')}</p></li>
                                    <li><p>{t('Trigger de Schmitt')}</p></li>
                                </ol>  
                            </li>


                            <li>
                                <ol><h5>{t('Filtres')}</h5>
                                    <li><p>{t('Filtre passe bas')}</p></li>
                                    <li><p>{t('Filtre passe haut')}</p></li>
                                    <li><p>{t('Filtre passe bande')}</p></li>
                                    <li><p>{t('Filtre coupe bande')}</p></li>
                                    <li><p>{t('Filtre de Butterworth')}</p></li>
                                </ol>  
                            </li>

                            <li><h5>{t('Régulateur de tension')}</h5></li>

                            <li>
                                <ol><h5>{t('Optoélectroniques')}</h5>
                                    <li><p>{t('Photon')}</p></li>
                                    <li><p>{t('Lampe')}</p></li>
                                    <li><p>{t('LED')}</p></li>
                                    <li><p>{t('Photorésistance')}</p></li>
                                </ol>  
                            </li>


                            <li>
                                <ol><h5>{t('Capteurs')}</h5>
                                    <li><p>{t('Capteur de Température et Humidité')}</p></li>
                                    <li><p>{t('Capteur de Mouvement')}</p></li>
                                    <li><p>{t('Capteur de Pression et Force')}</p></li>
                                    <li><p>{t('Capteur de Gaz et de Fumée')}</p></li>
                                </ol>  
                            </li>

                            <li><h5>{t('Relai')}</h5></li>

                            <li><h5>{t('Transformateur')}</h5></li>
                        

                            <li>
                                <ol><h5>{t('Convertisseur Statique')}</h5>
                                    <li><p>{t('Redresseur')}</p></li>
                                    <li><p>{t('Hacheur')}</p></li>
                                    <li><p>{t('Onduleur')}</p></li>
                                    <li><p>{t('Gradateur')}</p></li>
                                </ol>  
                            </li>


                            <li>
                                <ol><h5>{t('Moteurs')}</h5>
                                    <li><p>{t('Loi de Faraday et Laplace')}</p></li>
                                    <li><p>{t('DC Moteur')}</p></li>
                                    <li><p>{t('Servo Moteur')}</p></li>
                                    <li><p>{t('Moteur pas à pas')}</p></li>
                                    <li><p>{t('Moteur Brushless')}</p></li>
                                </ol>  
                            </li>

                            
                            
                            <li>
                                <ol><h5>{t('Microcontrôleur')}</h5>
                                    <li><p>{t('C\'est quoi un microcontrôleur')}</p></li>
                                    <li><p>{t('Architecture du microcontrôleur ATMEGA328P')}</p></li>
                                </ol>  
                            </li>

                        </ol>

                        <ol>
                            <h4>{t('Partie 2 : Les bases de l\'informatique')}</h4>
                            <li><h5>{t('Algèbre de Bool')}</h5></li>
                            <li><h5>{t('Code machine')}</h5></li>
                            <li><h5>{t('Algorithme')}</h5></li>
                            <li><h5>{t('Compilateur et Interpréteur')}</h5></li>
                            
                            <li>
                                <ol><h5>{t('Stocker et manipuler des données')}</h5>
                                    <li><p>{t('Variable et constant')}</p></li>
                                    <li><p>{t('Type de donnée')}</p></li>
                                    <li><p>{t('Opérateur arithmétique')}</p></li>
                                    <li><p>{t('Commentaires')}</p></li>
                                </ol>
                            </li>

                            <li>
                                <ol><h5>{t('Mettre en place des conditions')}</h5>
                                    <li><p>{t('Notion de condition')}</p></li>
                                    <li><p>{t('Ajouter des altérnatives')}</p></li>
                                    <li><p>{t('Créer des conditions composées')}</p></li>
                                </ol>
                            </li>

                            <li>
                                <ol><h5>{t('Répéter des actions')}</h5>
                                    <li><p>{t('Notion de Boucle')}</p></li>
                                    <li><p>{t('Boucle while')}</p></li>
                                    <li><p>{t('Boucle for')}</p></li>
                                    <li><p>{t('Choisir entre une Boucle while et for')}</p></li>
                                </ol>
                            </li>

                            <li><h5>{t('La Structure de contôle switch ... case')}</h5></li>


                            <li>
                                <ol><h5>{t('Réutiliser le code à l\'aide d\'une fonction')}</h5>
                                    <li><p>{t('Comprendre les fonctions')}</p></li>
                                    <li><p>{t('Créer des fonctions')}</p></li>
                                    <li><p>{t('Mettre en place des arguments ou paramètres')}</p></li>
                                    <li><p>{t('Retourner les valeurs d\'une fonction')}</p></li>
                                </ol>
                            </li>

                            <li>
                                <ol><h5>{t('Manipuler les tableaux et les pointeurs')}</h5>
                                    <li><p>{t('Découvrir les tableaux')}</p></li>
                                    <li><p>{t('Parcourir des tableaux')}</p></li>
                                    <li><p>{t('Découvrir les pointeurs')}</p></li>
                                </ol>
                            </li>

                            <li>
                                <ol><h5>{t('Programmation orientée objet')}</h5>
                                    <li><p>{t('Comprendre la notion d\'objet')}</p></li>
                                    <li><p>{t('Utiliser des propriétés et des méthodes d\'un objet')}</p></li>
                                    <li><p>{t('Comprendre les notions de classe et d\'objet')}</p></li>
                                </ol>
                            </li>

                        
                        
                        </ol>


                        <h3>{t('2ème et 3ème Mois')}</h3>

                        <ol>
                            <h4>{t('Partie 3 : Réalisation des projets avec la carte Arduino')}</h4>
                            <li><p>{t('Boutton poussoir + LED')}</p></li>
                            <li><p>{t('Clignotter une LED')}</p></li>
                            <li><p>{t('Jeux de carrefour')}</p></li>

                            <li><p>{t('Boutton poussoir + 3 LEDs')}</p></li>
                            <li><p>{t('Potentiomètre + LED')}</p></li>
                            <li><p>{t('Level Lamp')}</p></li>

                            <li><p>{t('Potentiomètre + Piezo')}</p></li>
                            <li><p>{t('Photorésistance + Piezo')}</p></li>
                            <li><p>{t('Piano')}</p></li>

                            <li><p>{t('3 Photorésistances + LED RGB')}</p></li>
                            <li><p>{t('Capteur de gaz + piezo')}</p></li>
                            <li><p>{t('Capteur de température + 3 LED')}</p></li>
                            <li><p>{t('LCD')}</p></li>
                            <li><p>{t('Weather station sensors')}</p></li>

                            <li><p>{t('2 Bouttons + Servo moteur')}</p></li>
                            <li><p>{t('Potentiomètre + Servo Moteur')}</p></li>
                            <li><p>{t('MOSFET + Moteur')}</p></li>
                            <li><p>{t('L293D + Moteur')}</p></li>
                            <li><p>{t('Suiveur de ligne')}</p></li>
                            <li><p>{t('Motor Wheel')}</p></li>

                            <li><p>{t('Moteur pas à pas')}</p></li>
                            <li><p>{t('IR Senor')}</p></li>
                            <li><p>{t('Ultrasonic Sensor')}</p></li>
                            <li><p>{t('Parking')}</p></li>
                        </ol>

                        <h3>{t('4ème Mois')}</h3>
                        <ol>
                            <h4>{t('Partie 4 : Réalisation des Projets Indivudiels')}</h4>
                            <li><p>{t('Robot Suiveur de ligne')}</p></li>
                            <li><p>{t('Robot Explorateur')}</p></li>
                            <li><p>{t('Robot Commandé par télécommande')}</p></li>
                            <li><p>{t('Bras Robotique')}</p></li>
                            <li><p>{t('Parking Intélligent')}</p></li>
                            <li><p>{t('Maison Intélligente')}</p></li>


                        </ol>
                    </div>

                    <div className="course-knowledge">

                    </div>

                    <div className="course-button">
                        <Button $BackgroundColor="#84dba8" $HoverColor="#6a886f" $Border="2px solid #428b52">{t('Subscribe to this course')}</Button>
                    </div>
                    
                </div>  
            </div>
        </div>
    );
}
 
 
export default IoT;