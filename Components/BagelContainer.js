import * as Delete from './Delete.js'
import * as Bagel from './Bagel.js'

function renderBagels(name, id){
  const bagelsContainer = document.querySelector('#bagelsUl')
  const newBagel = Bagel.renderBagel(name, bagelsContainer)
  Delete.createDeleteButton(newBagel, id)
}

export {renderBagels}