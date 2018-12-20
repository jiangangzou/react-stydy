function Name(props) {
    return <h1> 姓名:{ props.name} </h1>
}
function Sex(props) {
    return <h1> 性别:{ props.sex } </h1>
}
function Number(props) {
    return <h1> 学号:{ props.number } </h1>
}
function App() {
    return (
        <div>
            <Name name="想象你的身影" />
            <Sex sex=" 男" />
            <Number number="01645--" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('example')
);