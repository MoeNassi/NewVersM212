import { useEffect, useRef } from "react"
import HeaderDrop from "./HeaderDrop"
import { useNavigate } from "react-router"
import Footer from "./footer"
import gsap from "gsap"
import UpAndDown from "./upNDown"

interface PropsValues {
    Title:string
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
        <div id="hidden" className="WorkerCard autoSlideR">
            <div className="employeePicSLV">
                <img src={image} alt="" />
            </div>
            <div className="userInfosSLV">
                <h1>{name} <span style={{"color": color}}>{span}</span></h1>
                {
                    title ?
                    <p>{title}</p>:''
                }
            </div>
        </div>
    )
}

function OutTalentsDir() {
    return (
        <div className="Workers">
            <div className="CardsS">
                <SlaveCard name="Souad" span="Achouay" color="#71c8dc" title="Chargée de Mission" image="/pictures/SOUAD ACHOUAY.jpg"/>
                <SlaveCard name="Lamiaa" span="Mouhssine" color="#71c8dc" title="Directrice du Développement" image="/images/worker1.jpg"/>
                <div id="hidden" className="WorkerCard autoSlideR">
                    <div className="employeePicSLV">
                        <img src={"/pictures/SOUFIANE EZWAOUKI.jpg"} alt="" />
                    </div>
                    <div className="userInfosSLV">
                        <h1>Soufiane <span>Ezwaouki</span></h1>
                        <p>Directeur Technique</p>
                        <i id="italic">Bureau d'étude et Régie technique des lieux</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

function OurTalentsDirection() {
    return (
        <div className="ourTalents">
            <div id="hidden" className="TitleJob autoSlideL">
                <h1>Pôle de Direction</h1>
            </div>
            <div className="CardsS">
                <div className="WorkerCard">
                    <div className="employeePicSLV">
                        <img src="/pictures/ABDESSAMAD JAMAL WAFI.jpg" alt="" />
                    </div>
                    <div className="userInfosSLV">
                        <h1>Abdessamad <span>Jamal Wafi</span></h1>
                        <p>Fondateur Directeur Général</p>
                    </div>
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
    fontSize:string
}

function OurTalentsWorkers({pole, names, spans, images, fontSize}: TalentsWorkProps) {
    return (
        <div className="Workers">
            <div id="hidden" className="TitleJob autoSlideL">
                <span style={{"width": fontSize}}></span>
                <h1>{pole}</h1>
                <span style={{"width": fontSize}}></span>
            </div>
            <div className="CardsS">
                {
                    names?.map((name, index) => (
                        <SlaveCard key={index} name={name} span={spans[index]} color="#71c8dc" image={images[index]} title=""/>
                    ))

                }
            </div>
        </div>
    )
}

function OurValues({Title, Text, color, reversed}: PropsValues) {
    return (
        <>
        {
            !reversed ?
                <div className="ourValues">
                    <div className="HeadVPart">
                        <div style={{"background": color}} className="logoValue"></div>
                        <h2>{Title}</h2>
                    </div>
                    <p>{Text}</p>
                </div>:
                <div className="ourValues">
                    <div style={{"flexDirection": "row-reverse"}} className="HeadVPart">
                        <div style={{"background": color}} className="logoValue"></div>
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
        // const element = document.querySelectorAll('.dropdown')!
        // element[0].classList.add('force-style')
        // console.log('->', element[0])

        gsap.fromTo(".FImage", {"y": "100%"}, {"y": "0%", duration: 1})
        gsap.fromTo(".headText2", {"y": "-100%", "opacity": 1}, {"y": "0%", "opacity": 1, duration: 1})
        gsap.fromTo(".ContentText", {"opacity": 0}, {"opacity": 1, duration: 1})
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

    const handleScroll = () => {
        const elements = document.querySelectorAll('#hidden')
        elements.forEach(element => {
            const element_hei = element.getBoundingClientRect().top
            if (element_hei < window.innerHeight - 100) {
                element.classList.remove('autoscroll')
                element.classList.remove('changeRadius')
                element.classList.remove('autoscrollI')
                element.classList.remove('autoSlideR')
                element.classList.remove('autoSlideL')
                element.classList.remove('autoShow')
            }
        })
    }

    window.onscroll = handleScroll

    return (
        <div className="AboutContainer">
            <UpAndDown />
            <div ref={dropRight} className="CustomAfter">
                <HeaderDrop classname="customBar" DropClass="dropdownHidden" dropRight={dropRight} actualBar=".firstBar"/>
            </div>
            <div className="header">
                <img onClick={()=> navigate('/')} id="m212logo" src="/logo.svg" alt="" />
                <HeaderDrop classname="TopBar" DropClass="dropdown-content" dropRight={dropRight} actualBar=".firstBar" />
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
                    </div>
                    <div className="ContentText">
                        <div className="WordFirstP">
                            <p>Depuis sa création, l’agence M212 s’est imposée comme un acteur de référence en apportant une expertise technique et organisationnelle de classe mondiale. M212 se positionne désormais comme une agence qui regroupe des experts aux compétences techniques pluridisciplinaires et qui comptent à leur actif plus d’une vingtaine d’années d’expérience.</p>
                            <p>Les grands événements institutionnels à la fois nationaux comme internationaux portent la signature de l’équipe d’experts de M212. En effet, cette équipe a accompagné avec succès la majorité des événements d’envergure organisés au Maroc comme à l’international grâce à un haut niveau de qualité et d’exigences aux standards internationaux.</p>
                            <p>La création de M212 incarne l’aboutissement collectif de notre histoire professionnelle qui se distingue par un haut niveau d’expertise et de maitrise des métiers de l’événementiel :</p>
                        </div>
                        <div className="WordSecondP">
                            <p>M212 est une agence globale de prestations techniques, scéniques et audiovisuelles disposant d’un savoir-faire de haut niveau et des ressources humaines qualifiées, des moyens technologiques de pointe et du matériel de dernière génération permettant d’offrir à nos clients des solutions techniques innovantes pluridisciplinaires clé-en-main.</p>
                            <p>Notre objectif ultime est de permettre à nos audiences de vivre une expérience inédite. Au sein de M212, nous sommes convaincus que les clients n'oublieront jamais ce qu’on leur a fait ressentir… créer un lien émotionnel mémorable, telle est notre ambition qui nous anime à la naissance de chaque nouveau projet !</p>
                            <div className="headText3">
                                <div className="bioInfo">
                                    <p>Abdessamad Jamal Wafi</p>
                                    <p>Fondateur Directeur Général</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ValuesSection">
                <div className="VHeadText">
                    <h1>Nos <span>Valeurs</span></h1>
                    <p>Nos valeurs sont ancrées dans notre culture d’entreprise et plus concrètement nous guident dans l’accomplissement de notre mission dans un objectif bien précis celui de renforcer en continu la performance globale de notre organisation. Expertise, Innovation, Engagement et Excellence sont ainsi les 4 valeurs qui donnent du sens à l’exercice de nos fonctions au quotidien.</p>
                </div>
                <div className="VContentText">
                    <div id="hidden" className="VCPartOne autoSlideL">
                        <OurValues Title="Expertise" Text="C'est ce qui définit même votre trajectoire professionnelle au sein de M212. L'expertise de nos équipes a été prouvée durant des décennies." color={"#71c8dc"} reversed={true}/>
                        <OurValues Title="Engagement" Text="L'engagement envers nos clients est total et relève d'une vraie quête de sens, car il représente pour l'ensemble des collaborateurs de M212 un véritable levier de performance." color={"#000000"} reversed={true}/>    
                    </div>
                    <div id="hidden" className="VCPartTwo autoShow">
                        <img src="/images/nosvaleurs.jpg" alt="" />
                    </div>
                    <div id="hidden" className="VCPartTree autoSlideR">
                        <OurValues Title="Innovation" Text="La nécessité de rester créatif, de répondre aux exigences techniques & technologiques et à la pointe de procédés et de concepts événementiels, nous impose d’être innovants. Nous sommes très investis auprès de nos partenaires business pour pouvoir leur offrir des solutions novatrices et compétitives." color={"#000000"} reversed={false}/>
                        <OurValues Title="Excellence" Text="C'est tout simplement notre façon de faire. Chaque prestation réalisée pour nos clients doit être exécutée selon la méthode M212, une méthode qui vise l'excellence à toute épreuve et qui ne laisse aucune place à l'à-peu-près." color={"#71c8dc"} reversed={false}/>
                    </div>
                </div>
            </div>
            <div className="MissionsSection">
                <div id="hidden" className="Ourpictures autoShow">
                    <div className="couplePictures">
                        <img src="/images/nosmissions1.png" alt="" />
                        <img src="/images/nosmissions2.png" alt="" />
                        <img src="/images/nosmissions3.jpeg" alt="" />
                        <img src="/images/nosmissions4.png" alt="" />
                    </div>
                </div>
                <div id="hidden" className="OurMissions autoSlideR">
                    <h2>Nos Missions</h2>
                    <span></span>
                    <p>L’agence M212 a pour mission de fournir à ses clients une offre globale de présentations techniques, scéniques et audiovisuelles de classe mondiale qu’ils soient des professionnels du secteur de l’événementiel ou des particuliers du secteur public ou privé. <p>M212 se positionne comme le partenaire de référence pour organiser ou co-organiser des événements fascinants, aux standards internationaux laissant une forte empreinte émotionnelle auprès des différents publics cibles.</p></p>
                </div>
            </div>
            <div className="TalentsSection">
                <div className="VHeadText">
                    <h1>Nos <span>Talents</span></h1>
                    <p>Le développement humain est au cœur de notre stratégie de développement. En effet, si M212 dispose de RH qualifiées et expertes c’est grâce à l’investissement dans le savoir-faire, à la connaissance du marché local, régional et international, à la compréhension des enjeux et des défis de nos clients qu’ils soient nationaux ou internationaux.</p>
                    <p>Nous sommes conscients que notre capital humain est notre réel avantage compétitif au-delà de l’acquisition de tout matériel ou de technologie, la différence réside dans la qualité des Femmes et des Hommes qui pilotent ces moyens.</p>
                </div>
                <OurTalentsDirection />
                <OutTalentsDir/>
                <OurTalentsWorkers fontSize="10%" pole={"Département Image et Ingénierie"} images={["/pictures/ISMAIL EL FILALI.jpg", "/pictures/SOUFIANE EL BOURI.jpg", "/pictures/AHMEDWAHBI.jpg", "/pictures/YOUSSEF SOUGRATI.jpg"]} names={["Ismail", "Soufiane", "Ahmed", "Youssef"]} spans={["El Filali", "El Bouri", "Wahbi", "Sougrati"]} />
                <OurTalentsWorkers fontSize="10%" pole={"Département Son et Eclairage"} images={["/pictures/RACHID BOULLOUZE.jpg", "/pictures/KAMAL ETTALIBI.jpg", "/pictures/AMLAL SALAH.jpg", "/pictures/ADIL TIZLA.jpg", "/pictures/EZ-DDINE ELHAFIANE.jpg", "/pictures/RABII KRIKCH.jpg", "/pictures/SALAH BENKAHLA.jpg", "/pictures/RACHID ESSEBTI.jpg"]} names={["Rachid", "Kamal", "Salah", "Adil", "Ez-ddine", "Rabii", "Salah", "Rachid"]} spans={["Boullouze", "Ettalibi", "Amlal", "Tizla", "Elhafiane", "Krikch", "Benkahla", "Essbti"]} />
                <OurTalentsWorkers fontSize="10%" pole={"Département Structure, Accastillage et Plateau scènique"} images={["/pictures/RACHID JANANE.jpg", "/pictures/SAID MOZONE.jpg"]} names={["Rachid", "Said"]} spans={["Janane", "Mozone"]} />
                <OurTalentsWorkers fontSize="10%" pole={"Département Support & Logistque"} images={["/pictures/MOHAMED ABOULAZIZ.jpg", "/pictures/TARIK EZWAOUKI.jpg", "/pictures/ABDELLAH EL MOURABITE.jpg", "/pictures/OMAR EZRIOULI.jpg", "/pictures/JAMAL NOUR.jpg", "/pictures/LOUBNA AIT BOUIH.jpg", "/pictures/ABDELJALIL AMAL.jpg", "/pictures/MOHAMED MARDAK.jpg"]} names={["Mohamed", "Tarik", "Abdellah", "Omar", "Jamal", "Loubna", "Abdeljalil", "Mohamed"]} spans={["Aboulaziz", "Ezwaouki", "El Mourabite", "Ezriouli", "Nour", "Ait Bouih", "Amal", "Mardak"]}/>
            </div>
            <Footer/>
        </div>
    )
}