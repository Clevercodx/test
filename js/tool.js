$('a').tooltip({trigger:'click',placement:'bottom'});function setTooltip(btn,message){$(btn).tooltip('hide').attr('data-original-title',message).tooltip('show');}
function hideTooltip(btn){setTimeout(function(){$(btn).tooltip('hide');},1000);}
var clipboard=new Clipboard('a');clipboard.on('success',function(e){setTooltip(e.trigger,'Phone Number Copied!');hideTooltip(e.trigger);});clipboard.on('error',function(e){setTooltip(e.trigger,'Failed!');hideTooltip(e.trigger);});$('a').tooltip({trigger:'click',placement:'bottom'});function setTooltip(btn1,message){$(btn1).tooltip('hide').attr('data-original-title',message).tooltip('show');}
function hideTooltip(btn1){setTimeout(function(){},1000);}
var clipboard1=new Clipboard('span');clipboard1.on('success',function(e){setTooltip(e.trigger,'Code Copied!');hideTooltip(e.trigger);});clipboard1.on('error',function(e){setTooltip(e.trigger,'Failed!');hideTooltip(e.trigger);})
$('a').tooltip({trigger:'click',placement:'bottom'});function setTooltip(btn2,message){$(btn2).tooltip('hide').attr('data-original-title',message).tooltip('show');}
function hideTooltip(btn2){setTimeout(function(){},1000);}
var rndClick=function(){var randomNum6=Math.round(Math.random()*100);window.location="/rand/"+randomNum6;}
var clipboard2=new Clipboard('div');clipboard2.on('success',function(e){setTooltip(e.trigger,'Phone Number Copied!');hideTooltip(e.trigger);});clipboard2.on('error',function(e){setTooltip(e.trigger,'Failed!');hideTooltip(e.trigger);})
var upClick=function(){var rurl=$("link[rel=canonical]").attr("href");console.log(rurl);window.location=rurl;}