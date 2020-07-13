import * as BagelContainer from '/Components/BagelContainer.js'

document.addEventListener('DOMContentLoaded', ()=>{


    fetch('http://bagel-api-fis.herokuapp.com/bagels')
      .then(response => response.json())
      .then(result => handleData(result))
  
  
      function handleData(bagels){
          console.log(bagels)
        bagels.map(bagel => {
            BagelContainer.renderBagels(bagel.type, bagel.id)
        })
      }
  
      const bagelsForm = document.querySelector('#bagels-form')
  
      bagelsForm.addEventListener('submit', ()=>{
        event.preventDefault()
        getUserBagel(bagelsForm)
      })
  
      function getUserBagel(bagelsForm){
        const newFormData = new FormData(bagelsForm)
        const formBagel = newFormData.get('bagel')
        renderBagel(formBagel)
        sendUserBagel(formBagel)
      }
  
  
      function sendUserBagel(type){
        fetch('http://bagel-api-fis.herokuapp.com/bagels', {
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body: JSON.stringify({type})
        })
      }
  
  })