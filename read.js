#!/usr/bin/env node
const recast  = require('recast')
const TNT = recast.types.namedTypes

// node read可以读取demo.js文件，并将demo.js内容转化为ast对象。
// recast.run( function(ast, printSource){
//   printSource(ast)
// })

// AST节点遍历
// recast.run(function(ast, printSource) {
//   recast.visit(ast, {
//       visitExpressionStatement: function({node}) {
//         console.log(node)
//         return false
//       }
//     });
// });

// 判断AST对象类型
recast.run(function(ast, printSource) {
  recast.visit(ast, {
      visitExpressionStatement: function(path) {
        const node = path.value
        // 判断是否为ExpressionStatement，正确则输出一行字。
        if(TNT.ExpressionStatement.check(node)){
          console.log('这是一个ExpressionStatement')
        }
        this.traverse(path);
      }
    });
});
