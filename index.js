window.onload = function () {
  console.log(document.frames[0])

var page_body = document.querySelector("body")
this.setTimeout(() => {
  console.log(`gello`, document)
}, 2000);
page_body.setAttribute("contextmenu", "share");
console.log(page_body)


// Creation of context menu
var menu_wrapper = document.createElement("menu");
menu_wrapper.setAttribute("contextmenu","share");

var inner_menu = document.createElement("menu");
inner_menu.setAttribute("type", "context")
inner_menu.id = "share"

var menu_label = document.createElement("menu");
menu_label.setAttribute("label", "share")

var menu_item = this.document.createElement("menuitem")
menu_item.setAttribute("label","Add")
menu_item.id = "addBtn"

menu_wrapper.appendChild(inner_menu)
inner_menu.appendChild(menu_label)
menu_label.appendChild(menu_item)
page_body.appendChild(menu_wrapper)
element = document.getElementById("addBtn")



element.addEventListener( "click", function(e) {
  console.log(window.getSelection().toString())
});

document.addEventListener( "contextmenu", function(e) {
  console.log(e);
});
  
}