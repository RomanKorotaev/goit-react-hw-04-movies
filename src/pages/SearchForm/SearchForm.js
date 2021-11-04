import { useState,   useEffect,  useCallback} from 'react';

// function SearchForm( {onFormSubmit} ) {
    function SearchForm( ) {

    const [quiryWord, setQuiryWord] = useState ('');

    const handleQueryChange = useCallback (event => {
        setQuiryWord ( event.currentTarget.value.toLowerCase() );
       
        console.log ('Сработала функция handleQueryChange с применением хука оптимизации useCallback. Значение this.state.quiryWord :', quiryWord)
      }, [])

      const handleSubmit = event => {
        event.preventDefault(); //сбрасываем перезагрузку по умолчанию при сабмите формы
    
        // Проверяем не пустая ли строка в инпуте
        if (quiryWord.trim() === '') {
        alert ("Введите поисковое слово!")
          return;
        }
    
        // onFormSubmit(quiryWord);
        setQuiryWord (""); //делаем сброс поискового слова после сабмита формы (для новых вводов)
      };


    return (
        <div className=''>
            <p>SearchForm</p>

            {/* <form onSubmit={handleSubmit}  className={s.SearchForm}> */}
            <form>
                <button type="submit" className=''>
                <span className=''>Search</span>
                </button>

                <input
                className=''
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
                value={quiryWord}
                onChange ={handleQueryChange}
                />

            </form>

        </div>
    )
}

export default SearchForm;