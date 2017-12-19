import  EchartsUtils from "./EcharsUtils";

export default {
     // 自定义的一些初始化数据 与 页面上的属性 互相绑定
    data() {
        return { }
    },
    // 放初始化的东西, this只带当前实例， 在vue 实例被创建的之时候执行
    created(){
        this.echartsUtils = new EchartsUtils();
    },
    // 自定义的一些方法 与 页面事件 互相绑定
    methods: {
        drawCharts() {
            this.echartsUtils.drawColumnChart();
            this.echartsUtils.drawBarChart();
            this.echartsUtils.drawLineChart();
            this.echartsUtils.drawPieChart();
        }
    },
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
    mounted () {
        this.drawCharts();
    },
    // 数据更改导致的虚拟 DOM 重新渲染和打补丁
    updated () {
        this.drawCharts();
    },
    // 在实例被销毁时调用
    destroyed(){
        console.log("echarts 已经被销毁");
    }
}