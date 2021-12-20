const onMutation = () => {
    const element = document.getElementById(427)
    if (element) {
        var card = document.getElementById(427)
        var cardimg = card.children.item(9)
        cardimg.setAttribute("style", 'background: transparent url("images/cards/Ultimate_Recipe.png") no-repeat scroll 0% 0%;')
    }
  }
  
  const observer = new MutationObserver(onMutation)
  
  observer.observe(document.body, {childList: true, subtree: true})