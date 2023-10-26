function Header({title}){
    return(
        <div className="row justify-content-center bg-secondary">
          <div className="col-lg-10 col-sm-8 text-center p-5 mb-2">
          <header>
                <h3>{title}</h3>
            </header>
          </div>  
       </div>
    )
}
export default Header