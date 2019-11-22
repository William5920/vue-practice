module.exports = {
    // 修改的配置

    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }
}