import gsap from "gsap"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router"
import HeaderDrop from "./HeaderDrop"

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

export default function HomePage() {
    const video = useRef<HTMLVideoElement>(null)
    const videoBtn = useRef<HTMLDivElement>(null)
    const dropRight = useRef<HTMLDivElement>(null)

    const navigate = useNavigate()

    useEffect(() => {
        gsap.fromTo('.header', {y: '-150%'}, {y: 0, duration: 1, delay: 1.5})
        setTimeout(()=> {
            video.current?.pause()
            video.current!.muted = false
            videoBtn.current!.style.opacity = "1"
        }, 2000)
    }, [])

    const handleVideo = () => {
        if (video.current?.paused) {
            video.current!.play()
            videoBtn.current!.style.opacity = "0"
        }
        else {
            video.current?.pause()
            videoBtn.current!.style.opacity = "1"
        }
    }

    const handleScroll = () => {
        const elements = document.querySelectorAll('#hidden')
        elements.forEach(element => {
            const element_hei = element.getBoundingClientRect().top
            if (element_hei < window.innerHeight - 100) {
                element.classList.remove('autoscroll')
                element.classList.remove('changeRadius')
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
        <div className="HomeContainer">
            <div ref={dropRight} className="CustomAfter">
                <HeaderDrop classname="customBar" DropClass="dropdownHidden" dropRight={dropRight}/>
            </div>
            <div className="topSideHome">
                <div className="header">
                    <img onClick={()=> navigate('/')} id="m212logo" src="/logo.svg" alt="" />
                    <HeaderDrop classname="TopBar" DropClass="dropdown-content" dropRight={dropRight}/>
                    <div id="list" onClick={BurgerMenu} className="menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="m212Video">
                    <div onClick={handleVideo} ref={videoBtn} className="VideoButton">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color="#ffffff" fill="none">
                            <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <video onClick={handleVideo} ref={video} src="/images/film.mp4" loop autoPlay muted playsInline preload="metadata"></video>
                </div>
            </div>
            <div className="container">
                <div id="hidden" className="SecPart autoscroll changeRadius">
                    <div id="hidden" className="headText autoShow">
                        <span></span>
                        <h3>L'agence M212</h3>
                        <span></span>
                    </div>
                    <h1 id="hidden" className="autoShow">the AV & events company experts signature</h1>
                </div>
                <div className="ChoosingM212">
                    <h3 id="hidden" className="autoShow">Pourquoi choisir l'agence M212 ?</h3>
                    <div className="whyChoosing">
                        <div className="indexOne">
                            <Options fontSize="16px" maxWidth="93%" width="70%" logo="/firstLogo.svg" number="/numbers/iconNumber1.svg" description="Une offre globale de prestations techniques, sceniques et audiovisiuelles et au besoin, M212 a la capacite de prendre en charge toutes les prestations evenmentielles tout en mettant a votre disposition un interlocuteur unique qui vous est dedie le long du projet."/>
                            <Options fontSize="22px" maxWidth="93%" width="65%" logo="/SecLogo.svg" number="/numbers/iconNumber2.svg" description="Une approche projet qui allie art et rigueur: l'esprit creatif et innovant qui s'allie aux indicateurs de performance pour mesurer l'atteindre des objectifs."/>
                        </div>
                        <div className="indexTwo">
                            <Options fontSize="22px" maxWidth="93%" width="60%" logo="/f.svg" number="/numbers/iconNumber3.svg" description="Reactivite, reporting et respect des delais, un engagement sans faille."/>
                            <Options fontSize="22px" maxWidth="95%" width="60%" logo="/FourthLogo.svg" number="/numbers/iconNumber4.svg" description="Une equipe d'experts qui partagent des valeurs d'Expertise, d'Innovation, d'Engagement et d'Excellence pour la reussite des grands projets qui leur sont confies"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
