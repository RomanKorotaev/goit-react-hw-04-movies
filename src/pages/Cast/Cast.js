import {useParams} from "react-router-dom"

function Cast () {

    const {movieID} = useParams();

    console.log ("Для тестирования новых функций, проверим useParams и получим диннамический параметр из адресной строки - идентификатор фильма movieID : ", movieID)

    return <p>Cast- Тут будет рендериться Актёрский состав {movieID}</p>
}

export default Cast;