class Evenement {
    constructor(titre, lieu, date, description,color ) {
      this.titre = titre;
      this.lieu = lieu;
      this.date = date;
      this.color = color;
      this.description = description;

      this.container = document.querySelector('.list')

      this.complete = false;

      this.element = this.createTemplate()

      this.addListener()
    }
    createTemplate(){
      let newEvent = document.createElement('div')
        newEvent.classList.add('event')
        newEvent.classList.add('card')
        newEvent.style.setProperty('border-color', this.color)
        //titre
        var newContent = document.createTextNode(this.titre+' '+this.lieu+' '+this.date+' '+this.description);
        newEvent.appendChild(newContent);
        console.log(newEvent);
        this.container.append(newEvent)
        return newEvent
    }
    addListener(){
      this.element.addEventListener('click',this.onClick)

    }

    onClick(){

      console.log('click',this.complete)
      if(this.complete == false){
        this.classList.add('complete')
        this.complete = true;
      }
      else{
        this.classList.remove('complete')
        this.complete = false;
      }
        
    }
}
  