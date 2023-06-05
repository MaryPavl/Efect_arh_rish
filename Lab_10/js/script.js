class Component {
    setName(name){ this.name = name}

    setStructure(structure){ this.structure = structure }

    getName(){ return this.name }

    print(){ console.log(this.structure) }
}

class ComponInput extends Component{
    constructor(){
        super()
        this.setName("imput")
        this.setStructure(`<imput name = "${this.getName()}">`)
    }
}

class ComponSelect extends Component{
    constructor(){
        super()
        this.setName("select")
        this.setStructure(`<select name = "${this.getName()}"> </select>`)
    }
}

class ComponRadioButton extends Component{
    constructor(){
        super()
        this.setName("radio button")
        this.setStructure(`<radio name = "${this.getName()}">`)
    }
}

class Fieldset extends Component{
    constructor(){
        super()
        this.elements = []
        this.setName("fieldset")
    }

    addElem(elem){
        this.elements.push(elem)
    }

    print(){
        console.log( `<${this.getName()}>` );

        this.elements.forEach(elem => {
            elem.print()
        });

        console.log( `</${this.getName()}>` );
    }
}

class Form extends Fieldset{
    constructor(){
        super()
        this.setName("form")
    }
}

let fieldset_1 = new Fieldset()
fieldset_1.addElem(new ComponInput())
fieldset_1.addElem(new ComponRadioButton())

let fieldset_2 = new Fieldset()
fieldset_2.addElem(new ComponInput())
fieldset_2.addElem(new ComponSelect())
fieldset_2.addElem(fieldset_1)

let form_1 = new Form()
form_1.addElem(new ComponInput())
form_1.addElem(new ComponSelect())
form_1.addElem(fieldset_2)

form_1.print()
