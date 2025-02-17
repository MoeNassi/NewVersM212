export default function Footer() {
    return (
        <footer className="footer">
            <div className="firstPart">
                <img src="/images/footerLogo.svg" alt="" />
                <div className="statusContainer">
                    <div className="status">
                        <img src="/phone.svg" alt="" />
                        <p>(+212) 6 18234576</p>
                    </div>
                    <div className="status">
                        <img src="/mail.svg" alt="" />
                        <p>contact@m212av.com</p>
                    </div>
                </div>
            </div>
            <div className="secPart">
                <p>company</p>
                <div className="options">
                    <p>About us</p>
                    <p>Portfolio</p>
                    <p>Contact Us</p>
                    <p>Blog</p>
                    <p>FAQ</p>
                </div>
            </div>
            <div className="thirdPart">
                <p>follow us</p>
                <div className="socials">
                    <img src="/facebook.svg" alt="" />
                    <img src="/pint.svg" alt="" />
                    <img src="/twitter.svg" alt="" />
                    <img src="/instagram.svg" alt="" />
                </div>
            </div>
        </footer>
    )   
}