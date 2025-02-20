import { useRef } from "react";
import HeaderDrop from "./HeaderDrop";
import { useNavigate } from "react-router";
import Footer from "./footer";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function ContactPage() {
    const dropRight = useRef<HTMLDivElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const navigate = useNavigate()

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

    const SendMail = () => {
        const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

        if (nameRef.current?.value.trim().length === 0 || messageRef.current?.value.trim().length === 0)
        {
            toast.error('Veuillez remplir toutes les informations nécessaires')
            return
        }
        if (!emailRegex.test(emailRef.current!.value)) {
            toast.error('L\'adresse e-mail fournie n\'est pas valide')
            return
        }

        axios.post(`/backend/contact/`, {
            from_mail: emailRef.current!.value,
            message: messageRef.current!.value,
            subject: "Contact M212",
            fullname: nameRef.current!.value
        })
        .then(response => {
            emailRef.current!.value = ""
            messageRef.current!.value = ""
            nameRef.current!.value = ""
            toast.success('Message sent')
            console.log(response.data)
        })
        .catch(error => {
            toast.error('Service down try again later')
            console.log(error.message)
        })
    }

    return (
        <div className="ContactContainer">
            <Toaster 
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    className: '',
                    duration: 5000,
                    style: {
                        fontFamily: 'Font3',
                        background: 'white',
                        color: '#52616B',
                    },
            }}
            />
            <div ref={dropRight} className="CustomAfter">
                <HeaderDrop classname="customBar" DropClass="dropdownHidden" dropRight={dropRight} actualBar=".fourthBar" />
            </div>
            <div className="header">
                <img onClick={()=> navigate('/')} id="m212logo" src="/logo.svg" alt="" />
                <HeaderDrop classname="TopBar" DropClass="dropdown-content" dropRight={dropRight} actualBar=".fourthBar" />
                <div id="list" onClick={BurgerMenu} className="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="contactContent">
                <div className="ContactHeadP">
                    <h1>Contactez-nous</h1>
                </div>
                <div className="TwoNPT">
                    <input ref={nameRef} type="text" placeholder="Name"/>
                    <input ref={emailRef} type="text" placeholder="E-mail"/>
                </div>
                <div className="messageA">
                    <textarea ref={messageRef} name="" id="" placeholder="Message"></textarea>
                </div>
                <button onClick={SendMail}>submit</button>
            </div>
            <Footer />
        </div>
    )
}