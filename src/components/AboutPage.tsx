import { useEffect, useRef } from "react"
import HeaderDrop from "./HeaderDrop"
import { useNavigate } from "react-router"
import Footer from "./footer"

interface PropsValues {
    Title:string
    Icon:string
    Text:string
    reversed:boolean
    color:string
}

interface CardProps {
    image:string
    name:string
    span:string
    color:string
    title:string
}

function SlaveCard({image, name, span, color, title}:CardProps) {
    return (
        <div className="slvsCard">
            <div className="employeePicSLV">
                <img src={image} alt="" />
            </div>
            <div className="userInfosSLV">
                <h1>{name} <span style={{"color": color}}>{span}</span></h1>
                <p>{title}</p>
            </div>
        </div>
    )
}

function OurTalentsDirection() {
    return (
        <div className="ourTalents">
            <div className="founderCard">
                <div className="employeePic">
                    <img src="/images/founder.jpg" alt="" />
                </div>
                <div className="userInfos">
                    <h1>Abdessamad <span>Jamal Wafi</span></h1>
                    <p>foundateur Directeur Général</p>
                </div>
            </div>
            <div className="Workers">
                <div className="TitleJobDir">
                    <h1>Pôle de Direction</h1>
                    <span></span>
                </div>
                <div className="CardsS">
                    <SlaveCard name="Mouhssine" span="Lamiaa" color="#71c8dc" title="directrice du developpement" image=""/>
                    <SlaveCard name="Achway" span="Souad" color="black" title="chargée de Mission auprés de la DG" image=""/>
                </div>
            </div>
        </div>
    )
}

interface TalentsWorkProps {
    pole:string
    names:string[]
    spans:string[]
    images:string[]
    title:string
    fontSize:string
}

function OurTalentsWorkersLast({pole, names, spans, images, title, fontSize}: TalentsWorkProps) {
    return (
        <div className="Workers">
            <div className="TitleJob">
                <h1>{pole}</h1>
                <span style={{"width": fontSize}}></span>
            </div>
            <div style={{"width": "94%"}} className="CardsS">
                <SlaveCard name={names[0]} span={spans[0]} color="#71c8dc" title={title} image={images[0]}/>
                <SlaveCard name={names[1]} span={spans[1]} color="black" title={title} image={images[1]}/>
                <SlaveCard name={names[2]} span={spans[2]} color="#71c8dc" title={title} image={images[2]}/>
                <SlaveCard name={names[3]} span={spans[3]} color="black" title={title} image={images[3]}/>
                <SlaveCard name={names[4]} span={spans[4]} color="#71c8dc" title={title} image={images[4]}/>
                <SlaveCard name={names[5]} span={spans[5]} color="black" title={title} image={images[5]}/>
            </div>
        </div>
    )
}

function OurTalentsWorkers({pole, names, spans, images, title, fontSize}: TalentsWorkProps) {
    return (
        <div className="Workers">
            <div className="TitleJob">
                <h1>{pole}</h1>
                <span style={{"width": fontSize}}></span>
            </div>
            <div className="CardsS">
                <SlaveCard name={names[0]} span={spans[0]} color="#71c8dc" title={title} image={images[0]}/>
                <SlaveCard name={names[1]} span={spans[1]} color="black" title={title} image={images[1]}/>
                <SlaveCard name={names[2]} span={spans[2]} color="#71c8dc" title={title} image={images[2]}/>
                <SlaveCard name={names[3]} span={spans[3]} color="black" title={title} image={images[3]}/>
            </div>
        </div>
    )
}

function OurValues({Title, Icon, Text, color, reversed}: PropsValues) {
    return (
        <>
        {
            !reversed ?
                <div className="ourValues">
                    <div className="HeadVPart">
                        <div style={{"background": color}} className="logoValue">
                            <img src={Icon} alt="" />
                        </div>
                        <h2>{Title}</h2>
                    </div>
                    <p>{Text}</p>
                </div>:
                <div className="ourValues">
                    <div style={{"flexDirection": "row-reverse"}} className="HeadVPart">
                        <div style={{"background": color}} className="logoValue">
                            <img src={Icon} alt="" />
                        </div>
                        <h2>{Title}</h2>
                    </div>
                    <p style={{"textAlign": "right"}}>{Text}</p>
                </div>
        }
        </>
    )
}

