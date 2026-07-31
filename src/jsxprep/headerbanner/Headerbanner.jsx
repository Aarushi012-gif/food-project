import temperory from "../../assets/temperory.png"; 
function Headerbanner(){
    return(
        <>
           <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                     <img src={temperory} width="100%"
                        height="250"
                     />
                </div>
            </div>
           </div>
        </>
    )
}
export default Headerbanner;