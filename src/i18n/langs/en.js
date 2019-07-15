import enLocale from 'element-ui/lib/locale/lang/en'
const en = {
    lang: {
        'hello': 'hello, world',
        'theme': 'Theme'
    },
    button:{
        'delete': 'Delete',
    },
    themeList: {
        'list': [
            //当前可选的颜色
            { val: "#409EFF", name: "Sky Blue" },
            { val: "#f5222d", name: "Apple Red" },
            { val: "#304156", name: "Business ash" },
            { val: "#212121", name: "Default Black" },
            { val: "#11a983", name: "Pure Green" },
            { val: "#13c2c2", name: "Magic blue" }
          ]
    },
    ...enLocale
}

export default en