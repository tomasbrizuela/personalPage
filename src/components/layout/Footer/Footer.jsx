import './footer.css'

export const Footer = () => {
    let date = new Date()
    let year = date.getFullYear()

    return (
        <div className="footer">
            <h4 className='footerText'>Tomas Brizuela | {year}</h4>
        </div>
    )
}

export default Footer