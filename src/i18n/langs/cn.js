import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
const cn = {
    lang: {
        'hello': '你好，世界',
        'language': '中文',
        'theme': '主题'
    },
    pages:{
        'page1': "首页",
        'page2': "第2页",
        "page3": "第3页",
        "page4": "第4页"
    },
    button:{
        'delete': '删除',
    },
    themeList: {
        'list': [
            //当前可选的颜色
            { val: "#409EFF", name: "星空蓝" },
            { val: "#f5222d", name: "苹果红" },
            { val: "#304156", name: "商务灰" },
            { val: "#212121", name: "默认黑" },
            { val: "#11a983", name: "清新绿" },
            { val: "#13c2c2", name: "魔法蓝" }
          ]
    },
    ...zhLocale
}

export default cn