1.
ReactDOM.render(
    <div>
        <h1>hello，world </h1>
        <p data-myattribute = "somevalue"> 这是我自己定义的标签属性</p>
    </div>,
    document.getElementById('example')
)

2.
ReactDOM.render(
    <div>
        <h1>{ 1+1 }</h1>
    </div>,
    document.getElementById('example')
)

3.
ReactDOM.render(
    <div>
        <h1>{ i == 1 ? 'ture':'false'}</h1>
    </div>,
    document.getElementById('example')
)

4.
var myStyle = {
    fontSize: 18,
    color: 'red'
};
ReactDOM.render(
    <h1 style = {myStyle}>自定义样式</h1>,
    document.getElementById('example')
)
