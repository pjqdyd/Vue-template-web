import enLocale from 'element-ui/lib/locale/lang/en'
const en = {
    lang: {
        'hello': 'hello, world',
        'language': 'English',
        'theme': 'Theme'
    },
    pages:{
        'page1': "Home page",
        'page2': "Page 2",
        "page3": "Page 3",
        "page4": "Page 4"
    },
    button:{
        'delete': 'Delete',
    },
    themeList: {
        'list': [
            //当前可选的颜色
            { val: "#409EFF", name: "Sky Blue" },
            { val: "#f5222d", name: "Apple Red" },
            { val: "#304156", name: "Business Ash" },
            { val: "#212121", name: "Default Black" },
            { val: "#11a983", name: "Pure Green" },
            { val: "#13c2c2", name: "Magic Blue" }
          ]
    },
    ...enLocale
}

export default en