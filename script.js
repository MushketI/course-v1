let numberOfFilms

//Запуск программы
function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "")
  }
}

start()

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
}

//Проверка ввода
function rememberMyFilms() {
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
}

rememberMyFilms()

//Ответ пользователя о просмотренных фильмах
function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов")
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Классический зритель")
  } else if (personalMovieDB.count >= 30) {
    console.log("Киноман!!!!")
  } else {
    console.log("Произошла ошибка")
  }
}

detectPersonalLevel()

//Открыть база данных или нет
function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB)
  }
}

showMyDB(personalMovieDB.private)

//Любимый жанр
function writeYuorGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`ваш любимый жанр под номером ${i}?`)
    personalMovieDB.genres[i - 1] = genre
  }
}

writeYuorGenres()
