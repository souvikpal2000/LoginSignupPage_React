import "./BlackBackground.css"

const BlackBackground = (fromParentComponent) => {
    const {choice, setChoice, dynamicStyling} = fromParentComponent;

    const changeUserChoice = (event) => {
        setChoice((preValue) => {
            return{
                userClick: event.target.name,
                navigateToOtherSection: preValue.userClick
            }
        })
    }

    return(
        <>
            <div className="blackBackgroundContainer" style={dynamicStyling}>
                <h1>{(choice.userClick).toUpperCase()} PAGE</h1>
                <div>
                    <button name={choice.navigateToOtherSection} onClick={changeUserChoice}>Visit {choice.navigateToOtherSection}</button>
                </div>
            </div>
        </>
    )
}

export default BlackBackground;