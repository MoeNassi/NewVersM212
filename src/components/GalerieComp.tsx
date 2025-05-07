import { useEffect, useRef, useState } from "react"
import EventsData from "../assets/data.json"
import HeaderDrop from "./HeaderDrop";
import { useNavigate } from "react-router";
import Footer from "./footer";
import Language from "../assets/language.json"

interface EventsProps {
    id:number
    image:string
    name:string
    realisation:string
    setTranslate:any
    setQuery:any
}

function EventsComp({id, image, name, realisation, setTranslate, setQuery}:EventsProps) {
    const navigate = useNavigate()

    const handleClick = () => {
        setTranslate(0)
        setQuery(id)
        navigate(`/realisations/list?id=${id}`)
    }

    return (
        <div onClick={handleClick} className="EventContenttext">
            <div className="caseOh">
                <h1>{name}</h1>       
                <span></span> 
                <p>{realisation}</p>
            </div>
            <img src={image} alt="" />
        </div>
    )
}

export default function PopUpGalerie() {
    const [translateX, setTranslateX] = useState(0);
    const [choosen, setChoosen] = useState<string>('FR')
    const [Query, setQuery] = useState("");
    const [array, setArray] = useState<any>([
        {"id": "", "name": "", "place": "", "date": "", "Prestation": "", "realisation": "", "images": []}
    ])
    const navigate = useNavigate()
    const dropRight = useRef<HTMLDivElement>(null)
    // var exit:any = ""
    var query:any = 0

    useEffect(() => {
        var url = document.location.search
        query = url.split('=')[1]

        var lang = localStorage.getItem('lang')
        if (!lang)
            localStorage.setItem('lang', 'FR')
        lang = localStorage.getItem('lang')!
        setChoosen(lang)
        
        setArray({
            id: query,
            name: (EventsData as any)[lang][query]["name"],
            place: (EventsData as any)[lang][query]["Place"],
            date: (EventsData as any)[lang][query]["date"],
            Prestation: (EventsData as any)[lang][query]["Prestations"],
            realisation: (EventsData as any)[lang][query]["Realisation"],
            images: (EventsData as any)[lang][query]["images"],
            format: (EventsData as any)[lang][query]["format"]
        });
        console.log('->', choosen)
    }, [Query]);

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

    const handleKey = (arrow: string) => {
        setTimeout(()=> 200)
        if ((array.images.length - 1) * 100 == translateX)
            setTranslateX(0)
        else if (arrow == '-1' && translateX - 100 < 0)
            setTranslateX((array.images.length - 1) * 100)
        else if (arrow == '-1')
            setTranslateX(translateX - 100)
        else if (arrow == '1')
            setTranslateX(translateX + 100)
        console.log(translateX)
    }
    
    return (
        <div className="PopUpContainer">
            <div ref={dropRight} className="CustomAfter">
                <HeaderDrop classname="customBar" DropClass="dropdownHidden" dropRight={dropRight} actualBar=".thirdBar"/>
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
            <div className="eventInfoCont">
                <div className="evenTImage">
                    <div onClick={()=> handleKey('-1')} className="leftArrowS"></div>
                    <div onClick={()=> handleKey('1')} className="rightArrowS"></div>
                    <div id="imageToswap" className="imagesToFlow">
                        {
                            array.images?.map((image: string, index: number) => {
                                return <img style={{"transform": `translateX(-${translateX}%)`}} key={index} src={image} alt="" />
                            })
                        }
                    </div>
                </div>
                <div className="eventPopInfo">
                    <div className="infosPopE">
                        <h1>{array.name}</h1>
                        <div className="duo">
                            <h3>{(Language as any)[choosen][71]}</h3>
                            <p>{array.place}</p>
                        </div>
                        <div className="duo">
                            <h3>{(Language as any)[choosen][75]}</h3>
                            <p>{array.format}</p>
                        </div>
                        <div className="duo">
                            <h3>{(Language as any)[choosen][72]}</h3>
                            <p>{array.date}</p>
                        </div>
                        <div className="duo">
                            <h3>{(Language as any)[choosen][73]}</h3>
                            <h4>{(Language as any)[choosen][74]}</h4>
                            <p>{array.Prestation}</p>
                        </div>
                        <h2 id="spaceIn">Event by {array.realisation}</h2>
                    </div>
                </div>
            </div>
            <div className="EventsContainerref">
                {
                    (EventsData as any)[choosen].map((object: any, index: any) => {
                        return <EventsComp key={index} id={object.id} image={object.images[0]} name={object.name} realisation={object.Realisation} setTranslate={setTranslateX} setQuery={setQuery} />
                    })
                }
            </div>
            <Footer />
        </div>
    )
}