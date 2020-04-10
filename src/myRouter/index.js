class HistoryRouter {
    constructor() {
        this.current = null;
    }
}
class VueRouter {
    constructor(options) {
        this.mode = options.mode || 'hash';
        this.routes = options.routes || [];
        this.history = new HistoryRouter();
        this.routesMap = this.createMap(this.routes);
        this.init();
    }
    init() {
        this.listenUrlChange(this.mode);
    }
    listenUrlChange(mode) {
        location.hash ? "" : location.hash = '/';
        window.addEventListener('load', () => {
            this.history.current = location.hash.slice(1);
        });
        var eventName = mode === 'hash' ? 'hashchange' : 'popstate';
        window.addEventListener(eventName, () => {
            this.history.current = location.hash.slice(1);
        });
    }
    createMap(routes) {
        return routes.reduce((memo, current) => {
            memo[current.path] = memo[current.component];
            return memo;
        }, {});
    }
}
VueRouter.install = function(Vue) {
    Vue.mixin({
        beforeCreate() {
            if (this.$options && this.$options.router) {
                this._root = this;
                this._router = this.$options.router;
                Vue.util.defineReactive(this, 'currrent', this._router.history);
            } else {
                if (this.$parent) {
                    this._root = this.$parent._root;
                }
            }
            Object.defineProperty(this, '$router', {
                get() {
                        return this._root._router;
                    }
                    //不写set,是因为外部不能修改this.$router的值
            });
        }
    });
    //注册全局组件
    Vue.component('router-view', {
        render(h) {
            let current = this._self._root._router.history.current;
            let routesMap = this._self._root._router.routesMap;
            let component = routesMap[current];
            //拿到组件，将组件渲染出来
            h(component);
        }
    });
}
export default VueRouter;