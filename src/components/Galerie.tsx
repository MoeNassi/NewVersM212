import { useNavigate } from "react-router"
import HeaderDrop from "./HeaderDrop"
import { useEffect, useRef, useState } from "react"
import EventsData from "../assets/data.json"
import Footer from "./footer"
import UpAndDown from "./upNDown"
import Language from "../assets/language.json"

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

interface EventsProps {
    id:number
    image:string
    name:string
}

function EventsComp({id, image, name}:EventsProps) {
    const navigate = useNavigate()    

    const handleClick = () => {
        navigate(`/realisations/list?id=${id}`)
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
    const [choosen, setChoosen] = useState<string>('FR')
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

    useEffect(()=> {
        var lang = localStorage.getItem('lang')
        if (!lang)
            localStorage.setItem('lang', 'FR')
        lang = localStorage.getItem('lang')!
        setChoosen(lang)
    }, [])

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
            <div className="EventsContainer">
                {
                    (EventsData as any)[choosen].map((object: any, index: any) => {
                        return <EventsComp key={index} id={object.id} image={object.images[0]} name={object.name} />
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
                    <h3 id="hidden" className="autoShow">{(Language as any)[choosen][29]}</h3>
                    <div className="whyChoosing">
                        <div className="indexOne">
                            <Options fontSize="16px" maxWidth="93%" width="70%" logo="/FourthLogo.svg" number="/numbers/iconNumber1.svg" description={(Language as any)[choosen][30]}/>
                            <Options fontSize="22px" maxWidth="93%" width="65%" logo="/SecLogo.svg" number="/numbers/iconNumber2.svg" description={(Language as any)[choosen][31]}/>
                        </div>
                        <div className="indexTwo">
                            <Options fontSize="22px" maxWidth="93%" width="60%" logo="/f.svg" number="/numbers/iconNumber3.svg" description={(Language as any)[choosen][32]}/>
                            <Options fontSize="16px" maxWidth="95%" width="60%" logo="/firstLogo.svg" number="/numbers/iconNumber4.svg" description={(Language as any)[choosen][33]}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}