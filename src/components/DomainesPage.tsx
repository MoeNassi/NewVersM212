import { useNavigate } from "react-router";
import Footer from "./footer";
import { useEffect, useRef, useState } from "react";
import HeaderDrop from "./HeaderDrop";
import gsap from "gsap";
import UpAndDown from "./upNDown";
import Language from "../assets/language.json"

interface DomainsProps {
    image:string
    title:string
    span:string
}

function OurDomainsA({image, title, span}:DomainsProps) {
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
        <div id="hidden" style={{"flexDirection": "row-reverse"}} className="DomaineCard4 autoSlideR">
            <div style={{"justifyContent": "flex-end"}} className="domainesImage">
                <img src={image} alt="" />
            </div>
            <div className="domainesInfo">
                <div className="headDText">
                    <h1 style={{"textAlign": "right"}}>{title}<span>{span}</span></h1>
                    <div style={{"inset": "80%"}}></div>
                </div>
                <div style={{"alignItems": "flex-end", "textAlign": "right"}}  className="domaineText">
                    <p><span>{(Language as any)[choosen][57]}</span>{(Language as any)[choosen][58]}</p>
                    <p><span>{(Language as any)[choosen][59]}</span>{(Language as any)[choosen][60]}</p>
                </div>
            </div>
        </div>
    )
}

function OurDomainsI({image, title, span}:DomainsProps) {
    const [choosen, setChoosen] = useState<string>('FR')

    useEffect(() => {
        var lang = localStorage.getItem('lang')
        if (!lang)
            localStorage.setItem('lang', 'FR')
        lang = localStorage.getItem('lang')!
        setChoosen(lang)

        gsap.fromTo(".domainesInfo", {"x": "-100%"}, {"x": 0, duration: 1})
        gsap.fromTo(".domainesImage", {"x": "100%"}, {"x": 0, duration: 1})
    }, [])

    return (
        <div style={{"flexDirection": "row-reverse"}} className="DomaineCard2">
            <div style={{"justifyContent": "flex-end"}} className="domainesImage">
                <img src={image} alt="" />
            </div>
            <div className="domainesInfo">
                <div className="headDText">
                    <h1 style={{"textAlign": "right"}}>{title}<span>{span}</span></h1>
                    <div style={{"inset": "80%"}}></div>
                </div>
                <div style={{"alignItems": "flex-end", "textAlign": "right"}}  className="domaineText">
                    <h3>{(Language as any)[choosen][43]}</h3>
                    <p>{(Language as any)[choosen][44]}</p>
                    <p><span>{(Language as any)[choosen][45]}</span>{(Language as any)[choosen][46]}</p>
                </div>
            </div>
        </div>
    )
}

function OurDomainsC({image, title, span}:DomainsProps) {
    const [choosen, setChoosen] = useState<string>('FR')
    
    useEffect(() => {
        var lang = localStorage.getItem('lang')
        if (!lang)
            localStorage.setItem('lang', 'FR')
        lang = localStorage.getItem('lang')!
        setChoosen(lang)
    
        gsap.fromTo(".domainesInfo", {"x": "100%"}, {"x": 0, duration: 1})
        gsap.fromTo(".domainesImage", {"x": "-100%"}, {"x": 0, duration: 1})
    }, [])

    return (
        <div className="DomaineCard1">
            <div className="domainesImage">
                <img src={image} alt="" />
            </div>
            <div className="domainesInfo">
                <div className="headDText">
                    <h1>{title}<span>{span}</span></h1>
                    <div></div>
                </div>
                <div className="domaineText">
                    <h3>{(Language as any)[choosen][36]}</h3>
                    <p>{(Language as any)[choosen][37]}</p>
                    <h3>{(Language as any)[choosen][38]}</h3>
                    <p>{(Language as any)[choosen][39]}</p>
                    <p>{(Language as any)[choosen][40]}</p>
                </div>
            </div>
        </div>
    )
}

function OurDomainsS({image, title, span}:DomainsProps) {
    const [choosen, setChoosen] = useState<string>('FR')

    useEffect(() => {
        var lang = localStorage.getItem('lang')
        if (!lang)
            localStorage.setItem('lang', 'FR')
        lang = localStorage.getItem('lang')!
        setChoosen(lang)
    }, [])

    return (
        <div id="hidden" className="DomaineCard3 autoSlideL">
            <div className="domainesImage">
                <img src={image} alt="" />
            </div>
            <div className="domainesInfo">
                <div className="headDText">
                    <h1>{title}<span>{span}</span></h1>
                    <div></div>
                </div>
                <div className="domaineText">
                    <p><span>{(Language as any)[choosen][49]}</span>{(Language as any)[choosen][50]}</p>
                    <h3>{(Language as any)[choosen][51]}</h3>
                    <p>{(Language as any)[choosen][52]}</p>
                    <p><span>{(Language as any)[choosen][53]}</span>{(Language as any)[choosen][54]}</p>
                </div>
            </div>
        </div>
    )
}

export default function DomainesPage() {
    const dropRight = useRef<HTMLDivElement>(null)
    const [choosen, setChoosen] = useState<string>('FR')

    const navigate = useNavigate()

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

    useEffect(()=> {
        var lang = localStorage.getItem('lang')
        if (!lang)
            localStorage.setItem('lang', 'FR')
        lang = localStorage.getItem('lang')!
        setChoosen(lang)
    }, [])

    const handleScroll = () => {
        const elements = document.querySelectorAll('#hidden')
        elements.forEach(element => {
            const element_hei = element.getBoundingClientRect().top
            if (element_hei < window.innerHeight - 100) {
                element.classList.remove('autoscroll')
                element.classList.remove('changeRadius')
                element.classList.remove('autoSlideR')
                element.classList.remove('autoSlideL')
                element.classList.remove('autoShow')
            }
        })
    }

    window.onscroll = handleScroll

    return (
        <div className="DomaineContainer">
            <UpAndDown />
            <div ref={dropRight} className="CustomAfter">
                <HeaderDrop classname="customBar" DropClass="dropdownHidden" dropRight={dropRight} actualBar=".secBar"/>
            </div>
            <div className="header">
                <img onClick={()=> navigate('/')} id="m212logo" src="/logo.svg" alt="" />
                <HeaderDrop classname="TopBar" DropClass="dropdown-content" dropRight={dropRight} actualBar=".secBar"/>
                <div id="list" onClick={BurgerMenu} className="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <OurDomainsC image={"/images/consulting.jpg"} title={(Language as any)[choosen][34]} span={(Language as any)[choosen][35]}/>
            <OurDomainsI image={"/images/image.jpeg"} title={(Language as any)[choosen][41]} span={(Language as any)[choosen][42]} />
            <OurDomainsS image={"/images/son.png"} title={(Language as any)[choosen][47]} span={(Language as any)[choosen][48]} />
            <OurDomainsA image={"/images/structure.jpeg"} title={(Language as any)[choosen][55]} span={(Language as any)[choosen][56]} />
            <Footer/>
        </div>
    )
}