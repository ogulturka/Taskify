// AnaSayfa.js
import React from 'react';
import './AnaSayfa.css';

const AnaSayfa = () => {
  return (
    <div className="ana-sayfa-container">
      <h2>2024 Aktivite Müşteri Dağılımı</h2>
      <div className="grafikler">
        {/* Grafikleri buraya yerleştir */}
        <div className="grafik1">
          {/* Aktivite Saatleri ve Fatura Saatleri için bir grafik */}
        </div>
        <div className="grafik2">
          {/* Aktivite/Fatura Performans grafiği */}
        </div>
      </div>

      <div className="istatistikler">
        <div className="aktivite-durumu">
          <h3>Aktivite Durumu</h3>
          <p>42% Faturalandı</p>
          <p>Faturalanacak Gün/Saat: 23d/18h</p>
          <p>Faturalanan Gün/Saat: 9.75d/78h</p>
        </div>

        <div className="takvim">
          <h3>Takvim</h3>
          {/* Takvim bileşeni */}
        </div>

        <div className="izin-durumu">
          <h3>Yıllık İzin Durumu</h3>
          <p>Kullanılan Gün: 0 Gün</p>
          <p>Kalan İzin Gün: 14 Gün</p>
        </div>
      </div>

      <div className="izinliler">
        <h3>Bugün İzinli Olanlar</h3>
        {/* İzinli çalışanların listesi */}
      </div>
    </div>
  );
};

export default AnaSayfa;
