import { useNavigate } from "react-router";
import Footer from "./footer";
import { useEffect, useRef } from "react";
import HeaderDrop from "./HeaderDrop";
import gsap from "gsap";
import UpAndDown from "./upNDown";

interface DomainsProps {
    image:string
    title:string
    span:string
}

function OurDomainsA({image, title, span}:DomainsProps) {
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
                    <p><span>Scéne et accroches</span> tel un écrin pour abriter votre événement en garantissant une parfaite maîtrise des installations techniques.</p>
                    <p><span>Energie</span> pour une alimentation électrique fiable et sécurisée vitale à la réalisation du projet.</p>
                </div>
            </div>
        </div>
    )
}

function OurDomainsI({image, title, span}:DomainsProps) {
    useEffect(() => {
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
                    <h3>Streaming et Plateforme Zoom:</h3>
                    <p>Retransmission en direct qui permet de connecter des publics du monde entier, ou selon le public cible afin de suivre votre événement à distance et en live.</p>
                    <p><span>Vidéo</span> ou l'art de sublimer par l'image et enrichir l'expérience immersive visuelle de l'audiance.</p>
                </div>
            </div>
        </div>
    )
}

function OurDomainsC({image, title, span}:DomainsProps) {
    useEffect(() => {
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
                    <h3>Bureau d’étude :</h3>
                    <p>Proposition de solutions techniques sur mesure pour transformer votre projet en un concept créatif mémorable de la conception à la réalisation de votre événement.</p>
                    <h3>Régie technique des lieux :</h3>
                    <p>prise en charge de tous les aspects techniques des lieux : repérage, maquette 3D, conseil en faisabilité technique, en organisation, en valorisation et en agencement des lieux, etc.</p>
                    <p>afin de sublimer votre événement.</p>
                </div>
            </div>
        </div>
    )
}

function OurDomainsS({image, title, span}:DomainsProps) {
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
                    <p><span>Son</span> pour que l'expérience immersive de l‘audience soit totale portée par une qualité de son unique.</p>
                    <h3>Traduction Simultanée</h3>
                    <p>Matériel de traduction simultanée de pointe garantissant une communication fluide et sans faille pour un impact maximal.</p>
                    <p><span>Eclairage</span> pour des conceptions scéniques et donner au spectacle toute sa splendeur.</p>
                </div>
            </div>
        </div>
    )
}

export default function DomainesPage() {
    const dropRight = useRef<HTMLDivElement>(null)

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
            <OurDomainsC image={"/images/consulting.jpg"} title={"Consulting"} span=" : Études & Conseils"/>
            <OurDomainsI image={"/images/image.jpeg"} title="Image" span=" & Ingénierie" />
            <OurDomainsS image={"/images/son.png"} title={"Son"} span=" & Eclairage" />
            <OurDomainsA image={"/images/structure.jpeg"} title={"Structure, Accastillage"} span=" & Plateau Scénique" />
            <Footer/>
        </div>
    )
}