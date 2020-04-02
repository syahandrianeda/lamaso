$(document).ready(function() {
onLoadLamaso();
    (function($){
        $.extend({
            APP : {                
                formatTimer : function(a) {
                    if (a < 10) {
                        a = '0' + a;
                    }                              
                    return a;
                },    
                startTimer : function(dir) {
                    var a;
                    // save type
                    $.APP.dir = dir;
                    // get current date
                    $.APP.d1 = new Date();
                    switch($.APP.state) {
                        case 'pause' :
                            // resume timer
                            // get current timestamp (for calculations) and
                            // substract time difference between pause and now
                            $.APP.t1 = $.APP.d1.getTime() - $.APP.td;                            
                        break;
                        default :
                            // get current timestamp (for calculations)
                            $.APP.t1 = $.APP.d1.getTime(); 
                            // if countdown add ms based on seconds in textfield
                            if ($.APP.dir === 'cd') {
                                $.APP.t1 += parseInt($('#cd_seconds').val())*60000;
                            }    
                        break;
                    }                                   
                    // reset state
                    $.APP.state = 'alive';   
                    $('#' + $.APP.dir + '_status').html('Durasi Waktu Masih Berjalan');
                    // start loop
                    $.APP.loopTimer();
                },
                pauseTimer : function() {
                    // save timestamp of pause
                    $.APP.dp = new Date();
                    $.APP.tp = $.APP.dp.getTime();
                    // save elapsed time (until pause)
                    $.APP.td = $.APP.tp - $.APP.t1;
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Berhenti dari Jeda');
                    // set state
                    $.APP.state = 'pause';
                    $('#' + $.APP.dir + '_status').html('Jeda');
                },
                stopTimer : function() {
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Mulai Lagi'); 
                    // set state
                    $.APP.state = 'stop';
                    $('#' + $.APP.dir + '_status').html('Selesai');
                },
                resetTimer : function() {
					// reset display
                    $('#' + $.APP.dir + '_ms,#' + $.APP.dir + '_s,#' + $.APP.dir + '_m,#' + $.APP.dir + '_h').html('00');                 
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Mulai Lagi!');                    
                    // set state
                    $.APP.state = 'reset';  
                    $('#' + $.APP.dir + '_status').html('Setel ulang waktu untuk mengerjakan');
                },
                endTimer : function(callback) {
                    // change button value
                    $('#' + $.APP.dir + '_start').val('Mulai Lagi');
                    // set state
                    $.APP.state = 'end';
                    // invoke callback
                    if (typeof callback === 'function') {
                        callback();
						$("#nilaiku").show();
                    }    
                },    
                loopTimer : function() {
                    var td;
                    var d2,t2;
                    var ms = 0;
                    var s  = 0;
                    var m  = 0;
                    var h  = 0;
                    if ($.APP.state === 'alive') {
                        // get current date and convert it into 
                        // timestamp for calculations
                        d2 = new Date();
                        t2 = d2.getTime();   
                        // calculate time difference between
                        // initial and current timestamp
                        if ($.APP.dir === 'sw') {
                            td = t2 - $.APP.t1;
                        // reversed if countdown
                        } else {
                            td = $.APP.t1 - t2;
                            if (td <= 0) {
                                // if time difference is 0 end countdown
                                $.APP.endTimer(function(){
                                    $.APP.resetTimer();
                                    $('#' + $.APP.dir + '_status').html('Ulangi Latihan');
                                });
                            }    
                        }    
                        // calculate milliseconds
                        ms = td%1000;
                        if (ms < 1) {
                            ms = 0;
                        } else {    
                            // calculate seconds
                            s = (td-ms)/1000;
                            if (s < 1) {
                                s = 0;
                            } else {
                                // calculate minutes   
                                var m = (s-(s%60))/60;
                                if (m < 1) {
                                    m = 0;
                                } else {
                                    // calculate hours
                                    var h = (m-(m%60))/60;
                                    if (h < 1) {
                                        h = 0;
                                    }                             
                                }    
                            }
                        }
                        // substract elapsed minutes & hours
                        ms = Math.round(ms/100);
                        s  = s-(m*60);
                        m  = m-(h*60);                                
                        // update display
                        $('#' + $.APP.dir + '_ms').html($.APP.formatTimer(ms));
                        $('#' + $.APP.dir + '_s').html($.APP.formatTimer(s));
                        $('#' + $.APP.dir + '_m').html($.APP.formatTimer(m));
                        $('#' + $.APP.dir + '_h').html($.APP.formatTimer(h));
                        // loop
                        $.APP.t = setTimeout($.APP.loopTimer,1);
                    } else {
                        // kill loop
                        clearTimeout($.APP.t);
                        return true;
                    
                    }  
                    
                }
                    
            }    
        
        });
          
        $('#sw_start').live('click', function() {
            $.APP.startTimer('sw');
        });    

        $('#cd_start,#cd_start2').live('click', function() {
            $.APP.startTimer('cd');
			 				$('#tempatsoal') .show();
			var nama=document.namaku.panggilsaya.value;
	document.getElementById("demo2").innerHTML = nama;
			var idmapel = document.getElementById("temamapel").innerHTML;
			document.getElementById("mataujian").innerHTML = idmapel;
        });           
        
        $('#sw_stop,#cd_stop').live('click', function() {
            $.APP.stopTimer();
			$('#nilaiku').show();
			$('#tempatsoal') .hide();
			$('#home') .hide ();
			DaftarEviden();
			DaftarNilai();
			benarEssay(BanyakSoalEssay);
			//$('.kepembahasan') .show ();
			$('#tentangLamaso') .show ();
		Tanggal();
		
        });
        
        $('#sw_reset,#cd_reset').live('click', function() {
            $.APP.resetTimer();
        });  
        
        $('#sw_pause,#cd_pause').live('click', function() {
            $.APP.pauseTimer();
        });                
                
    })(jQuery);

	$ ('.kelatihan') .click (function () {
		$ ('#home') .hide (function (){; 
		$('#latihan') .hide ();
		$('#tempatsoal') .show();
		$('#pembahasan').hide();
		$('#tempatpembahasan').hide();
		$('#tentangLamaso').hide();
		$('#tentangLamaso2').hide();
		
		
		});
	});
	$('.kehome').click (function(){
		$('#latihan').hide(function(){
			$('#home').show();
			$('#tempatsoal') .hide();
			$('#pembahasan').hide();
			$('#tentangLamaso').hide();
			$('#tempatpembahasan').hide();
			$('#tentangLamaso2').hide();
})
			});
	$('.kepembahasan').click (function(){
		$('#latihan').hide(function(){
			$('#pembahasan') .show();
			$('#tempatpembahasan').show();
			$('#home').hide();
			$('#tentangLamaso').hide();
			$('#tentangLamaso2').hide();
			$('#tempatsoal') .hide();})
			});
	$('.ketentangLamaso').click(function(){
		$('#tentangLamaso').show(function(){
			$('#pembahasan').hide();
			$('#tempatpembahasan').hide();
			$('#home').show();
			$('#latihan').hide();
			$('#tentangLamaso').show();
			$('#tentangLamaso2').hide();
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera;
			$('#tempatsoal') .hide();
			});
			});
	$('.ketentangLamaso2').click(function(){
		$('#tentangLamaso2').show(function(){
			$('#pembahasan').hide();
			$('#tempatpembahasan').hide();
			$('#home').hide();
			$('#latihan').hide();
			$('#tentangLamaso').hide();
			$('#tentangLamaso2').show();
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera;
			$('#tempatsoal') .hide();
			});
			});

	$('.bukalinkclass').click(function(){
		$('#bukalink').hide(function(){
			$('#tentangLamaso').show();
			$('#tentangLamaso2').show()
			$('#bukalink').show();
			$('#bukalink2').show();
			});
			var NoHP = document.formWA.noWAnya.value;
				document.getElementById("nomerWA").innerHTML=NoHP;
			var linkkuini = document.getElementById("bukalink").textContent;
				document.getElementById("urlWA").href = linkkuini;
				document.getElementById("urlWA").innerHTML = "Kirim hasil ini ke Whatsaap";
			var input = document.getElementsByClassName("icon btn-icon icon-send");//Grabs the send button
				input[0].click();// Clicks the send button				
			
				});
				
	$('#latihan') .hide ();
	$('#tempatsoal') .hide();
	$('#pembahasan') .hide();
	$('#tempatpembahasan').hide();
	$('#tentangLamaso').hide();
	$('#tentangLamaso2').hide()
	$('#bukalink').hide();
	$('#bukalink2').hide();

$(".ceknilai").click(function(){
    $("#nilaiku").show();
	$("#tempatdurasi:hover").show();
	
	
  });
$("#nilaiku") .hide();

 		

	
	
	});
