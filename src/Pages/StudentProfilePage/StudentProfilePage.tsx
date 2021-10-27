import React from 'react';
import './StudentProfilePage.scss';

const StudentProfilePage = () => {
  const phoneNumber = '+62652';
  const email = 'gjhfkl';

  return (
    <section className='profile'>
      <div className='profile__info'>
        <div className='profile__info-block'>
          <div className='profile__info-row'>
            <div className='profile__info-elem'>
              <div className='profile__info-subtitle'>Прізвище, ім’я, по-батькові</div>
              <div className='profile__info-important'>Name</div>
            </div>
          </div>
          <div className='profile__info-row'>
            <div className='profile__info-elem'>
              <div className='profile__info-subtitle'>Дата народження</div>
              <div>DATE</div>
            </div>
            <div className='profile__info-elem'>
              <div className='profile__info-subtitle'>Номер телефону</div>
              <div>
                <a href={`tel:${phoneNumber}`}>
                  {phoneNumber}
                </a>
              </div>
            </div>
            <div className='profile__info-elem'>
              <div className='profile__info-subtitle'>E-mail</div>
              <div>
                <a href={`mailto:${email}`}>
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='profile_info-row profile__info-block'>
          <div className='profile__info-elem'>
            <div className='profile__info-subtitle'>Група</div>
            <div className='profile__info-important'>
              5ПР2
            </div>
          </div>
        </div>
        <div className='profile_info-row profile__info-block'>
          <div className='profile__info-elem'>
            <div className='profile__info-subtitle'>Батько</div>
            <div>Батько,
              <a href={`tel:${phoneNumber}`}>
                {phoneNumber}
              </a>
            </div>
          </div>
          <div className='profile__info-elem'>
            <div className='profile__info-subtitle'>Мати</div>
            <div>Мати,
              <a href={`tel:${phoneNumber}`}>
                {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentProfilePage;