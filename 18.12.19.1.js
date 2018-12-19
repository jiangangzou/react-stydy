var navigationConfig = [
    {
        href: 'http://baidu.com',
        text: 'baiducom',
        children: [
            {
                href: 'http://baidu.com.1.html',
                text: 'baiducom1'
            },
            {
                href: 'http://baidu.com.2.html',
                text: 'baiducom2'
            },
            {
                href: 'http://baidu.com.3.html',
                text: 'baiducom3'
            }
        ]
    }
];
var Navigation = React.createClass({
    getInitialState: function () {
        return {
            openDropdown: -1
        };
    },
    getDefaultProps: function () {
        return {
            config: []
        }
    },
    openDropdown: function (id) {
        this.setState({
            openDropdown: id
        });
    },
    closeDropdown: function () {
        this.setState({
            openDropdown: -1
        })
    },
    propTypes: {
        config: React.propTypes.array
    },
render: function () {
    var config = this.props.config;
    var items = config.map(function (item,index) {
        var children,dropdown;
        if(item.children) {
            children = item.children.map(function (child) {
                return (
                    <li className = "navigation_dropdown_item">
                        <a className = "navigation_dropdown_link" href={ child.href }>
                            { child.text }
                        </a>
                    </li>
                );
            });
            var dropdownClass = "navigation_dropdown";
            if (this.state.openDropdown === index) {
                dropdownClass += "navigation_dropdown--open";
            }
            console.log(this.state.openDropdown,index);
            dropdown = (
                <ul className={ dropdownClass }>
                    { children }
                </ul>
            );
        }
        return (
            <li className="navigation_item" onMouseOut={ this.closeDropdown} onMouseOver={ this.openDropdown.bind(this,index) }>
                <a className="navigation_link" href={ item.href }>
                    { item.text }
                </a>
                { dropdown }
            </li>
        );
    },this);
    return (
        <div className="navigation">
            { items }
        </div>
    );
}
});
React.render(<Navigation config={ Navigation} /> ,document.body);