export default function AboutPage() {
    const dropRight = useRef<HTMLDivElement>(null)

    const navigate = useNavigate()

    useEffect(()=> {
        const element = document.getElementById('1')!
        element!.classList.add('selected')
        console.log(element)
    }, [])

    const BurgerMenu = () => {
        const AllSpans = document.querySelectorAll('span')
        if (dropRight.current?.classList.contains('open')) {
            dropRight.current?.classList.remove('open')
            AllSpans[0].classList.remove('firstOne')
            AllSpans[1].classList.remove('secondOne')
            AllSpans[2].classList.remove('thirdOne')
            AllSpans.forEach(span=> {
                span.classList.remove('backG')
            })
        }
        else {
            AllSpans[0].classList.add('firstOne')
            AllSpans[1].classList.add('secondOne')
            AllSpans[2].classList.add('thirdOne')
            AllSpans.forEach(span=> {
                span.classList.add('backG')
            })
            dropRight.current?.classList.add('open')
        }
    }

    return (
        <div className="AboutContainer">
            <div ref={dropRight} className="CustomAfter">
                <HeaderDrop classname="customBar" DropClass="dropdownHidden" dropRight={dropRight}/>
            </div>
            <div className="header">
                <img onClick={()=> navigate('/')} id="m212logo" src="/logo.svg" alt="" />
                <HeaderDrop classname="TopBar" DropClass="dropdown-content" dropRight={dropRight}/>
                <div id="list" onClick={BurgerMenu} className="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="FounderSection">
                <div className="LFounderS">
                    <div className="FImage"></div>
                </div>
                <div className="RFounderS">
                    <div className="headText2">
                        <h3>Mot du fondateur</h3>
                        <div className="bioInfo">
                            <p>Abdessamad Jamal Wafi</p>
                            <p>Fondateur Directeur Général</p>
                        </div>
                    </div>
                    <div className="ContentText">
                        <div className="WordFirstP">
                            <p>Les raisons qui ont motivé la création de M212 nous sont propres et résultent d’un cheminement très personnel de chacun des fondateurs. En effet, M212 est une agence qui regroupe une poignée d’experts aux compétences transversales et complémentaires qui comptent à leur actif plus d’une vingtaine d’années d’expérience et de travail ensemble au sein de la même équipe.</p>
                            <p>Les grands événements institutionnels à la fois nationaux comme internationaux portent la signature de l’équipe d’experts de M212. Cette équipe a accompagné la majorité des événements d’envergure nationale et internationale organisés au Maroc comme à l’international grâce à un haut niveau de qualité et d’exigence répondant aux standards internationaux.</p>
                            <p>Il était temps alors pour « nous » de créer notre propre structure et de faire profiter pleinement et en toute autonomie l’ensemble de nos clients qu’ils soient professionnels organisateurs des</p>
                        </div>
                        <div className="WordSecondP">
                            <p>grands événements, des acteurs du secteur public & privé ou des particuliers de notre savoir-faire, de notre expertise pluridisciplinaire et transversale permettant de vivre ou d’offrir aux clients une expérience événementielle inédite !</p>
                            <p>C’est ainsi, la création de M212 est l’aboutissement logique de notre histoire professionnelle commune. M212 est une agence globale de prestations techniques, scéniques et audiovisuelles disposant d’un savoir-faire de haut niveau et des ressources humaines qualifiées, des moyens technologiques de pointe et de matériel de dernière génération permettant la mise en place des solutions techniques opérationnelles multidisciplinaires clé-en-main.</p>
                            <p>L’objectif est de permettre à votre audience de vivre une expérience inédite et de créer un lien émotionnel mémorable car chez M212 nous sommes convaincus que les clients peuvent oublier certaines choses sauf ce qu’on leur a fait ressentir... C’est la seule forme durable de différenciation et de fidélisation.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ValuesSection">
                <div className="VHeadText">
                    <h1>Nos <span>Valeurs</span></h1>
                    <p>Nos valeurs sont ancrées dans l'accomplissement de notre mission et nous guident dans l'exercice de nos fonctions aupres de nos differents clients:</p>
                </div>
                <div className="VContentText">
                    <div className="VCPartOne">
                        <OurValues Title="Expertise" Icon="/icons/valeur4.svg" Text="C'est ce qui définit même votre trajectoire professionnelle au sein de M212. L'expertise de nos équipes a été prouvée durant des décennies" color={"#71c8dc"} reversed={true}/>
                        <OurValues Title="Engagement" Icon="/icons/valeur3.svg" Text="I'engagement envers nos clients est total et reléve d'une vraie quéte de sens car il représente pour l'ensemble des collaborateurs de M212 un véritable levier de performance. " color={"#000000"} reversed={true}/>    
                    </div>
                    <div className="VCPartTwo">
                        <img src="/images/nosvaleurs.jpg" alt="" />
                    </div>
                    <div className="VCPartTree">
                        <OurValues Title="Innovation" Icon="/icons/valeur3.svg" Text="la nécessité de rester créatif, de répondre aux exigences techniques & technologiques et & la pointe de procédés et de concepts événementiels, nous imposent d‘étre innovants. Nous sommes trés investis auprés de nos partenaires business pour pouvoir leur offrir des solutions novatrices et compétitives " color={"#000000"} reversed={false}/>
                        <OurValues Title="Excellence" Icon="/icons/valeur4.svg" Text="c'est tout simplement notre fagon de faire chaque prestation réalisée pour nos clients doit étre exécutée selon la méthode M212, une méthode qui vise excellence a toute épreuve et qui ne laisse aucune place a l4-peu-prés." color={"#71c8dc"} reversed={false}/>
                    </div>
                </div>
            </div>
            <div className="MissionsSection">
                <div className="Ourpictures">
                    <div className="couplePictures">
                        <img src="/images/nosmissions1.png" alt="" />
                        <img src="/images/nosmissions2.png" alt="" />
                        <img src="/images/nosmissions3.jpeg" alt="" />
                        <img src="/images/nosmissions4.png" alt="" />
                    </div>
                </div>
                <div className="OurMissions">
                    <h2>Nos Missions</h2>
                    <span></span>
                    <p>L'agence M212 a pour mission de fournir a ses clients une offre globale de presentations techniques, sceniques et audiovisuelles de classe mondiale qu'ils soient des prefessionnels du secteur de l'evenementiel ou des particuliers du secteur public ou prive. M212 se positionne comme le partenaire de reference pour organiser ou coorganiser des evenements fascinants, aux standars internationaux laissant une forte empreinte emotionnelle aupres des differents publics cibles.</p>
                </div>
            </div>
            <div className="TalentsSection">
                <OurTalentsDirection />
                <OurTalentsWorkers fontSize="30%" pole={"Département Image"} images={["", "", "", ""]} names={["Filali", "El Bouri", "Ahmed", "Youssef"]} spans={["Ismail", "Soufiane", "Wahbi", "Sougrati"]} title={"Technicien Dep.Video"}/>
                <OurTalentsWorkers fontSize="10%" pole={"Département Technique & Logistque"} images={["", "", "", ""]} names={["Mouzoune", "Ezwaouki", "Nour", "Ait Bouih"]} spans={["Said", "Soufiane", "Jamal", "Taoufik"]} title={"Responsable Stock"} />
                <OurTalentsWorkersLast fontSize="10%" pole={"Département Son & Lumiére"} images={["", "", "", ""]} names={["Benelkahla", "Ezwaouki", "Krikch", "Elhafiane", "Amlal", "Ettalibi"]} spans={["Salah", "Tariq", "Rabii", "Ez-ddine", "Marssel", "Kamal"]} title="Technician Lumiére"/>
            </div>
            <Footer/>
        </div>
    )
}