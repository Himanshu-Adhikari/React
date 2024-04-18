function Rendering(reactEle, daba) {
    const rt = document.createElement(reactEle.type);
    
    for (const prop in reactEle.props) {
        rt.setAttribute(prop, reactEle.props[prop]);
    }
    rt.innerHTML = reactEle.children;
    daba.appendChild(rt);
}

const reactEle = {
    type: 'a',
    props: {
        href: "https://www.youtube.com",
        target: "_blank"
    },
    children: "click me brother"
};

const daba = document.querySelector("#root");

Rendering(reactEle, daba);
