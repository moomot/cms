(function($){$.fn.dsCountDown=function(givenOptions){var ds=this;var refreshed=1000,thread=null,running=false,left=0,decreament=1,interval=0,seconds=0,minutes=0,hours=0,elemHours=null,elemMinutes=null,elemSeconds=null;var defaults={startDate:new Date(),endDate:null,elemSelHours:'',elemSelMinutes:'',elemSelSeconds:'',theme:'white',titleHours:'Hours',titleMinutes:'Minutes',titleSeconds:'Seconds',onBevoreStart:null,onClocking:null,onFinish:null};var options=$.extend({},defaults,givenOptions);if(this.length>1){this.each(function(){$(this).dsCountDown(givenOptions)});return this;}var init=function(){if(!options.elemSelSeconds){ds.prepend('<div class="ds-element ds-element-seconds seconds">\
							<div class="ds-element-value ds-seconds num">00</div>\
							<div class="ds-element-title text">'+options.titleSeconds+'</div>\
						</div>');elemSeconds=ds.find('.ds-seconds');}else{elemSeconds=ds.find(options.elemSelSeconds);}if(!options.elemSelMinutes){ds.prepend('<div class="ds-element ds-element-minutes minutes">\
							<div class="ds-element-value ds-minutes num">00</div>\
							<div class="ds-element-title text">'+options.titleMinutes+'</div>\
						</div>');elemMinutes=ds.find('.ds-minutes');}else{elemMinutes=ds.find(options.elemSelMinutes);}if(!options.elemSelHours){ds.prepend('<div class="ds-element ds-element-hours hours">\
							<div class="ds-element-value ds-hours num">00</div>\
							<div class="ds-element-title text">'+options.titleHours+'</div>\
						</div>');elemHours=ds.find('.ds-hours');}else{elemHours=ds.find(options.elemSelHours);}ds.addClass('dsCountDown');ds.addClass('ds-'+options.theme);if(options.startDate&&options.endDate){interval=options.endDate.getTime()-options.startDate.getTime();if(interval>0){var allSeconds=(interval/1000);var hoursMod=(allSeconds%86400);var minutesMod=(hoursMod%3600);left=allSeconds;hours=Math.floor(hoursMod/3600);minutes=Math.floor(minutesMod/60);seconds=Math.floor(minutesMod%60);}}start();}
var stop=function(callback){if(running){clearInterval(thread);running=false;}if(callback){callback(ds);}}
var start=function(){if(!running){if(left>0){if(options.onBevoreStart){options.onBevoreStart(ds);}thread=setInterval(function(){if(left>0){left-=decreament;seconds-=decreament;if(seconds<=0&&(minutes>0||hours>0)){minutes--;seconds=60;}if(seconds<=0&&minutes==0&&hours==0){elemSeconds.html('0');return;}if(minutes<=0&&(hours>0)){hours--;minutes=60;}if(elemHours)elemHours.html((hours<10?'0'+hours:hours));if(elemMinutes)elemMinutes.html((minutes<10?'0'+minutes:minutes));if(elemSeconds)elemSeconds.html((seconds<10?'0'+seconds:seconds));if(options.onClocking){options.onClocking(ds);}}else{stop(options.onFinish);}},refreshed);running=true;}else{if(options.onFinish){options.onFinish(ds);}}}}
init();}})(jQuery);