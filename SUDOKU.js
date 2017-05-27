/*DEVELOPED BY MAYK*/
var clickedNumber = "";
var correctCellCount = 0;
var errorCount = 0;
// OBJECT PROTOTYPE
function Cell(number,value,id){
  this.cellNumber = number;
  this.cellValue = value;
  this.buttonID = id;
}

function numberClick(no){
  var st = "#num"+no;
  var btn = document.querySelector(st);
  btn.classList.add("btn-box-onClick");

  for(var i=1;i<=9;i++){
    if(i!==no){
      var st2="#num"+i;
      var btn2 = document.querySelector(st2);
      btn2.classList.remove("btn-box-onClick");
    }
  }
  clickedNumber = no;
}

function addNumber(num){
  if(clickedNumber !="" && clickedNumber>0 && clickedNumber <10){
    var st= "#field"+num;
    var btn = document.querySelector(st);
    var cellNo = "cell"+num;

    if(btn.textContent != clickedNumber){

      btn.textContent = clickedNumber;
      btn.classList.remove("btn-info");

      if(checkAnswer(clickedNumber,cellNo)){
        btn.classList.remove("btn-danger");
        btn.classList.add("btn-success");
        btn.disabled=true;

      }
      else {
        btn.classList.remove("btn-info");
        btn.classList.add("btn-danger");
        errorCount++;
        if(errorCount === 3){
          alert("Keep Going..!");
        }
        else if (errorCount ===10){
          alert("Seriously?");
        }else if(errorCount === 20){
          alert("Again..?");
        }else if(errorCount === 30){
          alert("Noob..!");
        }else if(errorCount === 50){
          alert("You sucks...!");
        }else if(errorCount === 100){
        	alert("Use your brain dude..!");
        }
      }
    }
    else {
      btn.textContent = "";
      btn.classList.remove("btn-success");
      btn.classList.remove("btn-danger");
      btn.classList.add("btn-info");
    }
  }
}

function checkAnswer(num,cellNo){
  var ans = false;
  console.log("checkAnswer of"+this[cellNo].cellValue+"&"+cellNo);
  console.log(cellNo);

    if(num == this[cellNo].cellValue){
      ans=true;
      correctCellCount++;
      if(correctCellCount === 81){
        alert("Congratulations.....!");
      }
    }
  return ans;
}
// SHOW VALUES
function showValues(){
  var numberArray = [
    14,
    22,
    25,
    29,
    31,
    33,
    37,
    38,
    42,
    26,
    51,
    54,
    56,
    59,
    64,
    68,
    72,
    73,
    77,
    79,
    82,
    84,
    85,
    88,
    96
  ];
  numberArray.forEach(function addValue(btnNo){
      var btnID = "field"+btnNo;
      var tag = document.getElementById(btnID);
      var cellNo = "cell"+btnNo;
      tag.textContent = this[cellNo].cellValue +"";
      tag.disabled = true;
      tag.classList.remove("btn-info");
      tag.classList.add("btn-success");
      correctCellCount++;
    }
  );
}

