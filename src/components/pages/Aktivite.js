import React, { useState } from 'react';
import './Aktivite.css';

const Aktivite = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [formData, setFormData] = useState({
    project: 'borusan',
    activityHour: 0,
    invoiceHour: 0,
    workLocation: 'ev',
    startTime: '09:00',
    endTime: '',
    description: '',
  });

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log('Aktivite Kaydedildi:', formData);
    setFormData({
      project: 'borusan',
      activityHour: 0,
      invoiceHour: 0,
      workLocation: 'ev',
      startTime: '09:00',
      endTime: '',
      description: '',
    });
  };

  return (
    <div className="aktivite-container">
      
      <div className="calendar">
        <div className="calendar-header">
          <button className="prev-month">‹</button>
          <span className="current-month">01 Ekim - 31 Ekim 2024</span>
          <button className="next-month">›</button>
        </div>
        <div className="calendar-body">
          <table>
            <thead>
              <tr>
                <th>Pazartesi</th>
                <th>Salı</th>
                <th>Çarşamba</th>
                <th>Perşembe</th>
                <th>Cuma</th>
                <th>Cumartesi</th>
                <th>Pazar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="day" onClick={() => handleDayClick('30-09-2024')}>30 Eyl</td>
                <td className="day" onClick={() => handleDayClick('01-10-2024')}>1 Eki</td>
                <td className="day" onClick={() => handleDayClick('02-10-2024')}>2 Eki</td>
                <td className="day" onClick={() => handleDayClick('03-10-2024')}>3 Eki</td>
                <td className="day" onClick={() => handleDayClick('04-10-2024')}>4 Eki</td>
                <td className="day" onClick={() => handleDayClick('05-10-2024')}>5 Eki</td>
                <td className="day" onClick={() => handleDayClick('06-10-2024')}>6 Eki</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

      {selectedDate && (
        <div className="activity-form">
          <h3>Aktivite Girişi - {selectedDate}</h3>
          <form className="activity-form-grid">
            <div>
              <label>Proje Seç:</label>
              <select name="project" value={formData.project} onChange={handleInputChange}>
                <option value="borusan">Borusan</option>
                <option value="sisecam">Şişecam</option>
                <option value="ipragaz">İpragaz</option>
              </select>
            </div>

            <div>
              <label>Aktivite Saati:</label>
              <input
                type="number"
                name="activityHour"
                value={formData.activityHour}
                min="0"
                max="10"
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label>Fatura Saati:</label>
              <input
                type="number"
                name="invoiceHour"
                value={formData.invoiceHour}
                min="0"
                max="10"
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label>Çalışma Yeri:</label>
              <select name="workLocation" value={formData.workLocation} onChange={handleInputChange}>
                <option value="ev">Ev</option>
                <option value="sirket">Şirket</option>
              </select>
            </div>

            <div>
              <label>Başlangıç Saati:</label>
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label>Bitiş Saati:</label>
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
              />
            </div>

            <div className="description">
              <label>Proje Açıklaması:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="button-container">
              <button type="button" onClick={handleSave} className="save-button">Aktiviteyi Kaydet</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Aktivite;
