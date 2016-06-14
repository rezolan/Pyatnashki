$(document).ready(function(){
	//объявляю массив пятнашек
	//var p15=[4,2,3,1,5,7,6,8,0,10,11,12,15,14,9,13];
	var p15=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];

	$('#start').bind('click', showP15);

	function showP15(){
		//отменяю событие клик
		$('.block').unbind('click');
		// удаляю все блоки
		$('.game-block').find('*').remove();
		//отрисовываю все блоки
			for (var j=0; j<16; j++) {
				if (p15[j]==0) {
					$('.game-block').append('<div class="block"></div>');
				}
				else {
					$('.game-block').append('<div class="block fill">'+p15[j]+'</div>');
				}
			}
		$('.block').bind('click', moveBlock);
		pobeda();
	}
	function moveBlock(){
		var p=$(this).index();
		//console.log(p);
		// переменная для нуля
		var n=100;
		if (p!=0 && p!=1 && p!=2 && p!=3 && p15[p-4]==0) {
			n=p-4;
		}
		else if (p!=12 && p!=13 && p!=14 && p!=15 && p15[p+4]==0) {
			n=p+4;
		}
		else if (p!=3 && p!=7 && p!=11 && p!=15 && p15[p+1]==0) {
			n=p+1;
		}
		else if (p!=0 && p!=4 && p!=8 && p!=12 && p15[p-1]==0) {
			n=p-1;
		}
		// если нуль есть в соседях - меняю местами
		if (n!=100) {
			p15[n]=p15[p];
			p15[p] = 0;
			showP15();
		}
	}
	function pobeda(){

		for (var i=0; i<16; i++){
			if (p15[i]!=i+1){
				break;
			}
		}
		if (i==15) {
			alert('You win!');
		}
	}
});