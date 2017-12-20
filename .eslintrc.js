module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "rules": {
        /**
         *  基本要求
         * 
         * */

        // 禁止条件表达式中出现赋值操作符
        "no-cond-assign": 2,
        // 禁止在条件中使用常量表达式
        "no-constant-condition": 2,
        // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
        "comma-dangle": 1,
        // 禁止 function 定义中出现重名参数
        "no-dupe-args": 2,
        // 禁止空语句块
        "no-empty": 2,
        // 禁止不必要的分号
        "no-extra-semi": 2,
        //  禁止不必要的括号 //(a * b) + c;//报错
        "no-extra-parens": 0,

        /**
         *  代码风格
         * 
         * */

        // 双峰驼命名格式
        "camelcase": 2,
        // 禁止或强制在单行代码块中使用空格(禁用)
        "block-spacing":[1,"never"],

        //强制使用一致的缩进 第二个参数为 "tab" 时，会使用tab，
        // if while function 后面的{必须与if在同一行，java风格。
        "brace-style": [2, "1tbs", { "allowSingleLine": true }],
        // 控制逗号前后的空格
        "comma-spacing": [2, { "before": false, "after": true }]

        /**
         *  ES6 相关规范
         * 
         * */

    }
};