let list = document.querySelector('.list')
let events = document.querySelectorAll('.event')
let ListEvent = []
const btnAdd = document.querySelector('.add')
//console.log(events.length)
let newEvent =''

function uuid(){
    let d = new Date().getTime(),
      d2 = (performance && performance.now && performance.now() * 1000) || 0;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      let r = Math.random() * 16;
      if (d > 0) {
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else {
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c == "x" ? r : (r & 0x7) | 0x8).toString(16);
    });
  }
btnAdd.addEventListener('click', () => {

    console.log('click')
    let titre = document.getElementById('titre').value
    let lieu = document.getElementById('lieu').value
    let date = document.getElementById('date').value
    let description = document.getElementById('description').value
    let color = document.getElementById('color').value
    id = uuid()
    let event = new Evenement(titre,lieu,date,description,color,id)

    /*let event = [titre,lieu,date,description,color] 
    ListEvent.push(event)
    console.log(ListEvent)
    
    
    ListEvent.forEach((event, i) => {
        //console.log(i)

        
    })

   */

   
})
console.log(ListEvent)






