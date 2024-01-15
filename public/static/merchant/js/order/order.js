define(["jquery", "easy-admin"], function ($, ea) {    var init = {        table_elem: '#currentTable',        table_render_id: 'currentTableRenderId',        index_url: 'order.order/index',        export_url: 'order.order/export',        budan_url: 'order.order/budan',    };    var Controller = {        index: function () {            ea.table.render({                init: init,                skin: 'row',                even: true,                modifyReload: false,                height: 'full-40',                toolbar: ['refresh', [{                    text: ea.findText('补单'),//'补单',                    url: init.budan_url,                    method: 'open',                    auth: 'budan',                    class: 'layui-btn layui-btn-normal layui-btn-sm',                    icon: 'fa fa-plus ',                }],'export'],                cols: [[                    {field: 'id', width: 120,search:false,title: ea.findText('编号')},                    {field: 'pay_usdt', width: 180,search:false,title: ea.findText('订单金额') + '(USDT)'},                    {field: 'merchant_order_sn', width: 220,title: ea.findText('商户订单号'),},                    {field: 'poundage_usdt', width: 150,search:false,title: ea.findText('手续费') + '(USDT)'},                    {field: 'actual_usdt', width: 160,search:false, title: ea.findText('实际金额') +'(USDT)'},                    {field: 'chain_type', width: 100, selectList: {1:'TRC20',2:'ETH20'},title: ea.findText('链')},                    {field: 'order_status', title: ea.findText('状态'), search:false,width: 130, selectList: {0: ea.findText('未支付'),1:ea.findText('已支付'),2:ea.findText('超时订单'),3:ea.findText('失败订单')},templet: function(d){                            if (d.order_status==0) {                                return `<span style="color: #0000FF;">${ea.findText('未支付')}</span>`                            }                            if (d.order_status==1) {                                return `<span style="color: green;">${ea.findText('已支付')}</span>`                            }                            if (d.order_status==2) {                                return `<span style="color: red;">${ea.findText('超时订单')}</span>`                            }                            if (d.order_status==3) {                                return `span style="color: red;">${ea.findText('失败订单')}</span>`                            }                        }},                    {field: 'product_name', width: 120,search:false, title: ea.findText('商品名称'),templet: function(d){                        let lan = document.cookie.includes('en-us')?'en':'cn'                        if(lan === 'en'){                            return d.product_name === '收银台收款'?'Payment Link':d.product_name                        }else{                            return d.product_name === 'Payment Link'?'收银台收款':d.product_name                        }                    }},                    // {field: 'product_desc', width: 120,search:false, title: ea.findText('商品描述')},                    {field: 'create_time', width: 180,search:'range',title: ea.findText('订单创建时间')},                    {field: 'pay_time',width: 140, search:'range',title: ea.findText('支付时间')},                ]],            });            ea.listen();        },        budan: function () {            ea.listen();        },    };    return Controller;});