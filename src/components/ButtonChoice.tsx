function ButtonChoice({item, onUserMakeChoice}:any) {
    return(
        <button type="button" onClick={() => onUserMakeChoice(item)}>
            <img src={`/${item}.svg`} alt=""/>
        </button>
    )
}
export default ButtonChoice