function Footer({copyright}){
    return(

        <div className="row justify-content-center bg-secondary">
            <div className="col-lg-10 col-sm-8 text-center p-5 mb-2">
                <footer>
                    <h5>{copyright}</h5>
                </footer>
            </div>  
        </div>
    )
}
export default Footer