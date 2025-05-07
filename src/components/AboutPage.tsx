import { useEffect, useRef, useState } from "react"
import HeaderDrop from "./HeaderDrop"
import { useNavigate } from "react-router"
import Footer from "./footer"
import gsap from "gsap"
import UpAndDown from "./upNDown"
import Language from "../assets/language.json"

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
    const [choosen, setChoosen] = useState<string>('FR')

    useEffect(()=> {
        var lang = localStorage.getItem('lang')
        if (!lang)
            localStorage.setItem('lang', 'FR')
        lang = localStorage.getItem('lang')!
        setChoosen(lang)

        gsap.fromTo(".FImage", {"y": "100%"}, {"y": "0%", duration: 1})
        gsap.fromTo(".headText2", {"y": "-100%", "opacity": 1}, {"y": "0%", "opacity": 1, duration: 1})
        gsap.fromTo(".ContentText", {"opacity": 0}, {"opacity": 1, duration: 1})
    }, [])

    return (
        <div className="ourTalents">
            <div id="hidden" className="TitleJob autoSlideL">
                <h1>{(Language as any)[choosen][76]}</h1>
            </div>
            <div className="CardsS">
                <div id="hidden" className="WorkerCard autoscrollI">
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
    const [choosen, setChoosen] = useState<string>('FR')

    const navigate = useNavigate()

    useEffect(()=> {
        var lang = localStorage.getItem('lang')
        if (!lang)
            localStorage.setItem('lang', 'FR')
        lang = localStorage.getItem('lang')!
        setChoosen(lang)

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
                        <h3>{(Language as any)[choosen][4]}</h3>
                    </div>
                    <div id="secondPic" className="LFounderS">
                        <div className="FImage"></div>
                    </div>
                    <div className="ContentText">
                        <div className="WordFirstP">
                            <p>{(Language as any)[choosen][5]}</p>
                            <p>{(Language as any)[choosen][6]}</p>
                            <p>{(Language as any)[choosen][7]}</p>
                        </div>
                        <div className="WordSecondP">
                            <p>{(Language as any)[choosen][8]}</p>
                            <p>{(Language as any)[choosen][9]}</p>
                            <div className="headText3">
                                <div className="bioInfo">
                                    <p>Abdessamad Jamal Wafi</p>
                                    <p>{(Language as any)[choosen][10]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ValuesSection">
                <div className="VHeadText">
                    <h1>{(Language as any)[choosen][11]} <span>{(Language as any)[choosen][12]}</span></h1>
                    <p>{(Language as any)[choosen][13]}</p>
                </div>
                <div className="VContentText">
                    <div id="hidden" className="VCPartOne autoSlideL">
                        <OurValues Title={(Language as any)[choosen][14]} Text={(Language as any)[choosen][15]} color={"#71c8dc"} reversed={true}/>
                        <OurValues Title={(Language as any)[choosen][16]} Text={(Language as any)[choosen][17]} color={"#000000"} reversed={true}/>    
                    </div>
                    <div id="hidden" className="VCPartTwo autoShow">
                        <img src="/images/nosvaleurs.jpg" alt="" />
                    </div>
                    <div id="hidden" className="VCPartTree autoSlideR">
                        <OurValues Title={(Language as any)[choosen][18]} Text={(Language as any)[choosen][19]} color={"#000000"} reversed={false}/>
                        <OurValues Title={(Language as any)[choosen][20]} Text={(Language as any)[choosen][21]} color={"#71c8dc"} reversed={false}/>
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
                    <h2>{(Language as any)[choosen][22]}</h2>
                    <span></span>
                    <p>{(Language as any)[choosen][23]}<p>{(Language as any)[choosen][24]}</p></p>
                </div>
            </div>
            <div className="TalentsSection">
                <div className="VHeadText">
                    <h1>{(Language as any)[choosen][25]} <span>{(Language as any)[choosen][26]}</span></h1>
                    <p>{(Language as any)[choosen][27]}</p>
                    <p>{(Language as any)[choosen][28]}</p>
                </div>
                <OurTalentsDirection />
                <OutTalentsDir/>
                <OurTalentsWorkers fontSize="10%" pole={(Language as any)[choosen][77]} images={["/pictures/ISMAIL EL FILALI.jpg", "/pictures/SOUFIANE EL BOURI.jpg", "/pictures/AHMEDWAHBI.jpg", "/pictures/YOUSSEF SOUGRATI.jpg"]} names={["Ismail", "Soufiane", "Ahmed", "Youssef"]} spans={["El Filali", "El Bouri", "Wahbi", "Sougrati"]} />
                <OurTalentsWorkers fontSize="10%" pole={(Language as any)[choosen][78]} images={["/pictures/RACHID BOULLOUZE.jpg", "/pictures/KAMAL ETTALIBI.jpg", "/pictures/AMLAL SALAH.jpg", "/pictures/ADIL TIZLA.jpg", "/pictures/EZ-DDINE ELHAFIANE.jpg", "/pictures/RABII KRIKCH.jpg", "/pictures/SALAH BENKAHLA.jpg", "/pictures/RACHID ESSEBTI.jpg"]} names={["Rachid", "Kamal", "Salah", "Adil", "Ez-ddine", "Rabii", "Salah", "Rachid"]} spans={["Boullouze", "Ettalibi", "Amlal", "Tizla", "Elhafiane", "Krikch", "Benkahla", "Essbti"]} />
                <OurTalentsWorkers fontSize="10%" pole={(Language as any)[choosen][79]} images={["/pictures/RACHID JANANE.jpg", "/pictures/SAID MOZONE.jpg"]} names={["Rachid", "Said"]} spans={["Janane", "Mozone"]} />
                <OurTalentsWorkers fontSize="10%" pole={(Language as any)[choosen][80]} images={["/pictures/TARIK EZWAOUKI.jpg", "/pictures/ABDELLAH EL MOURABITE.jpg", "/pictures/OMAR EZRIOULI.jpg", "/pictures/JAMAL NOUR.jpg", "/pictures/LOUBNA AIT BOUIH.jpg", "/pictures/ABDELJALIL AMAL.jpg", "/pictures/MOHAMED MARDAK.jpg"]} names={["Tarik", "Abdellah", "Omar", "Jamal", "Loubna", "Abdeljalil", "Mohamed"]} spans={["Ezwaouki", "El Mourabite", "Ezriouli", "Nour", "Ait Bouih", "Amal", "Mardak"]}/>
            </div>
            <Footer/>
        </div>
    )
}