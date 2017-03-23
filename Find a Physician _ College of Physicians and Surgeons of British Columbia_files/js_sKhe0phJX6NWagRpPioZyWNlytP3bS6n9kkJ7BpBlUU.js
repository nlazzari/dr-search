(function(e,t){"use strict";function n(e){var t=Array.prototype.slice.call(arguments,1);return e.prop?e.prop.apply(e,t):e.attr.apply(e,t)}function s(e,t,n){var s,a;for(s in n)n.hasOwnProperty(s)&&(a=s.replace(/ |$/g,t.eventNamespace),e.bind(a,n[s]))}function a(e,t,n){s(e,n,{focus:function(){t.addClass(n.focusClass)},blur:function(){t.removeClass(n.focusClass),t.removeClass(n.activeClass)},mouseenter:function(){t.addClass(n.hoverClass)},mouseleave:function(){t.removeClass(n.hoverClass),t.removeClass(n.activeClass)},"mousedown touchbegin":function(){e.is(":disabled")||t.addClass(n.activeClass)},"mouseup touchend":function(){t.removeClass(n.activeClass)}})}function i(e,t){e.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass)}function r(e,t,n){n?e.addClass(t):e.removeClass(t)}function l(e,t,n){var s="checked",a=t.is(":"+s);t.prop?t.prop(s,a):a?t.attr(s,s):t.removeAttr(s),r(e,n.checkedClass,a)}function u(e,t,n){r(e,n.disabledClass,t.is(":disabled"))}function o(e,t,n){switch(n){case"after":return e.after(t),e.next();case"before":return e.before(t),e.prev();case"wrap":return e.wrap(t),e.parent()}return null}function c(t,s,a){var i,r,l;return a||(a={}),a=e.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},a),i=e("<div />"),r=e("<span />"),s.autoHide&&t.is(":hidden")&&"none"===t.css("display")&&i.hide(),a.divClass&&i.addClass(a.divClass),s.wrapperClass&&i.addClass(s.wrapperClass),a.spanClass&&r.addClass(a.spanClass),l=n(t,"id"),s.useID&&l&&n(i,"id",s.idPrefix+"-"+l),a.spanHtml&&r.html(a.spanHtml),i=o(t,i,a.divWrap),r=o(t,r,a.spanWrap),u(i,t,s),{div:i,span:r}}function d(t,n){var s;return n.wrapperClass?(s=e("<span />").addClass(n.wrapperClass),s=o(t,s,"wrap")):null}function f(){var t,n,s,a;return a="rgb(120,2,153)",n=e('<div style="width:0;height:0;color:'+a+'">'),e("body").append(n),s=n.get(0),t=window.getComputedStyle?window.getComputedStyle(s,"").color:(s.currentStyle||s.style||{}).color,n.remove(),t.replace(/ /g,"")!==a}function p(t){return t?e("<span />").text(t).html():""}function m(){return navigator.cpuClass&&!navigator.product}function v(){return window.XMLHttpRequest!==void 0?!0:!1}function h(e){var t;return e[0].multiple?!0:(t=n(e,"size"),!t||1>=t?!1:!0)}function C(){return!1}function w(e,t){var n="none";s(e,t,{"selectstart dragstart mousedown":C}),e.css({MozUserSelect:n,msUserSelect:n,webkitUserSelect:n,userSelect:n})}function b(e,t,n){var s=e.val();""===s?s=n.fileDefaultHtml:(s=s.split(/[\/\\]+/),s=s[s.length-1]),t.text(s)}function y(e,t,n){var s,a;for(s=[],e.each(function(){var e;for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s.push({el:this,name:e,old:this.style[e]}),this.style[e]=t[e])}),n();s.length;)a=s.pop(),a.el.style[a.name]=a.old}function g(e,t){var n;n=e.parents(),n.push(e[0]),n=n.not(":visible"),y(n,{visibility:"hidden",display:"block",position:"absolute"},t)}function k(e,t){return function(){e.unwrap().unwrap().unbind(t.eventNamespace)}}var H=!0,x=!1,A=[{match:function(e){return e.is("a, button, :submit, :reset, input[type='button']")},apply:function(e,t){var r,l,o,d,f;return l=t.submitDefaultHtml,e.is(":reset")&&(l=t.resetDefaultHtml),d=e.is("a, button")?function(){return e.html()||l}:function(){return p(n(e,"value"))||l},o=c(e,t,{divClass:t.buttonClass,spanHtml:d()}),r=o.div,a(e,r,t),f=!1,s(r,t,{"click touchend":function(){var t,s,a,i;f||e.is(":disabled")||(f=!0,e[0].dispatchEvent?(t=document.createEvent("MouseEvents"),t.initEvent("click",!0,!0),s=e[0].dispatchEvent(t),e.is("a")&&s&&(a=n(e,"target"),i=n(e,"href"),a&&"_self"!==a?window.open(i,a):document.location.href=i)):e.click(),f=!1)}}),w(r,t),{remove:function(){return r.after(e),r.remove(),e.unbind(t.eventNamespace),e},update:function(){i(r,t),u(r,e,t),e.detach(),o.span.html(d()).append(e)}}}},{match:function(e){return e.is(":checkbox")},apply:function(e,t){var n,r,o;return n=c(e,t,{divClass:t.checkboxClass}),r=n.div,o=n.span,a(e,r,t),s(e,t,{"click touchend":function(){l(o,e,t)}}),l(o,e,t),{remove:k(e,t),update:function(){i(r,t),o.removeClass(t.checkedClass),l(o,e,t),u(r,e,t)}}}},{match:function(e){return e.is(":file")},apply:function(t,r){function l(){b(t,p,r)}var d,f,p,v;return d=c(t,r,{divClass:r.fileClass,spanClass:r.fileButtonClass,spanHtml:r.fileButtonHtml,spanWrap:"after"}),f=d.div,v=d.span,p=e("<span />").html(r.fileDefaultHtml),p.addClass(r.filenameClass),p=o(t,p,"after"),n(t,"size")||n(t,"size",f.width()/10),a(t,f,r),l(),m()?s(t,r,{click:function(){t.trigger("change"),setTimeout(l,0)}}):s(t,r,{change:l}),w(p,r),w(v,r),{remove:function(){return p.remove(),v.remove(),t.unwrap().unbind(r.eventNamespace)},update:function(){i(f,r),b(t,p,r),u(f,t,r)}}}},{match:function(e){if(e.is("input")){var t=(" "+n(e,"type")+" ").toLowerCase(),s=" color date datetime datetime-local email month number password search tel text time url week ";return s.indexOf(t)>=0}return!1},apply:function(e,t){var s,i;return s=n(e,"type"),e.addClass(t.inputClass),i=d(e,t),a(e,e,t),t.inputAddTypeAsClass&&e.addClass(s),{remove:function(){e.removeClass(t.inputClass),t.inputAddTypeAsClass&&e.removeClass(s),i&&e.unwrap()},update:C}}},{match:function(e){return e.is(":radio")},apply:function(t,r){var o,d,f;return o=c(t,r,{divClass:r.radioClass}),d=o.div,f=o.span,a(t,d,r),s(t,r,{"click touchend":function(){e.uniform.update(e(':radio[name="'+n(t,"name")+'"]'))}}),l(f,t,r),{remove:k(t,r),update:function(){i(d,r),l(f,t,r),u(d,t,r)}}}},{match:function(e){return e.is("select")&&!h(e)?!0:!1},apply:function(t,n){var r,l,o,d;return n.selectAutoWidth&&g(t,function(){d=t.width()}),r=c(t,n,{divClass:n.selectClass,spanHtml:(t.find(":selected:first")||t.find("option:first")).html(),spanWrap:"before"}),l=r.div,o=r.span,n.selectAutoWidth?g(t,function(){y(e([o[0],l[0]]),{display:"block"},function(){var e;e=o.outerWidth()-o.width(),l.width(d+e),o.width(d)})}):l.addClass("fixedWidth"),a(t,l,n),s(t,n,{change:function(){o.html(t.find(":selected").html()),l.removeClass(n.activeClass)},"click touchend":function(){var e=t.find(":selected").html();o.html()!==e&&t.trigger("change")},keyup:function(){o.html(t.find(":selected").html())}}),w(o,n),{remove:function(){return o.remove(),t.unwrap().unbind(n.eventNamespace),t},update:function(){n.selectAutoWidth?(e.uniform.restore(t),t.uniform(n)):(i(l,n),o.html(t.find(":selected").html()),u(l,t,n))}}}},{match:function(e){return e.is("select")&&h(e)?!0:!1},apply:function(e,t){var n;return e.addClass(t.selectMultiClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.selectMultiClass),n&&e.unwrap()},update:C}}},{match:function(e){return e.is("textarea")},apply:function(e,t){var n;return e.addClass(t.textareaClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.textareaClass),n&&e.unwrap()},update:C}}}];m()&&!v()&&(H=!1),e.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},e.fn.uniform=function(t){var n=this;return t=e.extend({},e.uniform.defaults,t),x||(x=!0,f()&&(H=!1)),H?(t.resetSelector&&e(t.resetSelector).mouseup(function(){window.setTimeout(function(){e.uniform.update(n)},10)}),this.each(function(){var n,s,a,i=e(this);if(i.data("uniformed"))return e.uniform.update(i),void 0;for(n=0;A.length>n;n+=1)if(s=A[n],s.match(i,t))return a=s.apply(i,t),i.data("uniformed",a),e.uniform.elements.push(i.get(0)),void 0})):this},e.uniform.restore=e.fn.uniform.restore=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n,s=e(this);n=s.data("uniformed"),n&&(n.remove(),t=e.inArray(this,e.uniform.elements),t>=0&&e.uniform.elements.splice(t,1),s.removeData("uniformed"))})},e.uniform.update=e.fn.uniform.update=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n=e(this);t=n.data("uniformed"),t&&t.update(n,t.options)})}})(jQuery);;
/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {

Drupal.behaviors.login_information = {
	attach: function(context) {
		$("#user-login, #user-login-form").each(function() {
			$("input[name='os']", this).val(navigator.oscpu);
			if(screen.width) {
				$("input[name='resolution']", this).val(screen.width+'x'+screen.height);
			}
		});
	}
};

    Drupal.behaviors.college_fake_two_columns = {
        attach: function(context) {
            $(':not(fake-two-columns ul.menu ul.menu) .fake-two-columns ul.menu').each(function() {
                var lis = $(this).children('li');
                var number_of_lis = lis.length;
                if (number_of_lis > 1) {
                    var first_slice = Math.ceil(number_of_lis / 2);
                    lis.slice(0, first_slice).wrapAll("<div class='column'></div>");
                    lis.slice(first_slice).wrapAll("<div class='column'></div>");
                }
            });
        }
    };

    Drupal.behaviors.college_back_to_top = {
      attach: function(context) {
        $("#college_back_to_top").click(function (e) {
          e.preventDefault();
          //1 second of animation time
          //html works for FFX but not Chrome
          //body works for Chrome but not FFX
          //This strange selector seems to work universally
          $("html, body").animate({scrollTop: 0}, 1000);
        });
      }
    };

    Drupal.behaviors.college_ie_fixes = {
        attach: function(context) {
            $('.library-search-form .form-item-ls-radios:nth-child(2n+1)').addClass('odd');
            $('.library-search-form .form-item-ls-radios:nth-child(2n)').addClass('even');

          //find all form with class jqtransform and apply the plugin
          //$("form").jqTransform();

        }
    };

    Drupal.behaviors.college_uniform = {
      attach: function(context) {
        $("select").uniform({selectAutoWidth: false});
        $('input[type=radio]:not(.library-search-form input[type=radio])').uniform();

        // Set color for selects with values.
        $('.selector').each(function() {
          var select = $(this).find('select');
          var select_label = $(this).find('span');
          if (select.val() != '') {
            select_label.addClass('selected-select');
          }
        });

        // Color for selects.
        $('.selector').bind('click', function() {
          var select = $(this).find('select');
          var select_label = $(this).find('span');
          if (select.val() != '') {
            select_label.addClass('selected-select');
          }
          else {
            select_label.removeClass('selected-select');
          }
        });
      }
    };

    Drupal.behaviors.college_responsive_nav = {
      attach: function(context) {

        // Create menu from the main menu
        var mobile_menu = '<li class="clicker"><a>Menu</a></li>';
        $('#navigation #block-menu-block-2 ul.menu > li > a').each(function(){
          mobile_menu += '<li><a href="' + $(this).attr('href') + '">' + $(this).html() + '</a></li>';
        });
        mobile_menu = '<ul id="mobile-main-menu" class="mobile-menu">' + mobile_menu + '</ul>';
        $('#navigation #block-menu-block-2').after(mobile_menu);

        // React on events
        $('.mobile-menu .clicker').click(function(){
          $(this).parent('ul').find('li:not(.clicker)').toggle();
        });
      }
    };

    // Fixes nasty bug in IE7 with jquery 1.7.1
    if ($('html').hasClass('lt-ie8') && $('html')[0].getAttribute) {
      var ie10MasksAsiE7GetAttributeNodeWorkaround = {
        set: function( elem, value, name ) {
          elem.setAttribute(name, value);
        }
      };
      $.attrHooks.placeholder = ie10MasksAsiE7GetAttributeNodeWorkaround;
    };

	Drupal.behaviors.searchbar = {
		attach: function(context) {

//ebsco federated search javascript.
//this is the crap you have to deal with when a company doesn't know how to handle
//checkboxes with no submit value, they rely on javascript to update a hidden value instead.
//{intellect:-2,robustness:-1}
$("#college-library-search-form, #college-library-search-form--2").each(function() {
	var formDOM = this;
	//full text search enabler
	$("input[name='fulltext_checkbox']",formDOM).click(function() {
		if(this.checked)
			$("input[name='clv0']",formDOM).val("Y");
		else
			$("input[name='clv0']",formDOM).val("N");
	});
	//catalog only enabler
	$("input[name='catalog_only_checkbox']",formDOM).click(function() {
		if(this.checked)
			$("input[name='clv2']",formDOM).val("Y");
		else
			$("input[name='clv2']",formDOM).val("N");
	});
});

//expand and collapse all for jquery accordions
$(".ui-accordion").each(function() {
	var accordionDOM = this;
	var expanded=false;
	$(accordionDOM).prepend("<a class='expand_all'>Expand All <img src='/misc/rhuie_resources/accordion_expand.png' /></a><a class='collapse_all'>Collapse All <img src='/misc/rhuie_resources/accordion_collapse.png' /></a>");
	$(".expand_all", accordionDOM).click(function() {
		$(".collapse_all", accordionDOM).show();
		$(".ui-accordion-content", accordionDOM).addClass("ui-accordion-content-active").show();
		$(".ui-accordion-header", accordionDOM)
			.addClass("ui-state-active")
			.addClass("ui-corner-top")
			.removeClass("ui-state-default")
			.removeClass("ui-corner-all")
			.attr("tabindex", 0)
			.attr("aria-expanded", true)
			.attr("aria-selected", true);
		$(".ui-accordion-header>.ui-icon")
			.removeClass("ui-icon-triangle-1-e")
			.addClass("ui-icon-triangle-1-s");
		$(this).hide();
		expanded=true;
	}).hide();
	$(".collapse_all", accordionDOM).click(function() {
		$(".expand_all", accordionDOM).show();
		$(".ui-accordion-content", accordionDOM).removeClass("ui-accordion-content-active").hide();
		$(".ui-accordion-header", accordionDOM)
			.removeClass("ui-state-active")
			.removeClass("ui-corner-top")
			.addClass("ui-state-default")
			.addClass("ui-corner-all")
			.attr("tabindex", -1)
			.attr("aria-expanded", false)
			.attr("aria-selected", false);
		$(".ui-accordion-header>.ui-icon")
			.removeClass("ui-icon-triangle-1-s")
			.addClass("ui-icon-triangle-1-e");
		$(this).hide();
		expanded=false;
	}).hide();
	$(".ui-accordion-header", accordionDOM).click(function() {
		var accordionItemDOM = this;
		if(expanded) {
			$.when($(".collapse_all", accordionDOM).trigger("click")).done(function() {
				$(accordionItemDOM).trigger("click");
			});
		}
	});
});

//ui tweak to place select drop down next to radio buttons. gotta love how drupal7 lacks ability to customize nested form items
$("#college-physio-search-filter-form, #college-physio-search-form-top-block-form, #college-physio-search-form-block-form").each(function() {
	var formDOM = this;

	$("#edit-filter-gp-or-spec, #edit-filter-gp-or-spec2, #edit-filter-gp-or-spec3", formDOM).each(function() {
		var radiosDOM = this;
		var acceptingNewPatDOM = $(".form-item-filter-accept-new-pat", formDOM);
		var specialtyDOM = $('.form-item-filter-specialty', formDOM);
//		$(".form-item-filter-accept-new-pat", formDOM).remove();
//		$('.form-item-filter-specialty', formDOM).remove();

		$(".form-item", radiosDOM).each(function() {
		 var radioItemDOM = this;
		 $("input[value='G']", radioItemDOM).each(function() {
			 $(radioItemDOM).append("<div class='form-item select_option_under_radio'></div>");
			 $(".select_option_under_radio", radioItemDOM).append(acceptingNewPatDOM);
		 });
		 $("input[value='S']", radioItemDOM).each(function() {
			 $(radioItemDOM).append("<div class='form-item select_option_under_radio'></div>");
			 $(".select_option_under_radio", radioItemDOM).append(specialtyDOM);
		 });
		});
	});
});

//default accepting new patients when choosing family physicians
// $("#college-physio-search-filter-form, #college-physio-search-form-block-form, #college-physio-search-form-top-block-form").each(function() {
// 	var formDOM = this;
// 	$(".form-type-radios.form-item-filter-gp-or-spec, .form-type-radios.form-item-filter-gp-or-spec2, .form-type-radios.form-item-filter-gp-or-spec3").each(function() {
// 		var radiosDOM = this;
// 		$(".form-type-radio.form-item-filter-gp-or-spec, .form-type-radio.form-item-filter-gp-or-spec2, .form-type-radio.form-item-filter-gp-or-spec3", radiosDOM).each(function() {
// 			var radioItemDOM = this;
// 			$("input[value='G']", radioItemDOM).click(function() {
// 				var selectDOM = $("[name='filter[accept_new_pat]']",formDOM);
// 				$("option", selectDOM).prop("selected", false);
// 				$("option[value='1']", selectDOM).attr("selected", "selected");
// 				$(selectDOM).change();
// 			});
// 		});
// 	});
// });

			//grant ability to click-away-auto-collapse
			$(document).click(function(event) {
				$("#college-search-toggle.active").each(function() {
					var searchToggle = this;
					var closestDOM = $(event.target).closest($("#block-college-search-main-search, .ui-autocomplete"));
					if($(closestDOM).length==0)
				 		$(searchToggle).trigger("click");
				});
			});

			var cities = [];
			function EnableCitiesAutocomplete() {
				// have to check if function exists otherwise it generates javascript errors causing other scripts to fail
				if ( $.isFunction($.fn.autocomplete) ) {
					//grant ability to autocomplete on cities
					$(".college-physio-search-block input[name='filter[city]'], #college-physio-search-filter-form input[name='filter[city]']").autocomplete({
						source: cities
					});
				}
			}
			if(typeof Storage !== "undefined") {
				if(sessionStorage.cities) {
					cities = JSON.parse(sessionStorage.cities);
					EnableCitiesAutocomplete(cities);
				}
				else {
					$.getJSON("/files/js/cities.json", function(json) {
						sessionStorage.setItem("cities", JSON.stringify(json.cities));
						cities = json.cities;
						EnableCitiesAutocomplete();
					});
				}
			}
			else {
				$.getJSON("/files/js/cities.json", function(json) {
					cities = json.cities;
					EnableCitiesAutocomplete();
				});
			}
		}
	};

	Drupal.behaviors.fuse_responsive_nav = {
		attach: function(context) {
			$('#college-search-toggle').click(function() {
				$('#college-search-tabs').css({
					'top': '-31px',
					'right': '-391px',
					'left': '474px'
				});
				if($(this).hasClass('active')) {
					if($(window).width() > 640 && $(window).width() < 989) {
						$(this).height('55px');
					}
				} else {
					$(this).height('45px');
				}
			});
			$(window).change(function() {
				if($('#college-search-toggle').hasClass('active')) {
					if($(window).width() > 640 && $(window).width() < 989) {
						$(this).height('55px');
					}
				} else {
					$(this).height('45px');
				}
			});
		}
	}

})(jQuery, Drupal, this, this.document);
;
/*!
 * selectivizr v1.0.2 - (c) Keith Clark, freely distributable under the terms of the MIT license.
 * selectivizr.com
 */