// ADDING VALUES
  // ROW 1
  var cell11 = new Cell(11,8,"#field11");
  var cell12 = new Cell(12,5,"#field12");
  var cell13 = new Cell(13,2,"#field13");

  var cell14 = new Cell(14,3,"#field14");
  var cell15 = new Cell(15,4,"#field15");
  var cell16 = new Cell(16,9,"#field16");

  var cell17 = new Cell(17,1,"#field17");
  var cell18 = new Cell(18,7,"#field18");
  var cell19 = new Cell(19,6,"#field19");
  // ROW 2
  var cell21 = new Cell(21,9,"#field21");
  var cell22 = new Cell(22,3,"#field22");
  var cell23 = new Cell(23,7,"#field23");

  var cell24 = new Cell(24,2,"#field24");
  var cell25 = new Cell(25,1,"#field25");
  var cell26 = new Cell(26,6,"#field26");

  var cell27 = new Cell(27,8,"#field27");
  var cell28 = new Cell(28,4,"#field28");
  var cell29 = new Cell(29,5,"#field29");
  // ROW 3
  var cell31 = new Cell(31,1,"#field31");
  var cell32 = new Cell(32,6,"#field32");
  var cell33 = new Cell(33,4,"#field33");

  var cell34 = new Cell(34,7,"#field34");
  var cell35 = new Cell(35,8,"#field35");
  var cell36 = new Cell(36,5,"#field36");

  var cell37 = new Cell(37,9,"#field37");
  var cell38 = new Cell(38,2,"#field38");
  var cell39 = new Cell(39,3,"#field39");
  // ROW 4
  var cell41 = new Cell(41,6,"#field41");
  var cell42 = new Cell(42,2,"#field42");
  var cell43 = new Cell(43,5,"#field43");

  var cell44 = new Cell(44,8,"#field44");
  var cell45 = new Cell(45,3,"#field45");
  var cell46 = new Cell(46,1,"#field46");

  var cell47 = new Cell(47,7,"#field47");
  var cell48 = new Cell(48,9,"#field48");
  var cell49 = new Cell(49,4,"#field49");
  // ROW 5
  var cell51 = new Cell(51,7,"#field51");
  var cell52 = new Cell(52,8,"#field52");
  var cell53 = new Cell(53,9,"#field53");

  var cell54 = new Cell(54,5,"#field54");
  var cell55 = new Cell(55,2,"#field55");
  var cell56 = new Cell(56,4,"#field56");

  var cell57 = new Cell(57,6,"#field57");
  var cell58 = new Cell(58,3,"#field58");
  var cell59 = new Cell(59,1,"#field59");
  // ROW 6
  var cell61 = new Cell(61,3,"#field61");
  var cell62 = new Cell(62,4,"#field62");
  var cell63 = new Cell(63,1,"#field63");

  var cell64 = new Cell(64,6,"#field64");
  var cell65 = new Cell(65,9,"#field65");
  var cell66 = new Cell(66,7,"#field66");

  var cell67 = new Cell(67,2,"#field67");
  var cell68 = new Cell(68,5,"#field68");
  var cell69 = new Cell(69,8,"#field69");
  // ROW 7
  var cell71 = new Cell(71,4,"#field71");
  var cell72 = new Cell(72,9,"#field72");
  var cell73 = new Cell(73,3,"#field73");

  var cell74 = new Cell(74,1,"#field74");
  var cell75 = new Cell(75,6,"#field75");
  var cell76 = new Cell(76,2,"#field76");

  var cell77 = new Cell(77,5,"#field77");
  var cell78 = new Cell(78,8,"#field78");
  var cell79 = new Cell(79,7,"#field79");
  // ROW 8
  var cell81 = new Cell(81,2,"#field81");
  var cell82 = new Cell(82,7,"#field82");
  var cell83 = new Cell(83,6,"#field83");

  var cell84 = new Cell(84,4,"#field84");
  var cell85 = new Cell(85,5,"#field85");
  var cell86 = new Cell(86,8,"#field86");

  var cell87 = new Cell(87,3,"#field87");
  var cell88 = new Cell(88,1,"#field88");
  var cell89 = new Cell(89,9,"#field89");
  // ROW 9
  var cell91 = new Cell(91,5,"#field91");
  var cell92 = new Cell(92,1,"#field92");
  var cell93 = new Cell(93,8,"#field93");

  var cell94 = new Cell(94,9,"#field94");
  var cell95 = new Cell(95,7,"#field95");
  var cell96 = new Cell(96,3,"#field96");

  var cell97 = new Cell(97,4,"#field97");
  var cell98 = new Cell(98,6,"#field98");
  var cell99 = new Cell(99,2,"#field99");
/*DEVELOPED BY MAYK*/
