const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "")

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "")
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", "")
      const b = prompt("На сколько оцените его?", "")

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b
        console.log("good")
      } else {
        console.log("error")
        i-- //оператор дикремента, по сути вернуть цикл назад
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов")
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Классический зритель")
    } else if (personalMovieDB.count >= 30) {
      console.log("Киноман!!!!")
    } else {
      console.log("Произошла ошибка")
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB)
    }
  },
  writeYuorGenres: function () {
    for (let i = 1; i <= 3; i++) {
      const genre = prompt(`ваш любимый жанр под номером ${i}?`)
      if (genre === null || genre === "") {
        console.log("Error")
        i--
      } else {
        personalMovieDB.genres[i - 1] = genre
      }
    }

    personalMovieDB.genres.forEach((value, index) => {
      console.log(`Любимый жанр #${index + 1} - это ${value}`)
    })
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.private) {
      personalMovieDB.private = false
    } else {
      personalMovieDB.private = true
    }
  },
}

// //Запуск программы
personalMovieDB.start()

// //Проверка ввода
personalMovieDB.rememberMyFilms()

// //Ответ пользователя о просмотренных фильмах
personalMovieDB.detectPersonalLevel()

//Открыть база данных или нет
personalMovieDB.showMyDB(personalMovieDB.private)

//Любимый жанр
personalMovieDB.writeYuorGenres()

//Переключатель privat
personalMovieDB.toggleVisibleMyDB()
