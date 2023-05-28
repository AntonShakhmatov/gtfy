// Обработчик нажатия клавиши "Enter" на поле ввода
$('#user_message').keypress(function(event) {
    // Если нажата клавиша "Enter"
    if (event.which === 13) {
        // Получаем значение выбранного языка перевода
        var lang = $('#lang').val();
        
        // Получаем значение поля ввода
        var userMessage = $('#user_message').val();
        
        // Добавляем значение из value в конец строки
        var additionalText = '';
        if(lang == 'rus'){
        additionalText = ' переведи на русский ';
        }else if (lang == 'uzb'){
        additionalText = ' переведи на узбекский ';
        }else if (lang == 'eng'){
        additionalText = ' переведи на английский '; 
        }else if (lang == 'cz'){
        additionalText = ' переведи на чешский '; 
        }else if (lang == 'esp'){
        additionalText = ' переведи на испанский '; 
        }else if (lang == 'it'){
        additionalText = ' переведи на итальянский '; 
        }else if (lang == 'fra'){
        additionalText = ' переведи на французский '; 
        }else if (lang == 'de'){
        additionalText = ' переведи на немецкий '; 
        }else if (lang == 'bra'){
        additionalText = ' переведи на португальский '; 
        }else if (lang == 'chi'){
        additionalText = ' переведи на китайский ';
        }else if (lang == 'jpn'){
        additionalText = ' переведи на японский ';
        }
        var textToTranslate = userMessage + additionalText;
        
        // Очищаем поле ввода и добавляем измененное значение с запросом на перевод
        $('#user_message').val(textToTranslate);
    }
        // Отправляем ajax запрос на сервер, передавая данные формы
        $.ajax({
            url: 'default',
            type: 'post',
            data: formData,
            success: function(response) {
              // Если успешно получили ответ, вставляем его в блок с переводом
              $('#translated_message').html(response);
            }
          });
        // Очищаем поле ввода
        $('#user_message').val('');
});