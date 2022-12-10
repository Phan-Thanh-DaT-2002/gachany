function changeMale() {
  $('#buttonMale').addClass('tat');
  $('#infoFemale').addClass('tat');
  lay_thong_tin_male();
}
function lay_thong_tin_male() {
  $('#t_t').append(` 
  <div class="center_bt_check">
  <button id="check_changeMale" type="button" onclick="check_changeMale();" class="btn btn-success">Nhập</button> 
  <br>
  <button type="button" id="huy_male" onclick="huy();" class="btn btn-outline-danger">Hủy</button>
</div>
  `);
  $('#t_t').removeClass('tat');
}

function check_changeMale() {
  var ho_ten = $('#ho_ten').val();
  var tuoi = $('#tuoi').val();
  var cung_hoang_dao = $('#cung_hoang_dao').val();
  var so_dien_thoai = $('#so_dien_thoai').val();
  var dia_chi = $('#dia_chi').val();
  var so_thich = $('#so_thich').val();


  if (ho_ten === '' || tuoi === '' || cung_hoang_dao === '' || so_dien_thoai === '' || dia_chi === '' || so_thich === '') { alert('bạn chưa nhập đủ thông tin') }
  else if (check_name(ho_ten) === false) {
    alert('họ và tên phải trên 1 từ chứ bạn nhỉ');
  }
  else if (tuoi < 14 || tuoi > 30) {
    if (tuoi < 14) { alert('học hành đi yêu đương gì tuổi này') }
    else if (tuoi > 30) { alert('các bác kiếm vợ đi chứ kiếm người yêu gì nữa') }
  }
  else {
    $('#ho_ten_male').val(ho_ten);
    $('#tuoi_male').val(tuoi)
    $('#cung_hoang_dao_male').val(cung_hoang_dao)
    $('#so_dien_thoai_male').val(so_dien_thoai)
    $('#dia_chi_male').val(dia_chi)
    $('#so_thich_male').val(so_thich)
    setTimeout(function () {
      $('#tableMale').removeClass('tat');
      $("input").attr('readonly', true);
      $('#t_t').addClass('tat');
      $('#ho_ten_female').val('???????????');
      $('#tuoi_female').val('???????????');
      $('#cung_hoang_dao_female').val('???????????');
      $('#so_dien_thoai_female').val('???????????');
      $('#dia_chi_female').val('???????????');
      $('#so_thich_female').val('???????????');
      $('#tableFemale').removeClass('tat');
      setTimeout(function() {
        $('#gachany').removeClass('tat');
        localStorage.setItem('database',"female");
        console.log(database);
      }, 3000)
    }, 1000);
  }
}
