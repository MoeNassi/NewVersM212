import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Language from "../assets/language.json"

interface Prop {
    classname: string
    DropClass: string
    dropRight: any
    actualBar:string
}

export default function HeaderDrop({classname, DropClass, dropRight, actualBar}: Prop) {
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

    const handleBars = (e: React.MouseEvent<HTMLParagraphElement>,classname: string, page: string) => {
        navigate(page)
        const video = document.querySelector('.VideoHome') as HTMLVideoElement
        if (video && document.pictureInPictureEnabled && !document.pictureInPictureElement) {
            video!.requestPictureInPicture().catch(console.error);
        }
        BurgerMenu()
        setTimeout(()=> {
            const old = document!.querySelector('.selected')
            old?.classList.remove('selected')
            const element = document!.querySelector(`.${classname}`) as HTMLElement
            const target = e.target as HTMLParagraphElement
            target!.classList.add('selected')
            window.scrollTo({'behavior': "smooth", top: element?.offsetTop})
        }, 200)
    }

    useEffect(()=> {
        var lang = localStorage.getItem('lang')
        if (!lang)
            localStorage.setItem('lang', 'FR')
        lang = localStorage.getItem('lang')!
        setChoosen(lang)

        const element = document.querySelector(`.TopBar .dropdown ${actualBar}`)!
        element?.classList.add('force-style')
    }, [])

    return (
        <nav className={classname}>
            {
                classname === 'customBar' ?
                <div className="closeBar">
                    <img onClick={BurgerMenu} src="/cancel.svg" alt="" />
                </div>:''
            }
            <svg onClick={()=> navigate('/')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="homePage" fill="none">
                <path d="M3.16405 11.3497L4 11.5587L4.45686 16.1005C4.715 18.6668 4.84407 19.9499 5.701 20.7249C6.55793 21.5 7.84753 21.5 10.4267 21.5H13.5733C16.1525 21.5 17.4421 21.5 18.299 20.7249C19.1559 19.9499 19.285 18.6668 19.5431 16.1005L20 11.5587L20.836 11.3497C21.5201 11.1787 22 10.564 22 9.85882C22 9.35735 21.7553 8.88742 21.3445 8.59985L13.1469 2.86154C12.4583 2.37949 11.5417 2.37949 10.8531 2.86154L2.65549 8.59985C2.24467 8.88742 2 9.35735 2 9.85882C2 10.564 2.47993 11.1787 3.16405 11.3497Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 16C14.2005 16.6224 13.1502 17 12 17C10.8498 17 9.79952 16.6224 9 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div className="dropdown">
                <p className="firstBar" onClick={(e)=> handleBars(e, 'AboutContainer', '/aboutus')}>{(Language as any)[choosen][0]}</p>
                <div className={DropClass}>
                    <p onClick={(e)=> handleBars(e, 'FounderSection', '/aboutus')}>{(Language as any)[choosen][61]}</p>
                    <p onClick={(e)=> handleBars(e, 'ValuesSection', '/aboutus')}>{(Language as any)[choosen][62]}</p>
                    <p onClick={(e)=> handleBars(e, 'MissionsSection', '/aboutus')}>{(Language as any)[choosen][63]}</p>
                    <p onClick={(e)=> handleBars(e, 'TalentsSection', '/aboutus')}>{(Language as any)[choosen][64]}</p>
                </div>
            </div>
            <div className="dropdown">
                <p onClick={(e)=> handleBars(e, 'DomaineContainer', '/domaine')} className="secBar">{(Language as any)[choosen][1]}</p>
                <div className={DropClass}>
                    <p onClick={(e)=> handleBars(e, 'DomaineCard1', '/domaine')}>{(Language as any)[choosen][65]}</p>
                    <p onClick={(e)=> handleBars(e, 'DomaineCard2', '/domaine')}>{(Language as any)[choosen][66]}</p>
                    <p onClick={(e)=> handleBars(e, 'DomaineCard3', '/domaine')}>{(Language as any)[choosen][67]}</p>
                    <p onClick={(e)=> handleBars(e, 'DomaineCard4', '/domaine')}>{(Language as any)[choosen][68]}</p>
                </div>
            </div>
            <div className="dropdown">
                <p onClick={(e)=> handleBars(e, 'RefContainer', '/realisations')} className="thirdBar">{(Language as any)[choosen][2]}</p>
                <div className={DropClass}>
                    <p onClick={(e)=> handleBars(e, 'EventsContainer', '/realisations')}>{(Language as any)[choosen][69]}</p>
                    <p onClick={(e)=> handleBars(e, 'container', '/realisations')}>{(Language as any)[choosen][70]}</p>
                </div>
            </div>
            <div className="dropdown">
                <p onClick={(e)=> handleBars(e, 'ContactContainer', '/contact')} className="fourthBar">{(Language as any)[choosen][3]}</p>
            </div>
            <div className="languageC">
                <p id="frenchlang" onClick={()=> {
                    localStorage.setItem("lang", "FR")
                    navigate(0)
                }}>fr</p>
                <span></span>
                <p id="englishlang" onClick={()=> {
                    localStorage.setItem("lang", "EN")
                    navigate(0)
                }}>en</p>
                <span></span>
                <p id="englishlang" onClick={()=> {
                    localStorage.setItem("lang", "ES")
                    navigate(0)
                }}>es</p>
            </div>
        </nav>
    )
}