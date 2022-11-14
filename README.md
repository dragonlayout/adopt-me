# Adopt Me

source code of [COMPLETE INTRO TO REACT V8](https://react-v8.holt.courses/)

## Tools

### EditorConfig(Editor coding style)

EditorConfig 的作用对象是编辑器，因此配置可作用于所有类型的可编辑文件。同时也支持为特定文件或特定
类型文件进行差异化设置。

EditorConfig 解决了编辑器配置层面的编码风格一致性问题，但是关于代码风格的部分并未涉及，比如是否需要在语句末尾添加分号、
字符串使用单引号还是双引号等等。

### Prettier(Code formatter)

不同开发者的代码书写风格或多或少存在不同，比如一些开发者系统添加分号，一些认为没有必要添加分号。
统一规范便能终止人们对于如何实际代码样式的争论，将代码修改集中在大妈逻辑。

Prettier 处理范围包括:

- 字符串引号风格
- 空行处理
- 多行对象格式
- 分号处理
- 打印宽度：控制换行

Intellij IDEA config

- `npm install --global prettier`
- install plugin prettier
- Languages & Frameworks > JavaScript > Prettier: select
  - On 'Reformat Code' action
  - On save

### ESLint(Code Linter)

专注于找到代码存在的问题避免错误。
- 避免低级 bug，找出可能发生的语法错误
- 提示删除多余的代码
- 确保代码遵循最佳实践(airbnb style, javascript standard)
- 统一的代码风格

代码风格检查使用 prettier，解决 ESLint 和 prettier 职责冲突的部分
