export default function Footer() {
    return (
        <footer className="footer">
            <div className="firstPart">
                <img src="/images/footerLogo.svg" alt="" />
                <div className="statusContainer">
                    <div className="status">
                        <img src="/phone.svg" alt="" />
                        <p>+212 5 24 35 89 12</p>
                    </div>
                    <div className="status">
                        <img src="/mail.svg" alt="" />
                        <p>contact@m212av.com</p>
                    </div>
                </div>
            </div>
            <div className="thirdPart">
                <p>follow us</p>
                <div className="socials">
                    <img src="/facebook.svg" alt="" />
                    <img src="/pint.svg" alt="" />
                    <img src="/twitter.svg" alt="" />
                    <a target="_blank" href="https://www.instagram.com/m212av/"><img src="/instagram.svg" alt="" /></a>
                </div>
            </div>
        </footer>
    )   
}