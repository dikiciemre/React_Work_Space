import React from 'react';
// button.jsx isimli bu dosya app.js içerisinde çağırılır
// burada bir adet buton kodu yazılmıştır daha sınra bu kod app.js de çağırıldı
// name isminde bir değer verildi ve propera dönüştürüldü
function Button({ name }) {
  return (
    <div>
      <button className="custom-button">{name}</button>
    </div>
  );
}

export default Button;
