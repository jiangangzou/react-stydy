//版本1
// function Clock(props) {
//     return (
//         <div>
//             <h1> Hello,world </h1>
//             <h2> 现在是 { props.date.toLocaleTimeString()} </h2>
//         </div>
//     );
// }

// function tick() {
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('example')
//     );
// }
// setInterval(tick,1000);


//版本2
class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello,world</h1>
                <h2>现在是 { this.props.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

function tick() {
    ReactDom.render(
        <Clock date={ new date()} />,
        document.getElementById('example')
    )
}

setInterval(tick,1000)


//react只会更新必要的部分
//值得注意的是React DOM首先会比较元素内容先后的不同，而在渲染过程中只会更新改变了的部分
