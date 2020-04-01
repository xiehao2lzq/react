##react-pro
    1. create-react-app react-pro
       yarn eject抽离  config/scripts 抽离出来

       yarn add axios redux react-redux redux-thunk -S
       yarn add node-sass -D

    2. 搭建项目结构
            src/stylesheets/main.scss
                           /_base.scss
                           /_reset.scss
                           /_commons.scss
                           /_mixins.scss
            index.js文件中导入  mian.scss文件


            src/store
                  /index.js
                     const store = createStore(reducer,applyMiddlerware(thunk))
                  /reducer.js
                     export default combineReducers({})
                  /commons文件
                     /actionCreators.js
                     /reducer.js
                     /const.js
                     /state.js


            src/components
                  /commons
                     /template-scss文件夹
                        （index.js组件  index.scss样式文件）
                  /pages
   
   3. 通过axios实现接口数据请求

      
                    