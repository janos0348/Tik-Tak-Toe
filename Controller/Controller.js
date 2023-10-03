
import Model from "../Model/model.js" 
import Negyzet from "../View/Negyzet.js"
import JatekterView from "../View/JatekterView.js"
class Controller{
    constructor(){
        this.MODEL = new Model()
        this.elemView = new JatekterView(".jatekter")
        $(window).on("kivalasztas", (event) => {
            this.MODEL.setAllapot()
            this.elemView.setErtek(this.Model.getAllapot)
        })

    
    }
    
    
}export default Controller