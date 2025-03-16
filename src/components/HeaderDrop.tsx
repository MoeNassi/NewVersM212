import { useEffect } from "react"
import { useNavigate } from "react-router"

interface Prop {
    classname: string
    DropClass: string
    dropRight: any
    actualBar:string
}

export default function HeaderDrop({classname, DropClass, dropRight, actualBar}: Prop) {
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
        const element = document.querySelector(`.TopBar .dropdown ${actualBar}`)!
        element?.classList.add('force-style')
        console.log('->', element)
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
                <p className="firstBar" onClick={(e)=> handleBars(e, 'AboutContainer', '/aboutus')}>A propos</p>
                <div className={DropClass}>
                    <p onClick={(e)=> handleBars(e, 'FounderSection', '/aboutus')}>Mot du Fondateur</p>
                    <p onClick={(e)=> handleBars(e, 'ValuesSection', '/aboutus')}>Nos Valeurs</p>
                    <p onClick={(e)=> handleBars(e, 'MissionsSection', '/aboutus')}>Nos missions</p>
                    <p onClick={(e)=> handleBars(e, 'TalentsSection', '/aboutus')}>Nos talents</p>
                </div>
            </div>
            <div className="dropdown">
                <p onClick={(e)=> handleBars(e, 'DomaineContainer', '/domaine')} className="secBar">Nos Domaines d’intervention</p>
                <div className={DropClass}>
                    <p onClick={(e)=> handleBars(e, 'DomaineCard1', '/domaine')}>Consulting</p>
                    <p onClick={(e)=> handleBars(e, 'DomaineCard2', '/domaine')}>Image & Ingénierie</p>
                    <p onClick={(e)=> handleBars(e, 'DomaineCard3', '/domaine')}>Son & Eclairage</p>
                    <p onClick={(e)=> handleBars(e, 'DomaineCard4', '/domaine')}>Technique & Logistique</p>
                </div>
            </div>
            <div className="dropdown">
                <p onClick={(e)=> handleBars(e, 'RefContainer', '/realisations')} className="thirdBar">Nos références</p>
                <div className={DropClass}>
                    <p onClick={(e)=> handleBars(e, 'EventsContainer', '/realisations')}>Nos réalisations</p>
                    <p onClick={(e)=> handleBars(e, 'container', '/realisations')}>Pourquoi choisir M212</p>
                </div>
            </div>
            <div className="dropdown">
                <p onClick={(e)=> handleBars(e, 'ContactContainer', '/contact')} className="fourthBar">Contact</p>
            </div>
        </nav>
    )
}