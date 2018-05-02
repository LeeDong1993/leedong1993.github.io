// Download by http://www.jb51.net
var suningImages = function(){
	var box = $('#bigpics');
	var image = $('#pics');
	var btn = image.find('li');
	var len = btn.length ;
	var ul = image.find('ul');
	
	return{
		init:function(){
			var that = this ;
			var posx ;
			var posy ;
			var i = 0 ;
			ul.css('width',len*125);
			image.prev('div').click(function(e){
				//alert($(this));
				if(i<=0){
					return false;
				}
				i--;
				that.scroll(i);
				e.preventDefault();
			})
			
			image.next('div').click(function(e){
				if(i>=len-3){
					return false;
				}
				i++;	
				that.scroll(i);
				e.preventDefault();
			})
			
			
			btn.each(function(i){
				$(this).find('a').click(function(e){
					index = i ;							 
					that.addbk(i);
					that.loadimg(i);
					e.preventDefault();
				})
			})
			
			
			
			
			$(document).keyup(function(e){
				var e = e || window.event ;
				if(e.which == 39){
					index++;
					if(index>=len){
						index=0;
						ul.stop().animate({marginLeft: 0 },300);
					}
					that.next(index);
					
				}else if(e.which== 37 ){
					index--;
					if(index<0){
						index=len-1;
						ul.stop().animate({marginLeft: -125*parseInt(index/1)*1 },300);
					};
					that.prev(index);
				}
			});
			
		},
		loadimg:function(i){
			box.html('<div class="loading"></div>');
			var src = btn.eq(i).find('img').attr('src');
			var maxlen = src.length ;
			newsrc = src;//.slice(0,maxlen-4)+".jpg";
			box.html('<img src = ' +newsrc+'  />' ).find('img').hide();
			box.find('img').fadeIn(250);
		},
		addbk:function(i){
			btn.eq(i).find('a').addClass('on').parent().siblings().find('a').removeClass('on');
		},
		scroll:function(i){
			ul.stop().animate({marginLeft: -125*1*i },300);
		},
		next:function(index){
			var that = this ;
			if(((index)%3)==0){
				ul.stop().animate({marginLeft: -125*(index) },300);
			}
			that.addbk(index);
			setTimeout(function(){that.loadimg(index);},400);
		},
		prev:function(index){
			var that = this ;
			if((index+1)%3==0){
				ul.stop().animate({marginLeft: -125*parseInt(index/1)*1 },300);
			}
			that.addbk(index);
			setTimeout(function(){that.loadimg(index);},400);
		}
	}
}
$(document).ready(function(){
	suningImages().init();	
})
