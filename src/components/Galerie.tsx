import { useNavigate } from "react-router"
import HeaderDrop from "./HeaderDrop"
import { useEffect, useRef, useState } from "react"
import EventsData from "../assets/data.json"
import Footer from "./footer"
import gsap from "gsap"
import UpAndDown from "./upNDown"

interface Props {
    description: string
    logo: string
    number: string
    width: string
    fontSize: string
    maxWidth: string
}

function Options({description, logo, number, width, fontSize, maxWidth}: Props) {
    return (
        <div id="hidden" className="HomeOptions autoShow">
            <img id="number" src={number} alt="" />
            <div style={{"width": width}} className="rightPartH">
                <img id="logoHome" src={logo} alt="" />
                <p style={{"fontSize": fontSize, "maxWidth": maxWidth}} id="descript">{description}</p>
            </div>
        </div>
    )
}

interface PopUpProps {
    id:number
    name:string
    place:string
    date:string
    Prestation:string
    realisation:string
    images:string[]
    format:string
    setPop:any
}

function PopUpGalerie({id, name, place, date, Prestation, realisation, images, setPop, format}:PopUpProps) {
    const [array, setArray] = useState<any>([
        {"id": "", "name": "", "place": "", "date": "", "Prestation": "", "realisation": "", "images": []}
    ])

    const handleClick = () => {
        var index = array.id + 1
        if (index == 15) //change it to 15
            index = 0
        setArray({id: EventsData[index].id,
            name: EventsData[index].name,
            place: EventsData[index].Place,
            date: EventsData[index].date,
            Prestation: EventsData[index].Prestations,
            realisation: EventsData[index].Realisation,
            format: EventsData[index].format,
            images: EventsData[index].images})
    }

    useEffect(() => {
        gsap.fromTo(".BackPop", {y: "-100%"}, {y: "0%", duration: .5})
        gsap.fromTo(".PopUpContainer", {x: "-200%"}, {x: "0%", duration: 1, delay: .5})
        setArray({
            id: id,
            name: name,
            place: place,
            date: date,
            Prestation: Prestation,
            realisation: realisation,
            images: images,
            format: format
        });
    }, []);

    return (
        <div className="PopUpContainer">
            <div className="evenTImage">
                {        
                    array.images?.map((image: any, index: any) => (
                        <img key={index} src={image} alt="" />
                    ))
                }
            </div>
            <div className="eventPopInfo">
                <div className="closeParent">
                    <div onClick={()=> setPop(false)} className="close-btnP">x</div>
                </div>
                <div className="infosPopE">
                    <h1>{array.name}</h1>
                    <div className="duo">
                        <h3>Lieu de l'événement:</h3>
                        <p>{array.place}</p>
                    </div>
                    <div className="duo">
                        <h3>Format:</h3>
                        <p>{array.format}</p>
                    </div>
                    <div className="duo">
                        <h3>Prestations fournies</h3>
                        <h4>Toutes techniques</h4>
                        <p>{array.Prestation}</p>
                    </div>
                    <h2 id="spaceIn">{array.realisation}</h2>
                </div>
                <div className="NextPage">
                    <div onClick={handleClick} className="nextPParent">
                        <p>évènement suivant</p>
                        <img src="/right.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

interface EventsProps {
    id:number
    setter:any
    image:string
    name:string
    setId:any
}

function EventsComp({id, setter, image, name, setId}:EventsProps) {
    const handleClick = () => {
        setId(id)
        console.log(id)
        setter(true)
    }

    return (
        <div onClick={handleClick} className="EventContent">
            <img src={image} alt="" />
            <div className="infoText">
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default function RefContainer() {
    const [Pop, setPop] = useState<boolean>(false)
    const [ID, setID] = useState<number>(0)

    const dropRight = useRef<HTMLDivElement>(null)

    const navigate = useNavigate()

    const handleScroll = () => {
        const elements = document.querySelectorAll('#hidden')
        elements.forEach(element => {
            const element_hei = element.getBoundingClientRect().top
            if (element_hei < window.innerHeight) {
                element.classList.remove('autoscroll')
                element.classList.remove('changeRadius')
                element.classList.remove('autoscrollI')
                element.classList.remove('autoShow')
            }
        })
    }

    window.onscroll = handleScroll

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
        <div className="RefContainer">
            <UpAndDown />
            <div ref={dropRight} className="CustomAfter">
                <HeaderDrop classname="customBar" DropClass="dropdownHidden" dropRight={dropRight} actualBar=".thirdBar" />
            </div>
            <div className="header">
                <img onClick={()=> navigate('/')} id="m212logo" src="/logo.svg" alt="" />
                <HeaderDrop classname="TopBar" DropClass="dropdown-content" dropRight={dropRight} actualBar=".thirdBar" />
                <div id="list" onClick={BurgerMenu} className="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {
                Pop ? 
                <div className="BackPop">
                    <PopUpGalerie setPop={setPop} format={EventsData[ID].format} id={ID} name={EventsData[ID].name} date={EventsData[ID].date} images={EventsData[ID].images} Prestation={EventsData[ID].Prestations} realisation={EventsData[ID].Realisation} place={EventsData[ID].Place} />
                </div>:''
            }
            <div className="EventsContainer">
                {
                    EventsData.map((object: any, index: any) => {
                        return <EventsComp setter={setPop} setId={setID} key={index} id={object.id} image={object.images[0]} name={object.name} />
                    })
                }
            </div>
            <div className="container">
                <div className="SecPart">
                    <div id="hidden" className="headText autoShow">
                        <span></span>
                        <h3>L'agence M212</h3>
                        <span></span>
                    </div>
                    <h1 id="hidden" className="autoShow">the AV & events company</h1>
                </div>
                <div className="ChoosingM212">
                    <h3 id="hidden" className="autoShow">Pourquoi choisir M212 ?</h3>
                    <div className="whyChoosing">
                        <div className="indexOne">
                            <Options fontSize="16px" maxWidth="93%" width="70%" logo="/firstLogo.svg" number="/numbers/iconNumber1.svg" description="Une offre globale de prestations techniques, scéniques et audiovisiuelles et au besoin, M212 a la capacité de prendre en charge toutes les prestations évènementielles tout en mettant à votre disposition un interlocuteur unique qui vous est dédié le long du projet."/>
                            <Options fontSize="22px" maxWidth="93%" width="65%" logo="/SecLogo.svg" number="/numbers/iconNumber2.svg" description="Une approche projet qui allie art et rigueur: l'esprit creatif et innovant qui s'allie aux indicateurs de performance pour mesurer l'atteinte des objectifs."/>
                        </div>
                        <div className="indexTwo">
                            <Options fontSize="22px" maxWidth="93%" width="60%" logo="/f.svg" number="/numbers/iconNumber3.svg" description="Réactivité, reporting et respect des délais, un engagement sans faille."/>
                            <Options fontSize="22px" maxWidth="95%" width="60%" logo="/FourthLogo.svg" number="/numbers/iconNumber4.svg" description="Une equipe d'experts qui partagent des valeurs d'Expertise, d'Innovation, d'Engagement et d'Excellence pour la réussite des grands projets qui leur sont confiés."/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}