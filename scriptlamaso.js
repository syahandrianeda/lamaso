
function onLoadLamaso() {
var inLamasoSatu = "<div ";
var inLamasoDua = "id='logolamaso'>";
var inLamasoNyelip ="<img ";
var inLamasoTiga = "class='gambarlamaso3' ";
var inLamasoEmpat = "src='https://1.bp.blogspot.com/-9uzes4dI8qo/Xm2gZky2jzI/AAAAAAAAPEQ/ZWXKDf7nj5Em9L4KBTxz8Qdu-ePHS3TRQCLcBGAsYHQ/s1600/LOGO-LAMASO_BARU.png'";
var inLamasoLima  = "/></div><hr/>";
var textLamaso = inLamasoSatu + inLamasoDua + inLamasoNyelip + inLamasoTiga + inLamasoEmpat + inLamasoLima;
var teksasal =document.getElementById("home").innerHTML;

document.getElementById("home").innerHTML = textLamaso + teksasal;
  
  }

function identitasku(){
var nama=document.namaku.panggilsaya.value;
    document.getElementById("demo").innerHTML = nama;
	$ ('#home') .show (function (){; 
		$('#latihan') .show ();
		$('#tempatsoal') .show();
		$('#pembahasan').hide();
		$('#tempatpembahasan').hide();
	  });
}
			/* WaktuMengerjakan */
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  };
  return i;
}			

function Tanggal() {

  var d = new Date();
  var n = addZero(d.getDate());
  var y = d.getFullYear();
  var m = addZero(d.getMonth()+1);
  var j = addZero(d.getHours());
  var mnt = addZero(d.getMinutes());
  document.getElementById("WaktuMengerjakan").innerHTML = "Tgl " + n +"/" + m + "/" + y + " Pkl. " + j + ":" + mnt;
}

function jawabanessay(idSoal){
	var jawabanku = document.getElementById("jawaban" + idSoal).value;
	var jawabankuberspasi = jawabanku.replace(/\n/g, "<br/>");
	document.getElementById("daftarjawaban" + idSoal).innerHTML = jawabankuberspasi;//daftarjawabanasal + "<p>" + jawabanku + "</p>";
	var kuncijawaban = document.getElementById("kunci" + idSoal).innerHTML;
	var benaratausalah;
	//var banyakbenar=0;
	if (jawabanku!=kuncijawaban) {benaratausalah="Salah"}
		else{benaratausalah="Benar"};
		document.getElementById("skor" + idSoal).innerHTML = benaratausalah;
				//var score = 0;
				//		$(".calc:checked").each(function(){
				//			score+=parseFloat($(this).val(),10);
				//		});
				//	score = score.toFixed(2);
				//	banyakbenar = banyakbenar.toFixed(2)
				//		$("input[name=sum]").val(score);
				//	$().ready(function(){
				//	$(".calc").change(function(){
				//	calcscore();
				//	});
				
};	
				//	document.getElementById("benarga").innerHTML = banyakbenar;
function hapusjawabanessay(idSoal){	
document.getElementById("jawaban" + idSoal).value="";
document.getElementById("skor" + idSoal).innerHTML = "";
document.getElementById("daftarjawaban" + idSoal).innerHTML="";//<img id='image-preview'" + idSoal + " class='gambarlamaso3' alt='image preview1'/>";
};	

function jawabanessaylatihan(idSoal){
	
	var jawabanku = document.getElementById("jawabanlatihan" + idSoal).value;
		var jawabankuberspasi = jawabanku.replace(/\n/g, "<br/>");
	document.getElementById("daftarjawabanlatihan" + idSoal).innerHTML = jawabankuberspasi;
	
	var kuncijawaban = document.getElementById("kuncilatihan" + idSoal).innerHTML;
	var benaratausalah;
	//var banyakbenar=0;
	if (jawabanku!=kuncijawaban) {benaratausalah="Salah"}
		else{benaratausalah="Benar"};
		document.getElementById("skorlatihan" + idSoal).innerHTML = benaratausalah;
		document.getElementById("penyelesaianlatihan"+idSoal).style.display="block";
		document.getElementById("jawabanlatihansebenarnya"+idSoal).innerHTML=kuncijawaban;
		document.getElementById("jawabanlatihansebenarnya"+idSoal).style.display="block";
				//var score = 0;
				//		$(".calc:checked").each(function(){
				//			score+=parseFloat($(this).val(),10);
				//		});
				//	score = score.toFixed(2);
				//	banyakbenar = banyakbenar.toFixed(2)
				//		$("input[name=sum]").val(score);
				//	$().ready(function(){
				//	$(".calc").change(function(){
				//	calcscore();
				//	});
				
};	
				//	document.getElementById("benarga").innerHTML = banyakbenar;
