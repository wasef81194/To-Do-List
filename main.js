let list = document.querySelector('.list')
let events = document.querySelectorAll('.event')
let ListEvent = []
const btnAdd = document.querySelector('.add')
//console.log(events.length)
let newEvent =''


btnAdd.addEventListener('click', () => {

    console.log('click')
    let titre = document.getElementById('titre').value
    let lieu = document.getElementById('lieu').value
    let date = document.getElementById('date').value
    let description = document.getElementById('description').value
    let color = document.getElementById('color').value

    let event = new Evenement(titre,lieu,date,description,color)

    /*let event = [titre,lieu,date,description,color] 
    ListEvent.push(event)
    console.log(ListEvent)
    
    
    ListEvent.forEach((event, i) => {
        //console.log(i)

        
    })

    var currentDiv = document.getElementById('event');
    document.body.insertBefore(newEvent, currentDiv);*/

   
})
console.log(ListEvent)






