function animate_string(Id){
    let element = document.getElementById(Id);
    let childNode = element.childNodes[0]
    let text =  childNode.data;

    setInterval(()=> {
        text = text[text.length -1] + text.substring(0, text.length -1);
        childNode.data = text
    },100);
}
animate_string()