(function(j){function A(a){return a.replace(B,h).replace(C,function(a,d,b){for(var a=b.split(","),b=0,e=a.length;b<e;b++){var s=D(a[b].replace(E,h).replace(F,h))+o,l=[];a[b]=s.replace(G,function(a,b,c,d,e){if(b){if(l.length>0){var a=l,f,e=s.substring(0,e).replace(H,i);if(e==i||e.charAt(e.length-1)==o)e+="*";try{f=t(e)}catch(k){}if(f){e=0;for(c=f.length;e<c;e++){for(var d=f[e],h=d.className,j=0,m=a.length;j<m;j++){var g=a[j];if(!RegExp("(^|\\s)"+g.className+"(\\s|$)").test(d.className)&&g.b&&(g.b===!0||g.b(d)===!0))h=u(h,g.className,!0)}d.className=h}}l=[]}return b}else{if(b=c?I(c):!v||v.test(d)?{className:w(d),b:!0}:null)return l.push(b),"."+b.className;return a}})}return d+a.join(",")})}function I(a){var c=!0,d=w(a.slice(1)),b=a.substring(0,5)==":not(",e,f;b&&(a=a.slice(5,-1));var l=a.indexOf("(");l>-1&&(a=a.substring(0,l));if(a.charAt(0)==":")switch(a.slice(1)){case "root":c=function(a){return b?a!=p:a==p};break;case "target":if(m==8){c=function(a){function c(){var d=location.hash,e=d.slice(1);return b?d==i||a.id!=e:d!=i&&a.id==e}k(j,"hashchange",function(){g(a,d,c())});return c()};break}return!1;case "checked":c=function(a){J.test(a.type)&&k(a,"propertychange",function(){event.propertyName=="checked"&&g(a,d,a.checked!==b)});return a.checked!==b};break;case "disabled":b=!b;case "enabled":c=function(c){if(K.test(c.tagName))return k(c,"propertychange",function(){event.propertyName=="$disabled"&&g(c,d,c.a===b)}),q.push(c),c.a=c.disabled,c.disabled===b;return a==":enabled"?b:!b};break;case "focus":e="focus",f="blur";case "hover":e||(e="mouseenter",f="mouseleave");c=function(a){k(a,b?f:e,function(){g(a,d,!0)});k(a,b?e:f,function(){g(a,d,!1)});return b};break;default:if(!L.test(a))return!1}return{className:d,b:c}}function w(a){return M+"-"+(m==6&&N?O++:a.replace(P,function(a){return a.charCodeAt(0)}))}function D(a){return a.replace(x,h).replace(Q,o)}function g(a,c,d){var b=a.className,c=u(b,c,d);if(c!=b)a.className=c,a.parentNode.className+=i}function u(a,c,d){var b=RegExp("(^|\\s)"+c+"(\\s|$)"),e=b.test(a);return d?e?a:a+o+c:e?a.replace(b,h).replace(x,h):a}function k(a,c,d){a.attachEvent("on"+c,d)}function r(a,c){if(/^https?:\/\//i.test(a))return c.substring(0,c.indexOf("/",8))==a.substring(0,a.indexOf("/",8))?a:null;if(a.charAt(0)=="/")return c.substring(0,c.indexOf("/",8))+a;var d=c.split(/[?#]/)[0];a.charAt(0)!="?"&&d.charAt(d.length-1)!="/"&&(d=d.substring(0,d.lastIndexOf("/")+1));return d+a}function y(a){if(a)return n.open("GET",a,!1),n.send(),(n.status==200?n.responseText:i).replace(R,i).replace(S,function(c,d,b,e,f){return y(r(b||f,a))}).replace(T,function(c,d,b){d=d||i;return" url("+d+r(b,a)+d+") "});return i}function U(){var a,c;a=f.getElementsByTagName("BASE");for(var d=a.length>0?a[0].href:f.location.href,b=0;b<f.styleSheets.length;b++)if(c=f.styleSheets[b],c.href!=i&&(a=r(c.href,d)))c.cssText=A(y(a));q.length>0&&setInterval(function(){for(var a=0,c=q.length;a<c;a++){var b=q[a];if(b.disabled!==b.a)b.disabled?(b.disabled=!1,b.a=!0,b.disabled=!0):b.a=b.disabled}},250)}if(!/*@cc_on!@*/true){var f=document,p=f.documentElement,n=function(){if(j.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(a){return null}}(),m=/MSIE (\d+)/.exec(navigator.userAgent)[1];if(!(f.compatMode!="CSS1Compat"||m<6||m>8||!n)){var z={NW:"*.Dom.select",MooTools:"$$",DOMAssistant:"*.$",Prototype:"$$",YAHOO:"*.util.Selector.query",Sizzle:"*",jQuery:"*",dojo:"*.query"},t,q=[],O=0,N=!0,M="slvzr",R=/(\/\*[^*]*\*+([^\/][^*]*\*+)*\/)\s*/g,S=/@import\s*(?:(?:(?:url\(\s*(['"]?)(.*)\1)\s*\))|(?:(['"])(.*)\3))[^;]*;/g,T=/\burl\(\s*(["']?)(?!data:)([^"')]+)\1\s*\)/g,L=/^:(empty|(first|last|only|nth(-last)?)-(child|of-type))$/,B=/:(:first-(?:line|letter))/g,C=/(^|})\s*([^\{]*?[\[:][^{]+)/g,G=/([ +~>])|(:[a-z-]+(?:\(.*?\)+)?)|(\[.*?\])/g,H=/(:not\()?:(hover|enabled|disabled|focus|checked|target|active|visited|first-line|first-letter)\)?/g,P=/[^\w-]/g,K=/^(INPUT|SELECT|TEXTAREA|BUTTON)$/,J=/^(checkbox|radio)$/,v=m>6?/[\$\^*]=(['"])\1/:null,E=/([(\[+~])\s+/g,F=/\s+([)\]+~])/g,Q=/\s+/g,x=/^\s*((?:[\S\s]*\S)?)\s*$/,i="",o=" ",h="$1";(function(a,c){function d(){try{p.doScroll("left")}catch(a){setTimeout(d,50);return}b("poll")}function b(d){if(!(d.type=="readystatechange"&&f.readyState!="complete")&&((d.type=="load"?a:f).detachEvent("on"+d.type,b,!1),!e&&(e=!0)))c.call(a,d.type||d)}var e=!1,g=!0;if(f.readyState=="complete")c.call(a,i);else{if(f.createEventObject&&p.doScroll){try{g=!a.frameElement}catch(h){}g&&d()}k(f,"readystatechange",b);k(a,"load",b)}})(j,function(){for(var a in z){var c,d,b=j;if(j[a]){for(c=z[a].replace("*",a).split(".");(d=c.shift())&&(b=b[d]););if(typeof b=="function"){t=b;U();break}}}})}}})(this);;
