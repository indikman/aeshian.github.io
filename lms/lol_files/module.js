M.block_private_files={};M.block_private_files.init_tree=function(Y,expand_all,htmlid){Y.use('yui2-treeview',function(Y){var tree=new Y.YUI2.widget.TreeView(htmlid);tree.subscribe("clickEvent",function(node,event){return false});if(expand_all)tree.expandAll();tree.render()})}