const fs = require('fs');
const path = require('fs');
const parser = require('@babel/parser');
const babel = require('@babel/core');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
const config = require('../mywebpack.config.js');
const entry = config.entry;
const ejs = require('ejs');
//构建一个ast
const createAst = filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    const ast = parser.parse(content, {
            sourceType: 'module'
        })
        //单个文件的依赖收集，@babel/traverse用来遍历更新ast
    traverse(ast, {
        CallExpression(p) {
            const node = p.node;
            //对语法树特定的节点进行操作
            if (node.callee.name === 'require') {
                node.callee.name = '__webpack_require__';
                let resultPath = node.arguments[0].value;
                resultPath += path.extname(resultPath) ? '' : 'js';
                dependencies.push(resultPath);
            }
        }
    });
    //重新生成代码
    let code = generator(ast).code;
    let moduleId = id++;
    return {
        moduleId,
        filePath,
        code,
        dependencies
    }
};
//处理多个文件依赖
const createGraph = entry => {
    const ast = createAst(entry);
    const queue = [ast];
    for (const item of queue) {
        const dirname = path.dirname(ast.filePath);
        //模块依赖
        item.mapping = {};
        item.dependencies.map(relativePath => {
            const absolutePath = path.join(dirname, relativePath);
            const child = createAst(absolutePath);
            item.mapping[relativePath] = child.moduleId;
            queue.push(child);
        });
    }
    return queue;
};
//重写require
const modules = createGraph(entry);
const entryId = modules[0].moduleId;
let code = [];
modules.map((item, index) => {
    const packCode = {
        id: modules[index].mapping,
        code: modules[index].code
    };
    code.push(packCode);
});
let reg = RegExp(/__webpack_require__\((.+?)\)/g);
code = code.map((item, index) => {
        //__webpack_require__.s=0
        if (item.code.match(reg)) {
            item = item.code.replace(reg, `__webpack_require__(${Object.values(item.id)})`);
        } else {
            item = item.code;
        }
        return item;
    })
    //打包输出
let output = `${config.output.path}\\${config.output.filename}`;
let template = fs.readFileSync('./mywebpack/template.ejs', 'utf8');
let package = ejs.render(template, {
    entryid,
    code
});
fs.writeFileSync(output, package);