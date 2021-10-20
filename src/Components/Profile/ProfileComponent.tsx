import React from 'react';


import './ProfileStyles.scss'
// @ts-ignore
const ProfileComponent = ({user}) => {
    const {name,date,phone,email,address,group,parents} = user;
    return (
        <section className="profile">
            <div className="profile__name">
                <span>
                    Прізвище, ім’я, по-батькові
                </span>
                <h4>
                    {name}
                </h4>
                <div className="profile__information">
                    <div>
                        <span>
                            Дата народження
                        </span>
                        <h5>
                            {date}
                        </h5>
                        <span>
                            Місце проживання
                        </span>
                        <h5>
                            {address}
                        </h5>
                    </div>
                    <div>
                        <span>
                            Номер телефону
                        </span>
                        <h5>
                            {`+${phone}`}
                        </h5>
                    </div>
                    <div>
                        <span>
                            E-mail
                        </span>
                        <h5>
                            {email}
                        </h5>
                    </div>
                </div>
            </div>
            <div className="profile__group">
                    <span>
                        Група
                    </span>
                <h5>
                    {group}
                </h5>
            </div>
            <div className="profile__parents">
                <span>
                        Батько
                </span>
                <h5>
                    {parents.father.name}, {`+${parents.father.phone}`}
                </h5>
                <span>
                        Мати
                    </span>
                <h5>
                    {parents.mother.name}, {`+${parents.mother.phone}`}
                </h5>
            </div>
        </section>
    );
};

export default ProfileComponent;