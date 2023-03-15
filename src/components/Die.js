const Die = ({ value, isHeld, onClick }) => {
    return (
        <div>
            <button onClick={onClick} className={` p-6 rounded-md shadow-xl ${isHeld ? "bg-[#59E391]" : "bg-white"}`}>{value}</button>
        </div>
    )
}

export default Die