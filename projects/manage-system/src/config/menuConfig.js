const menuList = [
  {
    title: '首页', // 菜单标题名称
    key: '/home', // 对应的path
    icon: 'el-icon-menu', // 图标名称
    public: true, // 公开的
  },
  {
    title: '商品',
    key: '/products',
    icon: 'el-icon-shopping-cart-2',
    children: [ // 子菜单列表
      {
        title: '品类管理',
        key: '/category',
        icon: 'el-icon-notebook-1'
      },
      {
        title: '商品管理',
        key: '/product',
        icon: 'el-icon-present'
      },
    ]
  },

  {
    title: '用户管理',
    key: '/user',
    icon: 'el-icon-user'
  },
  {
    title: '角色管理',
    key: '/role',
    icon: 'el-icon-s-check',
  },

  {
    title: '图形图表',
    key: '/charts',
    icon: 'el-icon-picture-outline',
    children: [
      {
        title: '柱形图',
        key: '/bar',
        icon: 'el-icon-data-analysis'
      },
      {
        title: '折线图',
        key: '/line',
        icon: 'el-icon-data-line'
      },
      {
        title: '饼图',
        key: '/pie',
        icon: 'el-icon-pie-chart'
      },
    ]
  },
]

export default menuList