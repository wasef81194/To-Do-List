class Evenement {
    constructor(titre, lieu, date, description,color,id ) {
      this.titre = titre;
      this.lieu = lieu;
      this.date = date;
      this.color = color;
      this.description = description;
      this.id = id;
      this.del = document.querySelector('.delete')
      
      this.container = document.querySelector('.list')
     

      this.complete = false;
      //function
      this.element = this.createTemplate()

      this.addListener()
      //this.supp()
      
    }
    createTemplate(){
      console.log(this.id);
      let newEvent = document.createElement('div')
        newEvent.classList.add('event')
        newEvent.classList.add('card')
        newEvent.style.setProperty('border-color', this.color)
        //titre
        
        //var newContent = document.createTextNode(this.titre+' '+this.lieu+' '+this.date+' '+this.description);

        newEvent.innerHTML =`
        <h2 class='h2'>${this.titre}</h2>
        <p class='infos'>Le ${this.date} à ${this.lieu}</p>
        <p class='description'> <b>Description :</b> ${this.description}</p>
        
        `;//<button class ='delete'> del </button>
        
        this.container.append(newEvent)
        return newEvent
    }
    addListener(){
      
      this.element.addEventListener('click',this.onClick)
      //this.del.addEventListener('click',this.supp)

    }

    onClick(){
      //console.log('click',this.complete)
      if(!this.complete){
        this.classList.add('complete')
        this.complete = true;
      }
      else{
        this.classList.remove('complete')
        this.complete = false;
      }
        
    }
   /*supp(){// j'ai pas reussi a supprimer l'element 
     console.log(this)
      e.stopPropagation
      this.delete.addEventListener('click',() => {
        this.element.removeChild(this.element);
      })
    }*/
}
  