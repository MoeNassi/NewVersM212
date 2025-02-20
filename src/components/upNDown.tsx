export default function UpAndDown() {
    const handleClick = (number: number) => {
        window.scrollTo({'behavior': 'smooth', top: number})
    }

    return (
        <div className="UpDown">
            <div onClick={()=> handleClick(0)} className="up">
                <h1>U</h1>
            </div>
            <div className="down">
                <h1 onClick={()=> handleClick(10800)}>D</h1>
            </div>
        </div>
    )
}