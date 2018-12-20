1.
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
    render() {
        return (
            <div>
                <h1>Hello ,world</h1>
                <h2>现在是 { this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('example')
);

2.
class Clock extends react.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div>
                <h1> Hello,World</h1>
                <h2> 现在是 { this.state.date.toLocaleTimeString() } </h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('example')
);

3.
class WebSite extends REact.Component {
    constructor() {
        super();
        this.state = {
            name: "想象你的身影",
            number: "01645--"
        }
    }
    render() {
        return (
            <div>
                <Name name={ this.state.name } />
                <Link number={ this.state.number} />
            </div>
        );
    }
}

class Name extends React.Component {
    render() {
        return (
            <h1> {this.props.name} </h1>
        );
    }
}

class Link extends React.Component {
    render() {
        return (
            <p> { this.props.number } </p>
        );
    }
}

ReactDOM.render(
    <WebSite />,
    document.getElementById('example')
);

4.
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = { isLoggedIn:false };
    }
    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        });
    }
    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        })
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if(isLoggedIn) {
            button = <LogoutButton onClick={ this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={ this.handleLoginClick} />
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}
ReactDOM.render(
    <LoginControl />,
    document.getElementById('example')
);

5.
function Mailbox(props) {
    const unreadMessage = props.unreadMessage;
    return (
        <div>
            <h1>Hello</h1>
            {unreadMessage.length > 0&&
            <h3>您有 { unreadMessage.length }条信息未读。</h3>}
        </div>
    );
}
const message = ['lalal','xixixix','fafafafa'];
ReactDOM.render(
    <Mailbox unreadMessage={message} />,
    document.getElementById('example')
)

6.
function WarningBanner(props) {
    if(!props.warn) {
        return null;
    }
    return (
        <div className="warning">
            警告
        </div>
    );
}
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }
    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={ this.handleToggleClick}>
                    {this.state.showWarning ? '隐藏' : '显示'}
                </button>
            </div>
        );
    }
}
ReactDOM.render(
    <Page />,
    document.getElementById('example')
)

7.
const numbers = [1,2,3,4,5,6];
const listItems = numbers.map((number) => {
    <li>{number} </li>
});
ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('example')
);

8.
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => {
        <li key={ number.toString()}>
            { number }
        </li>
    });
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1,2,3,4,5,6];
ReactDOM.render(
    <NumberList number={numbers} />,
    document.getElementById('example')
);

9.
function listItem(props) {
    return <li>{props.value}</li>
}

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => {
        <listItem key={number.toString()} value={number} />
    });
    return (
        <ul>
            {listItems}
        </ul>
    )
}
const numbers = [1,2,3,4,5,6];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('example')
)