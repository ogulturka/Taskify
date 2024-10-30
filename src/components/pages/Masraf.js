import React, { useState } from 'react';
import './Masraf.css'; 

const Masraf = () => {
  const [masrafTipi, setmasrafTipi] = useState('Kahvaltı');
  const [startDate, setStartDate] = useState('2024-10-01');
  const [endDate, setEndDate] = useState('2024-10-31');

  
  // Formu kaydetme
  const handleSave = () => {
    console.log('Seçilen Masraf Tipleri:', masrafTipi);
    console.log('Başlangıç Tarihi:', startDate);
    console.log('Bitiş Tarihi:', endDate);
  };

  return (
    <div className="expense-report">
      <h2>Masraf Parametreleri</h2>

      <div className="date-selection">
        <label>Başlangıç Tarihi</label>
        <input 
          type="date" 
          name="startDate" 
          value={startDate} 
          onChange={e => setStartDate(e.target.value)} 
        />

        <label>Bitiş Tarihi</label>
        <input 
          type="date" 
          name="endDate" 
          value={endDate} 
          onChange={e => setEndDate(e.target.value)} 
        />
      </div>

      <div className="masraf-tipi">
        <h4>Masraf Tipini Seçin</h4>
        <select value={masrafTipi} onChange={e => setmasrafTipi(e.target.value)}>
          <option value="Kahvaltı">Kahvaltı</option>
          <option value="Öğlen Yemeği">Öğle Yemeği</option>
          <option value="Köprü, Otoban, HGS/OGS Geçişi">Köprü, Otoban, HGS/OGS Geçişi</option>
          <option value="Otobüs, Minibüs, Metro Ücreti">Otobüs, Minibüs, Metro Ücreti</option>
          <option value="Otopark Ücreti">Otopark Ücreti</option>
          <option value="Taksi">Taksi</option>
        </select>
      </div>

      <div className="save-button">
        <button onClick={handleSave}>Kaydet</button>
      </div>
    </div>
  );
};

export default Masraf;
