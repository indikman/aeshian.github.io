M.block_course_overview={};M.block_course_overview.add_handles=function(Y){M.block_course_overview.Y=Y;var MOVEICON={pix:"i/move_2d",component:'moodle'};YUI().use('dd-constrain','dd-proxy','dd-drop','dd-plugin',function(Y){var goingUp=false,lastY=0,list=Y.Node.all('.course_list .coursebox');list.each(function(v,k){var imagenode=v.one('.course_title .move a img');imagenode.setAttribute('src',M.util.image_url(MOVEICON.pix,MOVEICON.component));imagenode.addClass('cursor');v.one('.course_title .move a').replace(imagenode);var dd=new Y.DD.Drag({node:v,target:{padding:'0 0 0 20'}}).plug(Y.Plugin.DDProxy,{moveOnEnd:false}).plug(Y.Plugin.DDConstrained,{constrain2node:'.course_list'});dd.addHandle('.course_title .move')});Y.DD.DDM.on('drag:start',function(e){var drag=e.target;drag.get('node').setStyle('opacity','.25');drag.get('dragNode').addClass('block_course_overview');drag.get('dragNode').set('innerHTML',drag.get('node').get('innerHTML'));drag.get('dragNode').setStyles({opacity:'.5',borderColor:drag.get('node').getStyle('borderColor'),backgroundColor:drag.get('node').getStyle('backgroundColor')})});Y.DD.DDM.on('drag:end',function(e){var drag=e.target;drag.get('node').setStyles({visibility:'',opacity:'1'});M.block_course_overview.save(Y)});Y.DD.DDM.on('drag:drag',function(e){var y=e.target.lastXY[1];if(y<lastY){goingUp=true}else goingUp=false;lastY=y});Y.DD.DDM.on('drop:over',function(e){var drag=e.drag.get('node'),drop=e.drop.get('node');if(drop.hasClass('coursebox')){if(!goingUp)drop=drop.get('nextSibling');e.drop.get('node').get('parentNode').insertBefore(drag,drop);e.drop.sizeShim()}});Y.DD.DDM.on('drag:drophit',function(e){var drop=e.drop.get('node'),drag=e.drag.get('node');if(!drop.hasClass('coursebox'))if(!drop.contains(drag))drop.appendChild(drag)})})};M.block_course_overview.save=function(){var Y=M.block_course_overview.Y,sortorder=Y.one('.course_list').get('children').getAttribute('id');for(var i=0;i<sortorder.length;i++)sortorder[i]=sortorder[i].substring(7);var params={sesskey:M.cfg.sesskey,sortorder:sortorder};Y.io(M.cfg.wwwroot+'/blocks/course_overview/save.php',{method:'POST',data:build_querystring(params),context:this})};M.block_course_overview.collapsible=function(Y,id,userpref,strtooltip){if(userpref)M.block_course_overview.userpref=true;Y.use('anim',function(Y){new M.block_course_overview.CollapsibleRegion(Y,id,userpref,strtooltip)})};M.block_course_overview.CollapsibleRegion=function(Y,id,userpref,strtooltip){this.userpref=userpref;this.div=Y.one('#'+id);var caption=this.div.one('#'+id+'_caption');caption.setAttribute('title',strtooltip);var a=Y.Node.create('<a href="#"></a>'),movenode=function(node){node.remove();a.append(node)};caption.get('children').each(movenode,this);caption.prepend(a);var height=this.div.get('offsetHeight');if(this.div.hasClass('collapsed'))this.div.setStyle('height',caption.get('offsetHeight')+'px');var animation=new Y.Anim({node:this.div,duration:0.3,easing:Y.Easing.easeBoth,to:{height:caption.get('offsetHeight')},from:{height:height}});animation.on('end',function(){this.div.toggleClass('collapsed')},this);caption.on('click',function(e,animation){e.preventDefault();if(animation.get('running'))animation.stop();animation.set('reverse',this.div.hasClass('collapsed'));if(this.userpref)M.util.set_user_preference(this.userpref,!this.div.hasClass('collapsed'));animation.run()},this,animation)};M.block_course_overview.userpref=false;M.block_course_overview.CollapsibleRegion.prototype.userpref=null;M.block_course_overview.CollapsibleRegion.prototype.div=null;M.block_course_overview.CollapsibleRegion.prototype.icon=null