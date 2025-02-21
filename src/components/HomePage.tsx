import gsap from "gsap"
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router"
import HeaderDrop from "./HeaderDrop"
import UpAndDown from "./upNDown"

export default function HomePage() {
    const video = useRef<HTMLVideoElement>(null)
    const videoBtn = useRef<HTMLDivElement>(null)
    const dropRight = useRef<HTMLDivElement>(null)

    const navigate = useNavigate()

    useEffect(() => {
        var Flag = true

        gsap.fromTo('.header', {y: '-150%'}, {y: 0, duration: 1, delay: 1.5})
        video.current?.addEventListener("timeupdate", function () {
            if (video.current!.currentTime >= 1.5 && Flag) {
                video.current?.pause()
                video.current!.muted = false
                videoBtn.current!.style.opacity = "1"
                Flag = false
            }
        });
    }, [])

    const handleVideo = () => {
        if (video.current?.paused) {
            videoBtn.current!.style.opacity = "0"
        }
        else {
            videoBtn.current!.style.opacity = "1"
        }
    }

    const handleVideoPlay = () => {
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

    useEffect(()=> {
        const element = document.querySelector('.TopBar #homePage')
        console.log(element)
        element?.classList.add('imageChanger')
    }, [])

    return (
        <div className="HomeContainer">
            <UpAndDown />
            <div ref={dropRight} className="CustomAfter">
                <HeaderDrop classname="customBar" DropClass="dropdownHidden" dropRight={dropRight} actualBar=""/>
            </div>
            <div className="topSideHome">
                <div className="header">
                    <img onClick={()=> navigate('/')} id="m212logo" src="/logo.svg" alt="" />
                    <HeaderDrop classname="TopBar" DropClass="dropdown-content" dropRight={dropRight} actualBar=""/>
                    <div id="list" onClick={BurgerMenu} className="menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="m212Video">
                    <div onClick={handleVideoPlay} ref={videoBtn} className="VideoButton">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" color="#ffffff" fill="none">
                            <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <video onClick={handleVideo} className="VideoHome" ref={video} src="/images/film.mp4" loop controls controlsList="nodownload" autoPlay muted playsInline preload="metadata"></video>
                </div>
            </div>
        </div>
    )
}
