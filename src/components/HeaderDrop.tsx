import { useNavigate } from "react-router"

interface Prop {
    classname: string
    DropClass: string
    dropRight: any
}

export default function HeaderDrop({classname, DropClass, dropRight}: Prop) {
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

    return (
        <nav className={classname}>
            {
                classname === 'customBar' ?
                <div className="closeBar">
                    <img onClick={BurgerMenu} src="/cancel.svg" alt="" />
                </div>:''
            }
            <div className="dropdown">
                <p id="1" className="test" onClick={(e)=> handleBars(e, 'AboutContainer', '/aboutus')}>A propos</p>
                <div className={DropClass}>
                    <p onClick={(e)=> handleBars(e, 'FounderSection', '/aboutus')}>Mot du Fondateur</p>
                    <p onClick={(e)=> handleBars(e, 'ValuesSection', '/aboutus')}>Nos Valeurs</p>
                    <p onClick={(e)=> handleBars(e, 'MissionsSection', '/aboutus')}>Nos missions</p>
                    <p onClick={(e)=> handleBars(e, 'TalentsSection', '/aboutus')}>Nos talents</p>
                </div>
            </div>
            <div className="dropdown">
                <p id="2" className="test">Nos Domaines d’intervention</p>
                <div className={DropClass}>
                    <p>Consulting</p>
                    <p>Image & Ingénierie</p>
                    <p>Son & Eclairage</p>
                    <p>Technique & Logistique</p>
                </div>
            </div>
            <div className="dropdown">
                <p id="3" className="test">Nos références</p>
            </div>
            <div className="dropdown">
                <p id="4" className="test">Contact</p>
            </div>
        </nav>
    )
}