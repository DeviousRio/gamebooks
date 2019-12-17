import React from 'react';
import './style.css';

function Homepage() {
    return (
        <div className="site-homepage">
            <h1 className="site-title">Научете всичко ново покрай книгите-игри!</h1>
            <div>
                <p className="site-description">Здравейте приятели и добре дошли! Тук ще можете да научите всичко за нашите поредици книги-игри - "Призвание герой" и "Призвание герой представя". Освен тях ще ви предложим новини за всичко около жанра, а ще намерите при нас и книги-игри от други български автори.</p>
            </div>
            <ul className="homepage-list">
                <li>
                    <img src="https://knigi-igri.bg/media/zoo/images/cover_paradoksi_1d0b2306ce432fc81d414f6ee746f1ee.png" alt="book" />
                    <span>Силна болка пронизва главата ти и, ако имаше сили, би изкрещял. През облака от изтощение усещаш студенината на камък под гърба си. С мъка отваряш очи...</span>
                </li>
                <li>
                    <img src="https://knigi-igri.bg/media/zoo/images/cover_don_mon_db89ba647723b9638cd690226f874673.png" alt="book" />
                    <span>Готов ли си за купон? Мацки, покер, алкохол и парти до зори на круизен кораб по Дунав! Звучи страхотно само да не беше момче за всичко, което трябва да бели картофи в кухнята и да води до тоалетна кучето на ВИП гости.</span>
                </li>
                <li>
                    <img src="https://knigi-igri.bg/media/zoo/images/cover_spisanie_broi_12_e62263d35217c439fb4a9c05f68614a3.png" alt="book" />
                    <span>Брой 12 на Списание за книги-игри (май, 2019 г.) включва множество любопитни материали за жанра и шест разнородни интерактивни истории.</span>
                </li>
            </ul>
        </div>
    )
}

export default Homepage;