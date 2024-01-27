const heading = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {}, [
        React.createElement("h1", {}, "hello World"),
        React.createElement("h2", {}, "this is second paragraph")
    ]),
    React.createElement("div", {}, [
        React.createElement("h1", {}, "hello World"),
        React.createElement("h2", {}, "this is second paragraph")
    ])
]); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=index.c36f364e.js.map