function hapusjawabanessaylatihan(idSoal){
document.getElementById("jawabanlatihan" + idSoal).value="";document.getElementById("penyelesaianlatihan"+idSoal).style.display="none";document.getElementById("skorlatihan" + idSoal).innerHTML = "";document.getElementById("daftarjawabanlatihan" + idSoal).innerHTML="";document.getElementById("jawabanlatihansebenarnya"+idSoal).style.display="none"}

function benarEssay(banyaksoal){
	var banyakbenar=0;
	//var banyaksoal=10 ;
	var TeksHTML="";
	
		for (i=1; i< banyaksoal+1 ; i++){
			
			var benargaya=document.getElementById("skor"+i).innerHTML;
			//var benargaya="Akan dikoreksi Guru" //document.getElementById("skor"+i).innerHTML;
			var isiansiswa=document.getElementById("daftarjawaban"+i).innerHTML;
				if (benargaya!="Benar"){banyakbenar}
				else{banyakbenar+=1};
				//banyaksoal+= document.getElementById("skor"+i).innerHTML +"<br/>"
			//if (i!=0){TeksHTML+="<span>" + i + " " + isiansiswa + " " + benargaya + "</span><p/>";} //kode ini kalo ada nilai benar dan salahnya
			if (i!=0){TeksHTML+="<span>" + i + " " + isiansiswa + " </span><p/>";} // kode ini tanpa harus ada benar dan salahnya
			//document.getElementById("apaini").innerHTML += document.write("<span>" + i + " jawabannya " + benargaya + "</span><br/>");
			};
	document.getElementById("benarga").innerHTML = ((banyakbenar/banyaksoal)*100).toFixed(2);
	
	//document.getElementById("apaini").innerHTML = banyakbenar;
	document.getElementById("apaini").outerHTML = TeksHTML;
}

function DaftarNilai() {
  var KonversiABC;var KoleksiABCD = ["A",	"B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D","A","B","C","D"];var KonversiNosoal = ["1","1","1","1","2","2","2","2","3","3","3","3","4","4","4","4","5","5","5","5","6","6","6","6","7","7","7","7","8","8","8","8","9","9","9","9","10","10","10","10","11","11","11","11","12","12","12","12","13","13","13","13","14","14","14","14","15","15","15","15","16","16","16","16","17","17","17","17","18","18","18","18","19","19","19","19","20","20","20","20","21","21","21","21","22","22","22","22","23","23","23","23","24","24","24","24","25","25","25","25","26","26","26","26","27","27","27","27","28","28","28","28","29","29","29","29","30","30","30","30","31","31","31","31","32","32","32","32","33","33","33","33","34","34","34","34","35","35","35","35","36","36","36","36","37","37","37","37","38","38","38","38","39","39","39","39","40","40","40","40",];

		document.getElementById("daftarnya1").innerHTML="" ; //kosongkan setiap kali update
             var elek = document.getElementsByClassName("calc"); 
			 var jumlahsoalbaru = elek.length/4;
			 document.getElementById("banyakelek").innerHTML =jumlahsoalbaru + " soal PG.";
			
			var jumlahbenarbaru = 0;
			var nodijawab = 0;
			 for(i = 0; i < elek.length; i++) {
			if(elek[i].checked) {
					
					var skorNilaiOpsi = keyanswer[i];//elek[i].value;
					var benarsalah;
					if (skorNilaiOpsi != 0) {benarsalah="Benar";
						jumlahbenarbaru +=parseFloat(keyanswer[i],10)
						}
						else{benarsalah="Salah"}
					document.getElementById("daftarnya1").innerHTML +=  KonversiNosoal[i] + ". " + KoleksiABCD[i] + " (" +benarsalah +  ")<p/>";
						nodijawab +=1
				}
//			if(KonversiNosoal[i]!== nodijawab){
//				var koleksitakdijawab = KonversiNosoal[i];
//					if (KonversiNosoal[i]==koleksitakdijawab){
				//arraytakdijawab +=  "' + KonversiNosoal[i] + ']";  //+ ". " + KoleksiABCD[i] + " (" +benarsalah +  ")<p/>";
				//document.getElementById("gadijawab").innerHTML+="<p>" + KonversiNosoal[i] + "</p>";}
//				}
			  }
			  var rumusbaru = jumlahbenarbaru/jumlahsoalbaru * 100;
			  rumusbaru = rumusbaru.toFixed(2);
			document.getElementById("sum2").innerHTML =rumusbaru;
			document.getElementById("dijawab").innerHTML= nodijawab + " soal PG.";
			document.getElementById("gadijawab").innerHTML=jumlahsoalbaru - nodijawab   + " soal PG.";
 }

