
  function changeFemale() {    
    lay_thong_tin_female();
    $('#infoFemale').addClass('tat');

  }
  function lay_thong_tin_female() {
    $('#t_t').append(` 
    <div class="center_bt_check">
    <button type="button" onclick="check_changeFemale();" class="btn btn-success">check</button>
  </div>
    `);
    $('#t_t').removeClass('tat');

  }
  
  function check_changeFemale() {
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
      $('#ho_ten_female').val(ho_ten);
      $('#tuoi_female').val(tuoi)
      $('#cung_hoang_dao_female').val(cung_hoang_dao)
      $('#so_dien_thoai_female').val(so_dien_thoai)
      $('#dia_chi_female').val(dia_chi)
      $('#so_thich_female').val(so_thich)
      setTimeout(function () {
        $('#tableFemale').removeClass('tat');
        $('#t_t').addClass('tat');
      }, 1000);
    }
  }
  function check_name(name) {
    name.trim();
    var D = 0;
    for (var i = 0; i < name.split(' ').length; i++) {
      if (name.split(' ')[i] !== '') {
        D++;
      }
    }
    if (D < 2) { return false; }
    else { return true; }
  }

