var navigationConfig = [
    {
        href: 'hhtp://www.baidu.com',
        text: 'baiducom'
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
    propTypes: {
        config: React.propTypes.array
    },
    render: function () {
        var config = this.props.config;
        var items = config.map(function (item) {
            return (
                <li className = "navigation_item">
                    <a className="navigation_link" href={ item.href }>
                        { item.text }
                    </a>
                </li>
            );
        });
        return (
            <div className="navigation">
                { items }
            </div>
        )
    }
});
React.render(<Navigation config= { navigationConfig } />,document.body)