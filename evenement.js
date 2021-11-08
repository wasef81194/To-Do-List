class Evenement {
    constructor(titre, lieu, date, description,color ) {
      this.complete = false;
      this.titre = titre;
      this.lieu = lieu;
      this.date = date;
      this.description = description;
      this.container = document.querySelector('.list')

      this.element = this.createTemplate()

      this.addListener()
    }
    createTemplate(){
      let newEvent = document.createElement('div')
        newEvent.classList.add('event')
        newEvent.classList.add('card')
        newEvent.style.setProperty('border-color', color)
        //titre
        var newContent = document.createTextNode(this.titre);
        newEvent.appendChild(newContent);
        console.log(newEvent);
        this.container.append(newEvent)
        return newEvent
    }
    addListener(){
      this.element.addEventListener('click',this.onClick)

    }
    onClick(){
      console.log('click',this)
      
      this.classList.add('complete')
    }
}
  