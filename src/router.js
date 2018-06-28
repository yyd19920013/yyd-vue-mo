import App from './App.vue'

//定义组件
//测试
const test = r => require.ensure([], () => r(require('./pages/test/test.vue')), 'test');

//首页
const home = r => require.ensure([], () => r(require('./pages/home/home.vue')), 'home');

//新手专区
const noviceArea = r => require.ensure([], () => r(require('./pages/noviceArea/noviceArea.vue')), 'noviceArea');
//新手专区首页
const noviceAreaIndex = r => require.ensure([], () => r(require('./pages/noviceArea/children/noviceAreaIndex.vue')), 'noviceAreaIndex');
//新手专区详情
const noviceAreaDetail = r => require.ensure([], () => r(require('./pages/noviceArea/children/noviceAreaDetail.vue')), 'noviceAreaDetail');

//资讯
const infomation = r => require.ensure([], () => r(require('./pages/infomation/infomation.vue')), 'infomation');
//资讯详情首页
const infomationIndex = r => require.ensure([], () => r(require('./pages/infomation/children/infomationIndex.vue')), 'infomationIndex');
//评论详情
const commentDetail = r => require.ensure([], () => r(require('./pages/infomation/children/commentDetail.vue')), 'commentDetail');

//公用内联框架
const publicIframe = r => require.ensure([], () => r(require('./pages/publicIframe/publicIframe.vue')), 'publicIframe');

//404页面
const page404 = r => require.ensure([], () => r(require('./pages/page404/page404.vue')), 'page404');

//配置路由规则
export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
    	{
            path:'',
            redirect:'/test',      	
        },
        //测试页面
        {
			path:'/test', 
			component:test,
			meta:{
				noLogin:true,
			},
		},	
		//首页
		{
			path:'/home',
			component:home,	
			meta:{
				noLogin:true,
			},	
		},
		//新手专区
		{
			path:'/noviceArea',
			component:noviceArea,
			children:[
				{
					path:'', 
					component:noviceAreaIndex,
					meta:{
						noLogin:true,
					},
				},
				{
					path:'noviceAreaDetail', 
					component:noviceAreaDetail,
					meta:{
						noLogin:true,
					},
				},
			],	
			meta:{
				noLogin:true,
			},	
		},
		//资讯
		{
			path:'/infomation',
			component:infomation,
			children:[
				{
					path:'', 
					component:infomationIndex,
					meta:{
						noLogin:true,
					},
				},
				{
					path:'commentDetail', 
					component:commentDetail,
					meta:{
						noLogin:true,
					},
				},
			],	 
			meta:{
				noLogin:true,
			},	
		},
		//公用内联框架
		{
			path:'publicIframe',
			component:publicIframe,
			meta:{
				noLogin:true,
			},
		},
		//404页面
		{
			path:'*',
			component:page404,
			meta:{
				noLogin:true,
			},
		},
    ]
}]