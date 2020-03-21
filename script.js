replaceText(document.body)

function replaceText (element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText)
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/新冠肺炎/gi)) {     
      const newElement = document.createElement('span')
      newElement.innerHTML = element.textContent.replace(/(新冠肺炎)/gi,      
      '<span class="rainbow">$1</span>')
      element.replaceWith(newElement)
    }    
  }
}
