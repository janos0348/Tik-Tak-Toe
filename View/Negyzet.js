
class Negyzet{
    #index = 0
    #szuloElem
    #allapot
    constructor( index,szuloElem) {
        this.#allapot = true
        this.#index = index
        this.#szuloElem = szuloElem
        this.#szuloElem.append("<div class='negyzet'></div>")
        this.divNegyzet = $("article div:last-child")
        this.divNegyzet.on("click", () => {
            this.kattintasTrigger("kivalasztas")
            this.#allapot = false
        })
    }
    kattintasTrigger(esemenynev){
        const esemenyem = new CustomEvent(esemenynev, {detail:this})
        window.dispatchEvent(esemenyem)
        
    }
    #htmlOsszerak(){
        let txt = ""
        txt += `
            <div class="negyzet"></div>
        `
    }
    getIndex() {
        return this.#index;
    }

    setNegyzet(figura){
        this.divNegyzet.append(figura)
    }

}export default Negyzet