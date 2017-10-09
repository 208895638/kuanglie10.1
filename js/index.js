$(function(){
	var index={		
		init:function(){
			this.bindEvent();
			this.render();
			this.copy();
		},
		bindEvent:function(){
			var that=this;
			//说明操作步骤   顺序执行
//			点击首页"用户登录"按钮会弹出登录窗
//          鼠标划过没有账号  显示提示信息
//			点击登录窗中的登录按钮弹窗消失  且第一屏会显示用户信息   
//			用户点击页面中的领取礼包按钮(所有的都一样)弹出选择区服弹窗
//			用户点击选择大区弹窗的确定按钮  所有领取礼包按钮变已经领取
//			当领取失败时   mask遮罩会消失同时默认选择区服弹窗显示
//			用户点击退出  会重置为未登录前的状态
			
			//点击差号弹窗消失
			$(".mask h6").on("click",function(){
				$(this).parent().parent().show().siblings().hide();
				$(".mask").fadeOut();				
			});			
			//点击登陆 弹出登录框
			$(".login").on("click",function(){
				$(".mask").fadeIn();
				$(".mask .logins").show().siblings().hide();
			});
			//点击弹窗登陆按钮   弹窗消失   并在页面顶部显示个人信息
			$(".box h3").on("click",function(){
				$(".login").addClass("regHide").siblings().removeClass("regHide");//页面退出登录显示   登录账号消失
				$(".top h4").show();  //个人信息显示
				$(".mask").fadeOut();
				$(".infos").show().siblings().hide(); //显示选择区服
			});
			//点击领取奖励  出现选择区服弹窗
			$(".jl").on("click",function(){  //所有的奖励按钮
				$(".infos").show().siblings().hide();
				$(".mask").fadeIn();
			});
			//点击选择大区的确定按钮  所有领取按钮券变已经领取
			$(".infos  h3 a").on("click",function(){
				$(this).parents(".infos").siblings(".giftCode").show().siblings().hide();
				$(".qm").addClass("qmHide").siblings().removeClass("qmHide");//全民福利对应的按钮
				$(".lq").addClass("btnHide").siblings().removeClass("btnHide");//超级服等级好礼
				$(".linkBtn").addClass("yqBtnHide").siblings().removeClass("yqBtnHide");//邀请好友回归对应的按钮
			});
			//点击退出登陆
			$(".register").on("click",function(){
				$(this).addClass("regHide").siblings().removeClass("regHide");  //页面上的登录按钮显示  退出按钮消失
				$(".mask .logins").show().siblings().hide();//登录弹窗显示其它消失
				$(".top h4").hide();//页面上的个人信息隐藏
				//下面的按钮全部变成未领取状态
				$(".qm").removeClass("qmHide").siblings().addClass("qmHide");//全民福利对应的按钮
				$(".lq").removeClass("btnHide").siblings().addClass("btnHide");//超级服等级好礼
				$(".linkBtn").removeClass("yqBtnHide").siblings().addClass("yqBtnHide");//邀请好友回归对应的按钮
			});
			//点击个人信息的退出按钮
			$(".top h4 a").on("click",function(){
				$(".register").addClass("regHide").siblings().removeClass("regHide");  //页面上的登录按钮显示  退出按钮消失
				$(".mask .logins").show().siblings().hide();//登录弹窗显示其它消失
				$(this).parent().hide();//页面上的个人信息隐藏
				//下面的按钮全部变成未领取状态
				$(".qm").removeClass("qmHide").siblings().addClass("qmHide");//全民福利对应的按钮
				$(".lq").removeClass("btnHide").siblings().addClass("btnHide");//超级服等级好礼
				$(".linkBtn").removeClass("yqBtnHide").siblings().addClass("yqBtnHide");//邀请好友回归对应的按钮
			});
			//领取失败 点击返回按钮的状态
			$(".isGiftCode h4 a").on("click",function(){
				$(".mask").fadeOut();
				$(".infos").show().siblings().hide();
			})

			//划过宝箱显示
			$(".fiveSec .box li img").hover(function(){
				var i = $(this).parents("li").index();
				$(".fiveSec .box li").eq(i).find(".giftInfo").removeClass("hide").parent().parent().siblings().find(".giftInfo").addClass("hide");
			},function(){
				$(".fiveSec .box li").find(".giftInfo").addClass("hide");
			})
			
			
			$(".fouCon .welfare li img").hover(function(){
				var i = $(this).parents("li").index();
				$(".fouCon .welfare li").eq(i).find(".giftInfo").removeClass("hide").parent().parent().siblings().find(".giftInfo").addClass("hide");
			},function(){
				$(".fouCon .welfare li").find(".giftInfo").addClass("hide");
			})
			//返回顶部
		    $('.go-back').on('click',function(){
		        var top = $(window).scrollTop();
		        var interval = setInterval(function(){
		            top -= 50;
		            if(top >= 50){
		                $(window).scrollTop(top);
		            }else {
		                $(window).scrollTop(0);
		                clearInterval(interval);
		            }
		        },20)
		    });
		     //底部按钮显示隐藏
		    $(window).on('scroll',function(){
		        var top = $(window).scrollTop();
		        var height = document.body.offsetHeight;
		        if(top >= height/2){
		            $('.go-back').show();
		        }else{
		            $('.go-back').hide();
		        }
		    });
		},
		render:function(){
			var that=this;
			
		},
		copy:function(){
		    var clipboard1 = new Clipboard('.copy');
		    //优雅降级:safari 版本号>=10,提示复制成功;否则提示需在文字选中后，手动选择“拷贝”进行复制
		    clipboard1.on('success', function(e) {
		        alert('复制成功!');
		        e.clearSelection();
		    });
		    clipboard1.on('error', function(e) {
		        alert('请选择“拷贝”进行复制!');
		    });
		    var clipboards = new Clipboard('.copys');
		    //优雅降级:safari 版本号>=10,提示复制成功;否则提示需在文字选中后，手动选择“拷贝”进行复制
		    clipboards.on('success', function(e) {
		        alert('复制成功!');
		        e.clearSelection();
		    });
		    clipboards.on('error', function(e) {
		        alert('请选择“拷贝”进行复制!');
		    });
		}
	};
	index.init();
})