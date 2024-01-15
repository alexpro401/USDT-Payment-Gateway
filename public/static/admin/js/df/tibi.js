define(["jquery", "easy-admin", "vue"], function ($, ea, Vue) {    var init = {        table_elem: '#currentTable',        table_render_id: 'currentTableRenderId',        index_url: 'df.tibi/index',        deal_url: 'df.tibi/deal',    };    var form = layui.form;    var Controller = {        index: function () {            ea.table.render({                init: init,                skin: 'row',                even: true,                modifyReload: false,                height: 'full-40',                toolbar: ['refresh'],                cols: [[                    {field: 'id',  search:false,title: '编号'},                                        {field: 'from_address', width: 390,  title: '提款地址'},                    {field: 'to_address', width: 390, title: '收款地址'},                                         {field: 'status', title: '状态',  selectList: {0: '未执行',1:'执行成功',2:'执行失败'},templet: function(d){                        if (d.status==0) {                            return '<span style="color: #0000FF;">未执行</span>'                        }                        if (d.status==1) {                            return '<span style="color: green;">执行成功</span>'                        }                        if (d.status==2) {                            return '<span style="color: red;">执行失败</span>'                        }                                               }},                                         {field: 'create_time',  search:'range',title: '申请时间'},                    {field: 'remark',  search:'range',title: '备注'},                    {                        title: '操作',                        templet: ea.table.tool,                        operat: [                            [{                                text: '执行',                                url: init.deal_url,                                method: 'get',                                field: 'id',                                title: '确定执行吗？',                                auth: 'deal',                                class: 'layui-btn layui-btn-xs layui-btn-success',                            },                             ],]                    }                                    ]],            });            ea.listen();        },        deal: function () {            ea.listen();        },    };    return Controller;});