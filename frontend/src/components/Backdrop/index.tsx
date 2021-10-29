import './index.css'

type BackdropProps = {
    show:boolean,
    click:Function
}

const Backdrop = (props:BackdropProps) => {

    const handleClick = (e:any) => {
        props.click()
    }

    return (
        <div>
            {props.show && <div className="backdrop" onClick={handleClick}>
                
            </div>}
        </div>
    )
}

export default Backdrop
