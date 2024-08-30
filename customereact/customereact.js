function customecontainer(reactElement,container){
/*const domelement=document.createElement(reactElement.type);
domelement.innerHTML=reactElement.children;
domelement.setAttribute('href',reactElement.props.href)
domelement.setAttribute('target',reactElement.props.target)
container.appendchild(domelement)
}
*/
const domelement=document.createElement(reactElement.type)
domelement.innerHTML=reactElement.children
for(const prop in reactElement.props){
    if(prop=='children') continue
    domelement.setAttribute(prop,reactElement.props[prop])
}
container.appendChild(domelement)
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me you get to now'
}


const maincontainer=document.getElementById("root");
customecontainer(reactElement,maincontainer);