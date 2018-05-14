$(window).load(function() {
            $(".loader").fadeOut("slow");
          })
          //click icon 1
          $('#icon1').click(function()
                              {
                                    $('#overlaypage').css('display', 'block');
                                    $('#pops').css('display', 'block');
                                    $('#closebtn').css('display', 'block');
                                    TweenMax.from($('#pops'), 2, { scaleX:0.5, scaleY:0.5, alpha:0, ease:Elastic.easeOut});
                                    TweenMax.from($('#btnclose'), 1 , {scaleX:0, scaleY:0, ease:Elastic.easeOut});
                                });
          
          $('#icon2').click(function()
                              {
                                    $('#overlaypage').css('display', 'block');
                                    $('#aboutpage').css('display', 'block');
                                    $('#closebtn').css('display', 'block');
                                    TweenMax.from($('#aboutpage'), 2, { scaleX:0.5, scaleY:0.5, alpha:0, ease:Elastic.easeOut});
                                    TweenMax.from($('#btnclose'), 1 , {scaleX:0, scaleY:0, ease:Elastic.easeOut});
                                });
          
           $('#icon3').click(function()
                              {
                                    $('#overlaypage').css('display', 'block');
                                    $('#newspage').css('display', 'block');
                                    $('#closebtn').css('display', 'block');
                                    TweenMax.from($('#newspage'), 2, { scaleX:0.5, scaleY:0.5, alpha:0, ease:Elastic.easeOut});
                                    TweenMax.from($('#btnclose'), 1 , {scaleX:0, scaleY:0, ease:Elastic.easeOut});
                                });
          
           $('#icon4').click(function()
                              {
                                    $('#overlaypage').css('display', 'block');
                                    $('#contactpage').css('display', 'block');
                                    $('#closebtn').css('display', 'block');
                                    TweenMax.from($('#contactpage'), 2, { scaleX:0.5, scaleY:0.5, alpha:0, ease:Elastic.easeOut});
                                    TweenMax.from($('#btnclose'), 1 , {scaleX:0, scaleY:0, ease:Elastic.easeOut});
                                });
          
          
          //Click the close button
           $('#btnclose').click(function()
                              {
                                    $('#overlaypage').css('display', 'block');
                                    $('#pops').css('display', 'none');
                                    $('#contactpage').css('display', 'none');
                                    $('#newspage').css('display', 'none');
                                    $('#aboutpage').css('display', 'none');
                                    $('#closebtn').css('display', 'none');
                                    $('#overlaypage').css('display', 'none');
                                });
          
          $('#overlaypage').click(function()
                              {
                                    $('#pops').css('display', 'none');
                                    $('#overlaypage').css('display', 'none');
                                    $('#contactpage').css('display', 'none');
                                    $('#newspage').css('display', 'none');
                                    $('#aboutpage').css('display', 'none');
                                    $('#closebtn').css('display', 'none');
                                });
          
          //button popup
         
          $('#icon1').mouseover(function(){TweenMax.to($('#icon1'), 1 , {scaleX:1.15, scaleY:1.15, ease:Elastic.easeOut});});
          $('#icon2').mouseover(function(){TweenMax.to($('#icon2'), 1 , {scaleX:1.15, scaleY:1.15, ease:Elastic.easeOut});});
          $('#icon3').mouseover(function(){TweenMax.to($('#icon3'), 1 , {scaleX:1.15, scaleY:1.15, ease:Elastic.easeOut});});
          $('#icon4').mouseover(function(){TweenMax.to($('#icon4'), 1 , {scaleX:1.1, scaleY:1.15, ease:Elastic.easeOut});});
          $('#btnclose').mouseover(function(){TweenMax.to($('#btnclose'), 1 , {scaleX:1.35, scaleY:1.35, ease:Strong.easeOut});});
          
          $('#icon1').mouseout(function(){TweenMax.to($('#icon1'), 1 , {scaleX:1, scaleY:1, ease:Elastic.easeOut});});
          $('#icon2').mouseout(function(){TweenMax.to($('#icon2'), 1 , {scaleX:1, scaleY:1, ease:Elastic.easeOut});});
          $('#icon3').mouseout(function(){TweenMax.to($('#icon3'), 1 , {scaleX:1, scaleY:1, ease:Elastic.easeOut});});
          $('#icon4').mouseout(function(){TweenMax.to($('#icon4'), 1 , {scaleX:1, scaleY:1, ease:Elastic.easeOut});});
          $('#btnclose').mouseout(function(){TweenMax.to($('#btnclose'), 1 , {scaleX:1, scaleY:1, ease:Strong.easeOut});});
         
          
            var r = document.getElementById("icon1");
            var pop = document.getElementById("pops");
            var lols = document.getElementById("icon2");
            var lols2 = document.getElementById("icon3");
            var lols3 = document.getElementById("icon4");
            var logo = document.getElementById("mainLogo");
            //Draggable.create($('#pops'), {type: "x,y", edgeResistance:0.5, throwProps: true, bounds:window});
            TweenMax.to(logo, 1 , {scaleY:0.9, scaleX:0.9, ease:Sine.easeInOut, yoyo:true, repeat:3, delay:4});


                $(function(){
                    $(".digits").countdown({
                      image: "img/digits.png",
                      format: "dd:hh:mm:ss",
                      endTime: new Date(2015, 03, 27)
                    });
                  });