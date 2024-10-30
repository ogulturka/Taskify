import React, { useState } from 'react';
import './İzin.css'; 

const İzin = () => {
  const [izinTipi, setIzinTipi] = useState('Günlük İzin');
  const [izinTuru, setIzinTuru] = useState('Yıllık İzin');
  const [startDate, setStartDate] = useState('2024-10-01');
  const [endDate, setEndDate] = useState('2024-10-31');


  const izinTurleri = [
    'Yıllık İzin',
    'Doğum İzni',
    'Ücretsiz İzin',
    'Raporlu İzin'
  ];

  // Formu kaydetme
  const handleSave = () => {
    // Kaydetme işlemini burada yapabilirsiniz
    console.log('İzin Tipi:', izinTipi);
    console.log('İzin Türü:', izinTuru);
    console.log('Başlangıç Tarihi:', startDate);
    console.log('Bitiş Tarihi:', endDate);
  };

  return (
    <div className="expense-report">
      <h2>İzin Parametreleri</h2>

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

      <div className="izin-tipi">
        <h4>İzin Tipini Seçin</h4>
        <select value={izinTipi} onChange={e => setIzinTipi(e.target.value)}>
          <option value="Günlük İzin">Günlük İzin</option>
          <option value="Saatlik İzin">Saatlik İzin</option>
        </select>
      </div>

      <div className="izin-turu">
        <h4>İzin Türünü Seçin</h4>
        <select value={izinTuru} onChange={e => setIzinTuru(e.target.value)}>
          {izinTurleri.map(turu => (
            <option key={turu} value={turu}>{turu}</option>
          ))}
        </select>
      </div>

      <div className="save-button">
        <button onClick={handleSave}>Kaydet</button>
      </div>
    </div>
  );
};

export default İzin;
