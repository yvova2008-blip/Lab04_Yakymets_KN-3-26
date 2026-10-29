# Карта дефектів (DEFECTS.md)

| № | Рядок | Група | Опис дефекту | Прогноз (Інструмент / Правило / Опція) | Виявлено | Виправлено |
|---|---|---|---|---|---|---|
| 1 | 2 | Ф1 | Змішані відступи (табуляції та пробіли) | Prettier, tabWidth, useTabs | Prettier | Prettier |
| 2 | 148 | Ф2 | Неоднакові пробіли навколо операторів (`x=5`) | Prettier, базове форматування | Prettier | Prettier |
| 3 | 149 | Ф3 | Рядки в одинарних і подвійних лапках з апострофом | Prettier, singleQuote | Prettier | Prettier |
| 4 | 150 | Ф4 | Частина інструкцій без крапки з комою | Prettier, semi | Prettier | Prettier |
| 5 | 151 | Ф5 | Виклик функції з аргументами, довший за printWidth | Prettier, printWidth | Prettier | Prettier |
| 6 | 148 | Ф6 | Кілька інструкцій в одному рядку | Prettier, базове форматування | Prettier | Prettier |
| 7 | 154 | Ф7 | Короткий об'єкт з некоректним переносом | Prettier, objectWrap | Prettier | Prettier |
| 8 | 160 | Ф8 | Масив без завершальної коми | Prettier, trailingComma | Prettier | Prettier |
| 9 | 167 | Ф9 | Однорядковий об'єкт з неоднаковими пробілами | Prettier, bracketSpacing | Prettier | Prettier |
| 10 | 170 | Ф10 | Стрілкова функція з дужками навколо одного параметра | Prettier, arrowParens | Prettier | Prettier |
| 11 | 155 | Ф11 | Об'єкт з неоднаковим використанням лапок у ключах | Prettier, quoteProps | Prettier | Prettier |
| 12 | 173 | Ф12 | Довгий логічний вираз із перенесенням | Prettier, printWidth, experimentalOperatorPosition | Prettier | Prettier |
| 13 | 180 | Ф13 | Зайві порожні рядки поспіль | Prettier, базове форматування | Prettier | Prettier |
| 14 | 22 | К | Невикористана змінна `taxRate` | ESLint, no-unused-vars | ESLint | Вручну |
| 15 | 143 | К | Неоголошена змінна `totl` / `n` | ESLint, no-undef / id-length | ESLint | Вручну |
| 16 | 50 | К | Присвоєння в умові `if (100 = price)` | ESLint, no-cond-assign | ESLint | Вручну |
| 17 | 108 | К | Мертвий код після `return` | ESLint, no-unreachable | ESLint | Вручну |
| 18 | 114 | К | Дублювання ключа `clientName` | ESLint, no-dupe-keys | ESLint | Вручну |
| 19 | 124 | К | Повторюваний case у `switch` | ESLint, no-duplicate-case | ESLint | Вручну |
| 20 | 132 | К | Присвоєння змінної самій собі (`samplePrice = samplePrice`) | ESLint, no-self-assign | ESLint | Вручну |
| 21 | 136 | К | Порожній блок `if` | ESLint, no-empty | ESLint | Вручну |
| 22 | 50 | В | Порівняння yoda style (`100 == price`) | ESLint, yoda | ESLint | ESLint fix |
| 23 | 87 | В | Висока складність функції (`complexity > 6`) | ESLint, complexity | ESLint | Вручну |
| 24 | 140 | В | Неявне перетворення типів `+"123"` | ESLint, no-implicit-coercion | ESLint | ESLint fix |
| 25 | 7 | В | Занадто коротке ім'я змінної `n` | ESLint, id-length | ESLint | Вручну |
| 26 | 8 | В | Використання `var` замість `let`/`const` | ESLint, no-var | ESLint | ESLint fix |
| 27 | 144 | В | Цикл `for...in` без `hasOwnProperty` | ESLint, guard-for-in | ESLint | Вручну |
| 28 | 200 | Л | Неправильний коефіцієнт знижки (`0.8` замість `0.9`) | Жоден (Логічна помилка) | Жоден | Вручну |
| 29 | 67 | Л | Пропуск останнього дня у циклі (`<` замість `<=`) | Жоден (Логічна помилка) | Жоден | Вручну |