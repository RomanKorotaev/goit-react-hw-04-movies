import { useState, useCallback} from 'react';
import s from './SearchForm.module.css'
import {ImSearch} from 'react-icons/im'


function SearchForm( {onFormSubmit} ) {
    
    const [quiryWord, setQuiryWord] = useState ('');

    const handleQueryChange = useCallback (event => {
        setQuiryWord ( event.currentTarget.value.toLowerCase() );
       
        console.log ('Сработала функция handleQueryChange с применением хука оптимизации useCallback. Значение this.state.quiryWord :', quiryWord)
      }, [])

      const handleSubmit = event => {
        event.preventDefault(); //сбрасываем перезагрузку по умолчанию при сабмите формы
    
        // Проверяем не пустая ли строка в инпуте
        if (quiryWord.trim() === '') {
        alert ("Please, enter your query!")
          return;
        }
    
        onFormSubmit(quiryWord);
        setQuiryWord (""); //делаем сброс поискового слова после сабмита формы (для новых вводов)
      };

      console.log ("quiryWord = ", quiryWord)

    return (
        <div className=''>
           
            <form onSubmit={handleSubmit}  className={s.searchForm}>
              <button type="submit" className={s.submitBtn }>
                {/* <span className=''>Search</span> */}
                Search
                <ImSearch style={{marginLeft: 15 }}/>
                
              </button>

                <input
                className={s.inputStyle }
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