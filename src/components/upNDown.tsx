export default function UpAndDown() {
    const handleClick = (number: number) => {
        window.scrollTo({'behavior': 'smooth', top: number})
    }

    return (
        <div className="UpDown">
            <div onClick={()=> handleClick(0)} className="up">
                <img src="/arrow-up.svg" alt="" />
            </div>
            <div onClick={()=> handleClick(10800)} className="down">
                <img src="/arrow-down.svg" alt="" />
            </div>
        </div>
    )
}