#### React路由快速上手
首先最外层需要包裹组件<Router>
组件<Route>就是你看到的组件内容
组件<Link>就是页面链接

<BrowserRouter>还是HashRouter
BrowserRouter是需要服务端配合，是基于html5的pushState和replaceState的，很多浏览器
不支持，存在兼容性问题
链接地址模板：http://localhost:3000/about
HashRouter是浏览器端解析路由
链接地址模板：http://localhost:3000#/about

组件<Route>属性exact完全匹配
<Route path="/about" component={about} />

exact=false的时候path等于/about /about/me 都能匹配
但是exact=true的时候 只能匹配path等于 /about
当strict=true的时候，路由请求末尾必须带 / 

组件<Link>生成路由链接

<NavLink> 生成路由链接的基础上，如果是当前路由设置激活样式

组件<Switch>只渲染出第一个与当前访问地址匹配的<Route>或<Redirect>
否则你有几个<Route>都会显示

<Redirect>路由重定向 from--需要匹配的将要被重定向路径
                    to--需要重定向的URL字符串
                    