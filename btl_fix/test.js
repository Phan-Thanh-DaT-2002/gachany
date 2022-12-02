function changeMale(){
  document.querySelector('#buttonMale').classList.add('tat');
  lay_thong_tin();
}
function lay_thong_tin(){
  document.querySelector('#t_t').classList.remove('tat');
}

function check_changeMale(){
  var ho_ten = document.querySelector('#ho_ten').value;
  var tuoi = document.querySelector('#tuoi').value;
  var cung_hoang_dao = document.querySelector('#cung_hoang_dao').value;
  var so_dien_thoai = document.querySelector('#so_dien_thoai').value;
  var dia_chi = document.querySelector('#dia_chi').value;
  var so_thich = document.querySelector('#so_thich').value;


  if(ho_ten === '' || tuoi === '' || cung_hoang_dao === '' || so_dien_thoai === '' || dia_chi === '' || so_thich === ''){alert('bạn chưa nhập đủ thông tin')}
  else {
    document.querySelector('#ho_ten_male').value = ho_ten
    document.querySelector('#tuoi_male').value = tuoi
    document.querySelector('#cung_hoang_dao_male').value = cung_hoang_dao
    document.querySelector('#so_dien_thoai_male').value = so_dien_thoai
    document.querySelector('#dia_chi_male').value = dia_chi
    document.querySelector('#so_thich_male').value = so_thich
  setTimeout(function(){
    document.querySelector('#tableMale').classList.remove('tat');
    document.querySelector('#t_t').classList.add('tat');
  }, 1000);
}
}