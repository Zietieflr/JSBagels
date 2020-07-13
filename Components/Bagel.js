  
function renderBagel(name, bagelsContainer) {
  const bagelContent = document.createElement('li')
  bagelContent.textContent = name
  return bagelsContainer.appendChild(bagelContent)
}

export {renderBagel}