function TambahTextarea(idTxtArea){
document.getElementById("TxtKeteranganPoto"+idTxtArea).style.display="block";
document.getElementById("SimpanKeteranganPoto"+idTxtArea).style.display="block";
document.getElementById("TambahTextarea"+idTxtArea).style.display="none";
//document.getElementById("label"+idTxtArea).style.before.content="Edit Keterangan Poto";
}

function BtnSimpanKeteranganPoto(idTxtArea){
var TeksPoto = document.getElementById("TxtKeteranganPoto"+idTxtArea).value;
var TeksPotoSpasi = TeksPoto.replace(/\n/g, "<br/>");
document.getElementById("text-eviden"+idTxtArea).innerHTML=TeksPotoSpasi;

//document.getElementById("TambahTextarea"+idTxtArea).style.display="block";
document.getElementById("TambahTextarea"+idTxtArea).innerHTML="Edit Keterangan Poto";



document.getElementById("TxtKeteranganPoto"+idTxtArea).style.display="none";
document.getElementById("SimpanKeteranganPoto"+idTxtArea).style.display="none";
document.getElementById("label"+idTxtArea).style.display="block";
//document.getElementById("label"+idTxtArea).style.before.content="Ganti Poto";

}

function DaftarEviden(){
var elekT = document.getElementsByClassName("evidenpoto"); 
			 var jumlahTugas = elekT.length;
			 document.getElementById("banyatugas").innerHTML =jumlahTugas;
			
			var jumlahbenarbaru = 0;
			 for(i = 0; i < elekT.length; i++) {
			 var nourut= i + 1
			 var Tugasnya= document.getElementById("EvidenPoto" + nourut).innerHTML
			document.getElementById("daftartugas").innerHTML +=  "Tugas ke-" + nourut + ". <p>" + Tugasnya + "</p>";
			  }

			  }
			  
function refresh() {    
    setTimeout(function () {
        location.reload()
    }, 100);
alert("Kembali ke soal latihan akan mereload lamaso")
};

function getFeedback(optionId, optionsNum, ideviceId, mode) {
	var dipilih = document.getElementById(optionId+ideviceId);
		
    for (i = 0; i< optionsNum; i++) { 
		
        if (mode == "multi")
            //id = "sa" + i + "b" +ideviceId;
			id = "gamejawaban" + i  +ideviceId;
			
        else
            //id = "s" + i + "b" +ideviceId
			id = "gamejawaban" + i  +ideviceId;
        if(i == optionId)
            document.getElementById(id).style.display = "block";
			
        else
            document.getElementById(id).style.display = "None";
			
			
    }
    if (mode == 'truefalse') {
        document.getElementById("sfbk" + ideviceId).style.display = "block";
    }
}

function previewImage(idInput) {
    document.getElementById("image-preview"+idInput).style.display = "block";
    var oFReader = new FileReader();
     oFReader.readAsDataURL(document.getElementById("image-source"+idInput).files[0]);

    oFReader.onload = function(oFREvent) {
      document.getElementById("image-preview"+idInput).src = oFREvent.target.result;
	  document.getElementById("TambahTextarea"+idInput).style.display="block";
	  document.getElementById("label"+idInput).style.display="none";
	  //document.getElementById("label"+idTxtArea).style.before.content="Ganti Poto";
	  //document.getElementById("EditKeteranganPoto"+idTxtArea).style.display="none";
    };
  };	
 
